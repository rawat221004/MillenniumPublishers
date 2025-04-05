"use client"

import { useState, useEffect } from "react"
import { initializeApp } from "firebase/app"
import { getDatabase, ref, onValue } from "firebase/database"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Eye, LogOut, FileDown, Download, FileText } from "lucide-react"

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  databaseURL: "https://millennium-8aa19-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

interface Proposal {
  id: string;
  proposedTitle: string;
  name: string;
  email: string;
  submittedAt: string;
  status: string;
  cvFileUrl?: string;
  fileName?: string;
  fileSize?: number;
  fileType?: string;
  uploadStatus?: string;
  [key: string]: any; // Allow any additional fields
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(null);

  // Check if user is already authenticated
  useEffect(() => {
    const authStatus = localStorage.getItem("adminAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
      fetchProposals();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin") {
      setIsAuthenticated(true);
      localStorage.setItem("adminAuthenticated", "true");
      fetchProposals();
    } else {
      setErrorMsg("Invalid password. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setSelectedProposal(null);
    localStorage.removeItem("adminAuthenticated");
  };

  const fetchProposals = () => {
    setLoading(true);
    const proposalsRef = ref(db, 'bookProposals');
    
    onValue(proposalsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const proposalsList: Proposal[] = Object.entries(data).map(([id, value]) => ({
          id,
          ...(value as any),
        }));
        
        // Sort by submission date (newest first)
        proposalsList.sort((a, b) => 
          new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
        );
        
        setProposals(proposalsList);
      } else {
        setProposals([]);
      }
      setLoading(false);
    }, (error) => {
      console.error("Error fetching proposals:", error);
      setLoading(false);
    });
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleString();
    } catch {
      return dateString;
    }
  };

  // Function to check if a URL is an API reference instead of a storage URL
  const isApiReference = (url: string | undefined): boolean => {
    if (!url) return false;
    return url.startsWith('/api/');
  };

  // Function to generate Excel file and trigger download
  const downloadExcel = () => {
    if (proposals.length === 0) return;
    
    try {
      // Create CSV content
      let csvContent = "data:text/csv;charset=utf-8,";
      
      // Get all unique keys from all proposals
      const allKeys = new Set<string>();
      proposals.forEach(proposal => {
        Object.keys(proposal).forEach(key => {
          if (!['id', 'cvFileUrl', 'illustrations', 'bindingStyle'].includes(key)) {
            allKeys.add(key);
          }
        });
      });
      
      // Create header row
      const headers = Array.from(allKeys);
      csvContent += headers.join(',') + '\n';
      
      // Add data rows
      proposals.forEach(proposal => {
        const row = headers.map(header => {
          let value = proposal[header] || '';
          
          // Handle arrays and objects
          if (Array.isArray(value)) {
            value = value.join('; ');
          } else if (typeof value === 'object' && value !== null) {
            value = JSON.stringify(value);
          }
          
          // Escape quotes and commas for CSV format
          value = ('' + value).replace(/"/g, '""');
          if (value.includes(',') || value.includes('"') || value.includes('\n')) {
            value = `"${value}"`;
          }
          
          return value;
        });
        
        csvContent += row.join(',') + '\n';
      });
      
      // Create download link
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `book-proposals-${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      
      // Trigger download
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading Excel:", error);
      alert("Failed to download Excel. Please try again.");
    }
  };

  // Render the details of the selected proposal
  const renderProposalDetails = () => {
    if (!selectedProposal) return null;
    
    const excludeFields = ['id', 'cvFileUrl', 'fileName', 'fileSize', 'fileType', 'uploadStatus', 'illustrations', 'bindingStyle'];
    
    return (
      <div className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => setSelectedProposal(null)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft size={18} />
            Back to list
          </button>
          <span className="text-sm text-gray-500">
            Submitted: {formatDate(selectedProposal.submittedAt)}
          </span>
        </div>
        
        <div className="border-b pb-4">
          <h2 className="text-2xl font-bold">{selectedProposal.proposedTitle}</h2>
          <p className="text-gray-600">by {selectedProposal.name}</p>
        </div>
        
        {/* File Information Section */}
        {selectedProposal.fileName && (
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FileText size={20} className="text-blue-600" />
                <div>
                  <div className="font-medium">{selectedProposal.fileName || 'Uploaded File'}</div>
                  {selectedProposal.fileSize && (
                    <div className="text-xs text-gray-500">
                      Size: {(selectedProposal.fileSize / (1024 * 1024)).toFixed(2)}MB
                    </div>
                  )}
                  <div className="text-xs text-amber-600">
                    Note: File content not available (metadata only)
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Author Details</h3>
            <div className="space-y-2">
              <p><strong>Name:</strong> {selectedProposal.name}</p>
              <p><strong>Email:</strong> {selectedProposal.email}</p>
              <p><strong>Contact:</strong> {selectedProposal.contactNo}</p>
              <p><strong>Address:</strong> {selectedProposal.address}</p>
              <p><strong>Pin Code:</strong> {selectedProposal.pinCode}</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Manuscript Details</h3>
            <div className="space-y-2">
              <p><strong>Status:</strong> {selectedProposal.status}</p>
              <p><strong>Price:</strong> {selectedProposal.price}</p>
              <p><strong>Format:</strong> {selectedProposal.format}</p>
              <p><strong>Type:</strong> {selectedProposal.suggestedType}</p>
              <p><strong>File:</strong> {selectedProposal.fileName || 'No file uploaded'}</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4 mt-4">
          <div>
            <h3 className="text-lg font-semibold">Description</h3>
            <p className="whitespace-pre-line">{selectedProposal.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold">Topics</h3>
              <p className="whitespace-pre-line">{selectedProposal.topics}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Target Readership</h3>
              <p className="whitespace-pre-line">{selectedProposal.targetReadership}</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Illustrations</h3>
            <ul className="list-disc list-inside">
              {selectedProposal.illustrations?.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              )) || <li>None</li>}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Binding Style</h3>
            <ul className="list-disc list-inside">
              {selectedProposal.bindingStyle?.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              )) || <li>None</li>}
            </ul>
          </div>
          
          {/* Additional fields could be added as needed */}
          {Object.entries(selectedProposal).map(([key, value]) => {
            if (!excludeFields.includes(key) && 
                typeof value === 'string' && 
                !key.startsWith('_') &&
                !['proposedTitle', 'name', 'email', 'contactNo', 'address', 'pinCode', 
                  'status', 'price', 'format', 'suggestedType', 'description', 'topics', 
                  'targetReadership', 'submittedAt'].includes(key)) {
              return (
                <div key={key}>
                  <h3 className="text-lg font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                  <p className="whitespace-pre-line">{value}</p>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow">
          <div className="flex flex-col items-center">
            <Link href="/">
              <Image
                src="/fulllogo-removebg.png"
                alt="Millennium Enterprises Logo"
                width={150}
                height={40}
                className="object-contain"
              />
            </Link>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Admin Login
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {errorMsg && (
              <div className="text-red-500 text-sm text-center">
                {errorMsg}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/fulllogo-removebg.png"
                alt="Millennium Enterprises Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <LogOut size={16} className="mr-2" />
            Logout
          </button>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-6">
        {selectedProposal ? (
          renderProposalDetails()
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Book Proposals</h2>
              
              {proposals.length > 0 && (
                <button
                  onClick={downloadExcel}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <FileDown size={16} className="mr-2" />
                  Export to Excel
                </button>
              )}
            </div>
            
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="text-gray-500">Loading proposals...</div>
              </div>
            ) : proposals.length > 0 ? (
              <div className="overflow-x-auto bg-white shadow rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Author
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        File
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Submitted
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {proposals.map((proposal) => (
                      <tr key={proposal.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {proposal.proposedTitle}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{proposal.name}</div>
                          <div className="text-xs text-gray-500">{proposal.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${proposal.uploadStatus === 'success' ? 'bg-green-100 text-green-800' : 
                              proposal.uploadStatus === 'failed' ? 'bg-red-100 text-red-800' : 
                              'bg-yellow-100 text-yellow-800'}`}>
                            {proposal.uploadStatus || 'Unknown'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {proposal.fileName ? (
                            <div className="text-sm text-gray-900 flex items-center">
                              <FileText size={14} className="mr-1 text-blue-500" />
                              <span>
                                {proposal.fileName.length > 15 ? proposal.fileName.substring(0, 15) + '...' : proposal.fileName}
                                <span className="text-xs text-amber-600 ml-1">(metadata)</span>
                              </span>
                            </div>
                          ) : (
                            <span className="text-xs text-gray-500">No file</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(proposal.submittedAt)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => setSelectedProposal(proposal)}
                            className="text-blue-600 hover:text-blue-900 inline-flex items-center"
                          >
                            <Eye size={16} className="mr-1" />
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <p className="text-gray-500">No proposals submitted yet.</p>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
