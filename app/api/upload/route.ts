import { NextRequest, NextResponse } from 'next/server';

// Define a maximum size for the base64 data we'll store
// We'll limit this to a small size since we're using the free plan
const MAX_FILE_SIZE = 100 * 1024; // 100KB in bytes

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

    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({
        success: false,
        message: `File too large. Maximum size is ${MAX_FILE_SIZE / 1024}KB. Consider upgrading to Firebase paid plan for full file storage capabilities.`
      }, { status: 413 });
    }

    // Generate a file ID and metadata
    // In a real app with Firebase Storage, this would be where we'd upload the file
    const timestamp = Date.now();
    const fileId = `file_${timestamp}`;
    
    // Return file metadata - in the free plan we can only handle metadata, not actual file storage
    return NextResponse.json({
      success: true,
      fileId,
      fileName: file.name,
      fileType: file.type,
      fileSize: file.size,
      submittedAt: new Date().toISOString(),
      note: 'Due to Firebase free plan limitations, only file metadata is processed. The actual file content is not stored.'
    });
  } catch (error) {
    console.error('Error handling file upload:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to process file',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
