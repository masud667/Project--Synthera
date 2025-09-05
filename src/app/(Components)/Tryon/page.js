"use client";
import { useState } from "react";

export default function TryOn() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  // 👉 Function: Upload + Replicate Call
  const handleUpload = async () => {
    if (!file) {
      alert("Please select an image first!");
      return;
    }

    setLoading(true);

    try {
      // 1. Upload to Cloudinary
      const formData = new FormData();
      formData.append("file", file);

      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const uploadData = await uploadRes.json();
      const imageUrl = uploadData.url;

      // 2. Send image to Replicate API
      const repRes = await fetch("/api/replicate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageUrl,
          prompt: "make it stylish fashion try-on", // custom prompt
        }),
      });

      const repData = await repRes.json();
      setResult(repData.result);
    } catch (err) {
      console.error("Error:", err);
    }

    setLoading(false);
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-6">👗 AI Try-On Demo</h1>

      {/* Image Upload */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4 block mx-auto"
      />

      {/* Try-On Button */}
      <button
        onClick={handleUpload}
        disabled={loading}
        className={`px-6 py-3 rounded-xl font-semibold shadow-lg transition duration-300 ease-in-out ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transform hover:scale-105"
        }`}
      >
        {loading ? "⏳ Processing..." : "🚀 Try-On"}
      </button>

      {/* Result */}
      {result && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Result:</h2>
          <img src={result} alt="AI Result" className="mx-auto rounded-xl shadow-md" />
        </div>
      )}
    </div>
  );
}
