import { NextRequest, NextResponse } from 'next/server';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

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

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const fileId = params.id;
    
    // Get file metadata from Realtime Database
    // We'll store file metadata in bookProposals instead of a separate collection
    const fileRef = ref(db, `bookProposals/${fileId}`);
    const fileSnapshot = await get(fileRef);
    
    if (!fileSnapshot.exists()) {
      return NextResponse.json({ 
        error: 'File not found' 
      }, { status: 404 });
    }
    
    const proposalData = fileSnapshot.val();
    
    // Return proposal data with file metadata
    return NextResponse.json({
      fileName: proposalData.fileName || 'No file name',
      fileSize: proposalData.fileSize || 0,
      fileType: proposalData.fileType || 'text/plain',
      submittedAt: proposalData.submittedAt || new Date().toISOString(),
      proposalTitle: proposalData.proposedTitle,
      authorName: proposalData.name,
      note: 'File storage is limited in the free plan. Only metadata is available.'
    });
    
  } catch (error) {
    console.error('Error retrieving file:', error);
    return NextResponse.json({ 
      error: 'Failed to retrieve file information' 
    }, { status: 500 });
  }
}
