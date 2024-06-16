/* ---------------------------------------------

            </> with 💛 by Vishwa Gaurav
    GitHub : https://github.com/VishwaGauravIn
              Website : https://itsvg.in

------------------------------------------------ */

const { pdfjs } = require("react-pdf");
const pdfjsWorker = require("pdfjs-dist/build/pdf.worker.entry");

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker; // Path to the pdf.worker.js file

type Variant =
  | "clean"
  | "alphanumeric"
  | "alphanumericwithspace"
  | "alphanumericwithspaceandpunctuation"
  | "alphanumericwithspaceandpunctuationandnewline";

export default async function extractTextFromPDF(
  file: File,
  variant: Variant
): Promise<string | void> {
  try {
    // Create a blob URL for the PDF file
    const blobUrl = URL.createObjectURL(file);

    // Load the PDF file
    const loadingTask = pdfjs.getDocument(blobUrl);

    const pdf = await loadingTask.promise;
    const numPages = pdf.numPages;
    let extractedText: string = "";

    // Iterate through each page and extract text
    for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
      const page = await pdf.getPage(pageNumber);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((item: any) => item.str).join(" ");
      extractedText += pageText;
    }
    if (extractedText.length > 0) {
      // variant check
      if (variant === "clean") {
        extractedText = extractedText.replaceAll(
          /[^\x00-\x7F]+\ *(?:[^\x00-\x7F]| )*/g,
          " "
        );
      }
      if (variant === "alphanumeric") {
        extractedText = extractedText.replaceAll(/[^a-zA-Z0-9]+/g, " ");
      }
      if (variant === "alphanumericwithspace") {
        extractedText = extractedText.replaceAll(/[^a-zA-Z0-9 ]+/g, " ");
      }
      if (variant === "alphanumericwithspaceandpunctuation") {
        extractedText = extractedText.replaceAll(/[^a-zA-Z0-9 .,!?]+/g, " ");
      }
      if (variant === "alphanumericwithspaceandpunctuationandnewline") {
        extractedText = extractedText.replaceAll(/[^a-zA-Z0-9 .,!?]+/g, " ");
      }

      return extractedText;
    }
    console.error("Error extracting text from PDF");

    // Clean up the blob URL
    URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error("Error extracting text from PDF:", error);
  }
}
