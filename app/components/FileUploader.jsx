import { useState } from "react";
import { toast } from "react-toastify";

export default function FileUploader({ onFileChange, onError }) {
  const [fileInfo, setFileInfo] = useState(null);
  const [fileError, setFileError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileError("");
    
    if (!file) {
      setFileInfo(null);
      onFileChange(null);
      return;
    }

    const fileExtension = file.name.split('.').pop().toLowerCase();
    const allowedExtensions = ['doc', 'docx', 'rtf', 'pdf'];
    const maxSizeInBytes = 5 * 1024 * 1024; // 5MB

    if (!allowedExtensions.includes(fileExtension)) {
      const errorMsg = "Only DOC, DOCX, RTF or PDF files are allowed";
      setFileError(errorMsg);
      onError(errorMsg);
      setFileInfo(null);
      onFileChange(null);
      return;
    }

    if (file.size > maxSizeInBytes) {
      const errorMsg = `File size exceeds 5MB limit (${(file.size / (1024 * 1024)).toFixed(2)}MB)`;
      setFileError(errorMsg);
      onError(errorMsg);
      setFileInfo(null);
      onFileChange(null);
      return;
    }

    setFileInfo({
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(2),
      type: file.type
    });
    
    onFileChange(file);
    onError("");
  };

  return (
    <div className="space-y-2">
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
      {fileError && (
        <div className="mt-1 text-red-500 text-xs">
          <p>{fileError}</p>
        </div>
      )}
      <p className="text-xs text-gray-500 mt-1">
        Only DOC, DOCX, RTF or PDF files can be uploaded, max 5MB
      </p>
      {fileInfo && (
        <p className="text-green-500 text-xs mt-1">
          File selected: {fileInfo.name} ({fileInfo.size}MB)
        </p>
      )}

      {/* Environment indicator for developers */}
      {process.env.NODE_ENV === 'development' && (
        <p className="text-amber-600 text-xs mt-1">
          ⚠️ Development mode: File upload will be simulated
        </p>
      )}
    </div>
  );
}
