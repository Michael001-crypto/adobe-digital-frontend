// src/pages/Upload.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { FaCloudUploadAlt } from "react-icons/fa";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [progress, setProgress] = useState(0);
  const [tags, setTags] = useState("");
  const [error, setError] = useState("");

  const allowedTypes = ["image/png", "image/jpeg", "application/pdf", "application/zip"];

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && allowedTypes.includes(selected.type)) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
      setError("");
    } else {
      setFile(null);
      setPreview(null);
      setError("File must be PNG, JPG, PDF or ZIP.");
    }
  };

  const handleUpload = () => {
    if (!file) {
      setError("Please select a file first.");
      return;
    }
    setError("");
    setProgress(0);

    // Dummy upload simulation
    let uploadProgress = 0;
    const interval = setInterval(() => {
      uploadProgress += 10;
      setProgress(uploadProgress);
      if (uploadProgress >= 100) {
        clearInterval(interval);
        alert("Upload complete!");
      }
    }, 200);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Upload Your File</h2>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Select file:
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full text-sm p-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700"
          />
        </div>

        {preview && (
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Preview:
            </label>
            <img
              src={preview}
              alt="Preview"
              className="w-full h-40 object-cover rounded-lg border dark:border-gray-700"
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Tags (comma-separated):
          </label>
          <input
            type="text"
            placeholder="e.g. resume, portfolio, creative"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full text-sm p-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700"
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleUpload}
          className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          <FaCloudUploadAlt className="text-xl" />
          Upload File
        </motion.button>

        {progress > 0 && (
          <div className="mt-4 w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-indigo-600 h-4 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Upload;
