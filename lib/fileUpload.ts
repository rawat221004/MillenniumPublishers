/**
 * Utility function to upload files via our server-side API route
 * This avoids CORS issues as the API route is on the same origin
 */
export async function uploadFile(file: File) {
  try {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Server responded with status ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('File upload error:', error);
    throw error;
  }
}

/**
 * Function to get file information
 */
export async function getFileInfo(fileId: string) {
  try {
    const response = await fetch(`/api/files/${fileId}`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Server responded with status ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error getting file info:', error);
    throw error;
  }
}
