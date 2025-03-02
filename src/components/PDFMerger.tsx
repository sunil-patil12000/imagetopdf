import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

export default function PDFMerger() {
  const [mergedPdf, setMergedPdf] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleMerge = async (files: File[]) => {
    setIsLoading(true);
    try {
      const mergedPdf = await PDFDocument.create();
      
      for (const file of files) {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach(page => mergedPdf.addPage(page));
      }

      const mergedPdfBytes = await mergedPdf.save();
      const mergedFile = new File([mergedPdfBytes], 'merged.pdf', { type: 'application/pdf' });
      setMergedPdf(mergedFile);
    } catch (error) {
      console.error('Merge failed:', error);
      alert('PDF merge failed. Please check the files and try again.');
    }
    setIsLoading(false);
  };

  return (
    <div className="pdf-merger">
      <input
        type="file"
        multiple
        accept=".pdf"
        onChange={(e) => e.target.files && handleMerge(Array.from(e.target.files))}
      />
      {isLoading && <p>Merging PDFs...</p>}
      {mergedPdf && (
        <a
          href={URL.createObjectURL(mergedPdf)}
          download="merged.pdf"
        >
          Download Merged PDF
        </a>
      )}
    </div>
  );
}
