import { NextRequest, NextResponse } from 'next/server';
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
const storage = getStorage(app);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ 
        success: false, 
        message: 'No file uploaded' 
      }, { status: 400 });
    }

    // Convert file to buffer for uploading
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create a unique file path with timestamp to avoid collisions
    const timestamp = Date.now();
    const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';
    const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.]/g, '_');
    const filePath = `cv_files/${fileExtension}/${timestamp}_${sanitizedFileName}`;
    
    try {
      // Reference to the file location in Firebase Storage
      const storageReference = ref(storage, filePath);
      
      // Upload the file to Firebase Storage
      const uploadResult = await uploadBytes(storageReference, buffer, {
        contentType: file.type,
        customMetadata: {
          'originalName': file.name
        }
      });
      
      console.log("Upload successful:", uploadResult);
      
      // Get the public download URL
      const downloadURL = await getDownloadURL(storageReference);
      
      return NextResponse.json({ 
        success: true, 
        downloadURL,
        fileName: file.name,
        fileType: file.type,
        fileSize: file.size
      });
    } catch (uploadError) {
      console.error("Firebase Storage upload error:", uploadError);
      throw new Error(`Firebase Storage upload failed: ${uploadError instanceof Error ? uploadError.message : 'Unknown error'}`);
    }
  } catch (error) {
    console.error('Error handling file upload:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to upload file',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
