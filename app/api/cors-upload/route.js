import { NextResponse } from 'next/server';
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase on the server-side
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export async function POST(request) {
  try {
    const data = await request.formData();
    const file = data.get('file');

    if (!file) {
      return NextResponse.json({ success: false, message: 'No file uploaded' });
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Construct the file path
    const timestamp = Date.now();
    const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';
    const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.]/g, '_');
    const filePath = `cv_files/${fileExtension}/${timestamp}_${sanitizedFileName}`;
    const storageRef = ref(storage, filePath);

    // Upload the file to Firebase Storage
    await uploadBytes(storageRef, buffer);

    // Get the download URL
    const downloadURL = await getDownloadURL(storageRef);

    return NextResponse.json({ success: true, downloadURL });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ success: false, message: 'Failed to upload file' });
  }
}
