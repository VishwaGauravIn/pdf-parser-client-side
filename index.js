/* ---------------------------------------------

            </> with 💛 by Vishwa Gaurav
    GitHub : https://github.com/VishwaGauravIn
              Website : https://itsvg.in

------------------------------------------------ */

const { pdfjs } = require("react-pdf");
const pdfjsWorker = require("pdfjs-dist/build/pdf.worker.entry");

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker; // Path to the pdf.worker.js file

module.exports = extractTextFromPDF = async (file) => {
  try {
    // Create a blob URL for the PDF file
    const blobUrl = URL.createObjectURL(file);

    // Load the PDF file
    const loadingTask = pdfjs.getDocument(blobUrl);

    const pdf = await loadingTask.promise;
    const numPages = pdf.numPages;
    let extractedText = "";

    // Iterate through each page and extract text
    for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
      const page = await pdf.getPage(pageNumber);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((item) => item.str).join(" ");
      extractedText += pageText;
    }
    if (extractedText.length > 0) {
      return extractedText;
    }
    console.error("Error extracting text from PDF:", error);

    // Clean up the blob URL
    URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error("Error extracting text from PDF:", error);
  }
};
