import { PDFDocument } from 'pdf-lib';

export async function mergePDFs(files: File[]): Promise<File> {
  const mergedPdf = await PDFDocument.create();

  for (const file of files) {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await PDFDocument.load(arrayBuffer);
    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    copiedPages.forEach(page => mergedPdf.addPage(page));
  }

  const mergedPdfBytes = await mergedPdf.save();
  return new File([mergedPdfBytes], 'merged.pdf', { type: 'application/pdf' });
}
