import React from "react";
// this file is just for testing purpose, it will only run when you use it in your project after installing this package from npm
import extractTextFromPDF from "pdf-parser-client-side";

export default function Test() {
  return (
    <div>
      <input
        type="file"
        name=""
        id="file-selector"
        accept=".pdf"
        onChange={(e) => {
          // Selecting the first file
          const file = e.target.files[0];
          //   If file exists then we will call our function
          if (file) {
            extractTextFromPDF(file).then((data) => {
              console.log(data);
            });
          }
        }}
      />
    </div>
  );
}
