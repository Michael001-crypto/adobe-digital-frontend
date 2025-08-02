// components/DownloadButton.jsx
import { useState } from "react";
import axios from "axios";

const DownloadButton = ({ filename }) => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setDownloading(true);
      const res = await axios.post("http://localhost:5000/api/download/generate-token");
      const token = res.data.token;

      window.location.href = `http://localhost:5000/api/download/${filename}?token=${token}`;
    } catch (err) {
      alert("❌ Download failed");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
    >
      {downloading ? "Preparing..." : "Download Template"}
    </button>
  );
};

export default DownloadButton;
