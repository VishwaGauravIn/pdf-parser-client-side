import React from "react";
import extractTextFromPDF, { Variant } from "pdf-parser-client-side";

export default function Test() {
  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    variant: Variant
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const text = await extractTextFromPDF(file, variant);
        console.log("Extracted Text:", text);
      } catch (error) {
        console.error("Error extracting text from PDF:", error);
      }
    }
  };

  return (
    <div>
      <input
        type="file"
        name=""
        id="file-selector"
        accept=".pdf"
        onChange={(e) => handleFileChange(e, "clean")}
      />
    </div>
  );
}
