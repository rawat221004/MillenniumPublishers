"use client"

import Link from "next/link"
import Image from "next/image"
import LocationDropdowns from "./LocationDropdowns"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { initializeApp, FirebaseApp } from "firebase/app"
// Replace Firestore imports with Realtime Database imports
import { getDatabase, ref as dbRef, push, Database } from "firebase/database"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { uploadFile } from '@/lib/fileUpload'

// Define types for form data
interface FormData {
  proposedTitle: string;
  status: string;
  name: string;
  address: string;
  pinCode: string;
  contactNo: string;
  email: string;
  description: string;
  topics: string;
  shelving: string;
  targetReadership: string;
  whyInterest: string;
  competingTitles: string;
  betterThan: string;
  international: string;
  size: string;
  format: string;
  printRun: string;
  royalty: string;
  requirements: string;
  price: string;
  illustrations: string[];
  suggestedType: string;
  bindingStyle: string[];
}

// Firebase configuration - Make sure these values are correctly set in your .env.local file
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // Add the databaseURL for Realtime Database
  databaseURL: "https://millennium-8aa19-default-rtdb.firebaseio.com/"
};

// Initialize Firebase with error handling
let app: FirebaseApp;
let db: Database; // Changed from Firestore to Database

try {
  app = initializeApp(firebaseConfig);
  db = getDatabase(app); // Changed from getFirestore to getDatabase
} catch (error) {
  console.error("Firebase initialization error:", error);
}

function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground p-2.5 transition-all hover:bg-primary/90"
        aria-label="Toggle Menu"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div 
          style={{ backgroundColor: "#2563eb" }}
          className="fixed inset-0 top-16 z-[100] border-t animate-in slide-in-from-left duration-300 h-[100vh] w-full"
        >
          <div className="container py-8">
            <div className="grid gap-8 py-6">
              <div className="border-l-4 border-primary-foreground pl-6">
                <Link
                  href="/"
                  className="flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary-foreground/80"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
              </div>
              <div className="border-l-4 border-primary-foreground/90 pl-6">
                <Link
                  href="/about"
                  className="flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary-foreground/80"
                  onClick={() => setOpen(false)}
                >
                  About Us
                </Link>
              </div>
              <div className="border-l-4 border-primary-foreground/80 pl-6">
                <Link
                  href="/books"
                  className="flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary-foreground/80"
                  onClick={() => setOpen(false)}
                >
                  Books
                </Link>
              </div>
              <div className="border-l-4 border-primary-foreground/70 pl-6">
                <Link
                  href="/proposal"
                  className="flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary-foreground/80"
                  onClick={() => setOpen(false)}
                >
                  Book Proposal
                </Link>
              </div>
              <div className="border-l-4 border-primary-foreground/60 pl-6">
                <Link
                  href="/publishers"
                  className="flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary-foreground/80"
                  onClick={() => setOpen(false)}
                >
                  Publishers
                </Link>
              </div>
              <div className="border-l-4 border-primary-foreground/50 pl-6">
                <Link
                  href="/subjects"
                  className="flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary-foreground/80"
                  onClick={() => setOpen(false)}
                >
                  Subjects
                </Link>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Link
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-background px-8 text-base font-medium text-primary shadow transition-colors hover:bg-background/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    proposedTitle: "",
    status: "",
    name: "",
    address: "",
    pinCode: "",
    contactNo: "",
    email: "",
    description: "",
    topics: "",
    shelving: "",
    targetReadership: "",
    whyInterest: "",
    competingTitles: "",
    betterThan: "",
    international: "",
    size: "",
    format: "",
    printRun: "",
    royalty: "",
    requirements: "",
    price: "",
    illustrations: [],
    suggestedType: "",
    bindingStyle: []
  });

  const [cvFile, setCvFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [loading, setLoading] = useState(false);

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    if (type === "checkbox") {
      const updatedArray = checked 
        ? [...(formData[name as keyof FormData] as string[] || []), value]
        : (formData[name as keyof FormData] as string[] || []).filter(item => item !== value);

      setFormData({
        ...formData,
        [name]: updatedArray
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';
      const allowedExtensions = ['doc', 'docx', 'rtf', 'pdf'];
      const maxSizeInBytes = 5 * 1024 * 1024; // 5MB

      if (!allowedExtensions.includes(fileExtension)) {
        setFileError("Only DOC, DOCX, RTF or PDF files are allowed");
        setCvFile(null);
        return;
      }

      if (file.size > maxSizeInBytes) {
        setFileError(`File size exceeds 5MB limit (${(file.size / (1024 * 1024)).toFixed(2)}MB)`);
        setCvFile(null);
        return;
      }

      setFileError("");
      setCvFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check if Firebase is initialized
    if (!app || !db) {
      toast.error("Firebase is not properly initialized. Please check your environment variables.");
      return;
    }
    
    setLoading(true);
    setFileError("");

    try {
      let fileMetadata = null;

      // STEP 1: Upload file via our API route (which handles CORS)
      if (cvFile) {
        try {
          toast.info("Processing file...");
          
          // Use our utility function
          const uploadResult = await uploadFile(cvFile);
          
          if (uploadResult.success) {
            fileMetadata = {
              fileName: uploadResult.fileName,
              fileSize: uploadResult.fileSize,
              fileType: uploadResult.fileType
            };
            toast.success("File processed successfully!");
            
            if (uploadResult.note) {
              // Show a note about free plan limitations
              setTimeout(() => {
                toast.info(uploadResult.note, { autoClose: 8000 });
              }, 500);
            }
          }
        } catch (error: any) {
          console.error("File processing error:", error);
          setFileError(`File processing failed: ${error.message || "Unknown error"}`);
          toast.error(`File processing failed: ${error.message || "Please try again."}`);
          // Ask user if they want to continue without the file
          if (!window.confirm("File processing failed. Do you want to continue submitting the form without the file?")) {
            setLoading(false);
            return;
          }
        }
      }

      // STEP 2: Store form data and file metadata in Realtime Database
      toast.info("Submitting your proposal...");
      
      // Create the document to be stored
      const proposalData = {
        ...formData,
        fileName: fileMetadata?.fileName || cvFile?.name || null,
        fileType: fileMetadata?.fileType || cvFile?.type || null,
        fileSize: fileMetadata?.fileSize || cvFile?.size || null,
        submittedAt: new Date().toISOString(),
        uploadStatus: fileMetadata ? "processed" : cvFile ? "failed" : "none"
      };
      
      // Add the document to Realtime Database
      const proposalsRef = dbRef(db, 'bookProposals');
      const newProposalRef = await push(proposalsRef, proposalData);

      toast.success("Proposal submitted successfully!");
      
      // Reset form
      setFormData({
        proposedTitle: "",
        status: "",
        name: "",
        address: "",
        pinCode: "",
        contactNo: "",
        email: "",
        description: "",
        topics: "",
        shelving: "",
        targetReadership: "",
        whyInterest: "",
        competingTitles: "",
        betterThan: "",
        international: "",
        size: "",
        format: "",
        printRun: "",
        royalty: "",
        requirements: "",
        price: "",
        illustrations: [],
        suggestedType: "",
        bindingStyle: []
      });
      setCvFile(null);
    } catch (error: any) {
      console.error("Error submitting proposal: ", error);
      toast.error(`Error submitting proposal: ${error.message || "Please try again."}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/fulllogo-removebg.png"
                alt="Millennium Enterprises Logo"
                width={120}
                height={40}
                className="object-contain h-20 w-auto"
              />
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About Us
            </Link>
            <Link href="/books" className="text-sm font-medium transition-colors hover:text-primary">
              Books
            </Link>
            <Link href="/proposal" className="text-sm font-medium transition-colors hover:text-primary">
              Book Proposal
            </Link>
            <Link href="/publishers" className="text-sm font-medium transition-colors hover:text-primary">
              Publishers
            </Link>
            <Link href="/subjects" className="text-sm font-medium transition-colors hover:text-primary">
              Subjects
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <MobileNav />
            <Link
              href="/#contact"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Enquiry
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8 px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6 text-center">Book Proposal Form</h1>
          <form className="space-y-6 max-w-4xl mx-auto" onSubmit={handleSubmit}>
            <div className="border rounded-md overflow-hidden">
              <div className="bg-blue-800 text-white p-2 font-medium">Title</div>
              <div className="p-4">
                <div className="space-y-2">
                  <label htmlFor="proposedTitle" className="text-sm">
                    Proposed Title*
                  </label>
                  <input 
                    type="text" 
                    id="proposedTitle" 
                    name="proposedTitle"
                    value={formData.proposedTitle}
                    onChange={handleChange}
                    className="w-full border rounded-md p-2" 
                    required 
                  />
                </div>
              </div>
            </div>
            <div className="border rounded-md overflow-hidden">
              <div className="bg-blue-800 text-white p-2 font-medium">Status of Manuscript</div>
              <div className="p-4">
                <div className="flex flex-wrap gap-6">
                  <label className="flex items-center gap-2">
                    <input 
                      type="radio" 
                      name="status" 
                      value="planning" 
                      checked={formData.status === "planning"}
                      onChange={handleChange}
                    />
                    Planning to write
                  </label>
                  <label className="flex items-center gap-2">
                    <input 
                      type="radio" 
                      name="status" 
                      value="completed" 
                      checked={formData.status === "completed"}
                      onChange={handleChange}
                    />
                    Completed
                  </label>
                  <label className="flex items-center gap-2">
                    <input 
                      type="radio" 
                      name="status" 
                      value="partiallyCompleted" 
                      checked={formData.status === "partiallyCompleted"}
                      onChange={handleChange}
                    />
                    Partially Completed 
                  </label>
                </div>
              </div>
            </div>
            <LocationDropdowns />
            <div className="border rounded-md overflow-hidden">
              <div className="bg-blue-800 text-white p-2 font-medium">
                Name of Author(s) / Editor(s) with Affiliation
              </div>
              <div className="p-4 space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm">
                    Name*
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border rounded-md p-2" 
                    required  
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm">
                    Corresponding Address*
                  </label>
                  <input 
                    type="text" 
                    id="address" 
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border rounded-md p-2" 
                    required 
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="pinCode" className="text-sm">
                      Pin Code*
                    </label>
                    <input 
                      type="text" 
                      id="pinCode" 
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleChange}
                      className="w-full border rounded-md p-2" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contactNo" className="text-sm">
                      Contact No*
                    </label>
                    <input 
                      type="tel" 
                      id="contactNo" 
                      name="contactNo"
                      value={formData.contactNo}
                      onChange={handleChange}
                      className="w-full border rounded-md p-2" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm">
                      E-mail*
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border rounded-md p-2" 
                      required 
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded-md overflow-hidden">
              <div className="bg-blue-800 text-white p-2 font-medium">Please attach your CV and list of publications, if any</div>
              <div className="p-4">
                <input 
                  type="file" 
                  onChange={handleFileChange}
                  accept=".doc,.docx,.rtf,.pdf"
                  className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-primary file:text-primary-foreground
                    hover:file:bg-primary/90"
                />
                <p className="text-xs text-gray-500 mt-1">( Only DOC, DOCX, RTF or PDF files can be uploaded, max 5MB )*</p>
                <p className="text-xs text-amber-600 mt-1">
                </p>
                {cvFile && <p className="text-green-500 text-xs mt-1">File selected: {cvFile.name} ({(cvFile.size / (1024 * 1024)).toFixed(2)}MB)</p>}
                {fileError && (
                  <div className="mt-1 text-red-500 text-xs">
                    {fileError}
                  </div>
                )}
              </div>
            </div>
            <div className="border rounded-md overflow-hidden">
              <div className="p-4 space-y-4">
                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Description:
                  </label>
                  <p className="text-xs text-gray-600">
                    The Aims of the Book, Its Scope, Approach, Special Features and Merits. In case of New Edition,
                    provide the differences from the previous Edition and Reason(s) for the Revision.
                  </p>
                  <textarea 
                    id="description" 
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full border rounded-md p-2 min-h-[100px]"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="topics" className="text-sm font-medium">
                  Topics to be covered?*
                </label>
                <textarea 
                  id="topics" 
                  name="topics"
                  value={formData.topics}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 min-h-[100px]" 
                  required 
                ></textarea>
              </div>
              <div className="space-y-2">
                <label htmlFor="shelving" className="text-sm font-medium">
                  Shelving / Subjects*
                </label>
                <textarea 
                  id="shelving" 
                  name="shelving"
                  value={formData.shelving}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 min-h-[100px]" 
                  required 
                ></textarea>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="targetReadership" className="text-sm font-medium">
                  Target Readership*
                </label>
                <textarea 
                  id="targetReadership" 
                  name="targetReadership"
                  value={formData.targetReadership}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 min-h-[100px]" 
                  required 
                ></textarea>
              </div>
              <div className="space-y-2">
                <label htmlFor="whyInterest" className="text-sm font-medium">
                  Why would it interest the target readership?*
                </label>
                <textarea 
                  id="whyInterest" 
                  name="whyInterest"
                  value={formData.whyInterest}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 min-h-[100px]" 
                  required 
                ></textarea>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="competingTitles" className="text-sm font-medium">
                  List of competing titles*
                </label>
                <textarea 
                  id="competingTitles" 
                  name="competingTitles"
                  value={formData.competingTitles}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 min-h-[100px]" 
                  required 
                ></textarea>
              </div>
              <div className="space-y-2">
                <label htmlFor="betterThan" className="text-sm font-medium">
                  How would your book be better than the competing titles?*
                </label>
                <textarea 
                  id="betterThan" 
                  name="betterThan"
                  value={formData.betterThan}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 min-h-[100px]" 
                  required 
                ></textarea>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="international" className="text-sm font-medium">
                  Will it sell internationally and why?*
                </label>
                <textarea 
                  id="international" 
                  name="international"
                  value={formData.international}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 min-h-[100px]" 
                  required 
                ></textarea>
              </div>
              <div className="space-y-2">
                <label htmlFor="size" className="text-sm font-medium">
                  Size (Approx. Extent of Manuscript)*
                </label>
                <textarea 
                  id="size" 
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 min-h-[100px]" 
                  required 
                ></textarea>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="format" className="text-sm font-medium">
                  Suggested Format / Size*
                </label>
                <textarea 
                  id="format" 
                  name="format"
                  value={formData.format}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 min-h-[100px]" 
                  required 
                ></textarea>
              </div>
              <div className="space-y-2">
                <label htmlFor="printRun" className="text-sm font-medium">
                  Print Run*
                </label>
                <textarea 
                  id="printRun" 
                  name="printRun"
                  value={formData.printRun}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 min-h-[100px]" 
                  required 
                ></textarea>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="royalty" className="text-sm font-medium">
                  Division of Royalty if Joint Authors*
                </label>
                <textarea 
                  id="royalty" 
                  name="royalty"
                  value={formData.royalty}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 min-h-[100px]" 
                  required 
                ></textarea>
              </div>
              <div className="space-y-2">
                <label htmlFor="requirements" className="text-sm font-medium">
                  Any Other Requirements?*
                </label>
                <textarea 
                  id="requirements" 
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 min-h-[100px]" 
                  required 
                ></textarea>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="price" className="text-sm font-medium">
                Suggested Published Price*
              </label>
              <input 
                type="text" 
                id="price" 
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border rounded-md p-2" 
                required 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">No. of Illustrations</label>
              <div className="flex flex-wrap gap-6">
                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    name="illustrations" 
                    value="bwLine" 
                    checked={formData.illustrations.includes("bwLine")}
                    onChange={handleChange}
                  />
                  B/W Line
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    name="illustrations" 
                    value="bwPhotos" 
                    checked={formData.illustrations.includes("bwPhotos")}
                    onChange={handleChange}
                  />
                  B/W Photos
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    name="illustrations" 
                    value="coloredPhotos" 
                    checked={formData.illustrations.includes("coloredPhotos")}
                    onChange={handleChange}
                  />
                  Colored Photos / Illustrations
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Suggested Type</label>
              <div className="flex flex-wrap gap-6">
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="suggestedType" 
                    value="hardbound" 
                    checked={formData.suggestedType === "hardbound"}
                    onChange={handleChange}
                  />
                  Hardbound
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="suggestedType" 
                    value="paperback" 
                    checked={formData.suggestedType === "paperback"}
                    onChange={handleChange}
                  />
                  Paperback
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Binding Style</label>
              <div className="flex flex-wrap gap-6">
                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    name="bindingStyle" 
                    value="jacket" 
                    checked={formData.bindingStyle.includes("jacket")}
                    onChange={handleChange}
                  />
                  Jacket
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    name="bindingStyle" 
                    value="hbPaster" 
                    checked={formData.bindingStyle.includes("hbPaster")}
                    onChange={handleChange}
                  />
                  H/B Paster
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    name="bindingStyle" 
                    value="paperback" 
                    checked={formData.bindingStyle.includes("paperback")}
                    onChange={handleChange}
                  />
                  Paperback
                </label>
              </div>
            </div>
            <div className="flex items-center justify-start">
              <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>
            </div>
            <div>
              <button 
                type="submit" 
                disabled={loading}
                className={`bg-blue-800 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'SUBMITTING...' : 'SUBMIT'}
              </button>
            </div>
          </form>
          <ToastContainer position="bottom-right" />
        </div>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/fulllogo-removebg.png"
                alt="Millennium Enterprises Logo"
                width={150}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Millennium Enterprises. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

