import jsPDF from "jspdf";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
/*
export function createPDF(task) {
  const pdf = new jsPDF();
  pdf.text("Tarea", 10, 10);
  pdf.text(`Tarea: ${task.title}`, 10, 20);
  pdf.text(`ID Tarea: ${task.id}`, 10, 30);
  pdf.text(`Completada: ${task.isCompleted ? "Si" : "No"}`, 10, 40);
  pdf.text(`Fecha impresion: ${new Date().toLocaleString()}`, 10, 50);
  pdf.save(`tarea_${task.id}.pdf`);

  // Crear un Blob con el contenido del PDF
  const blobPdf = new Blob([[pdf.output("blob")]], { type: "application/pdf" });


  // Crear URL para el blob de arriba
  const urlBlob = URL.createObjectURL(blobPdf);

  // Crear enlace descarga
  const enlacePdf = document.createElement("a");
  enlacePdf.href = urlBlob;
  enlacePdf.download = `${task.title.substring(
    0,
    4
  )}_${new Date().toLocaleDateString()}.pdf`;

  // Agregar enlace al DOM
  document.body.appendChild(enlacePdf);
  enlacePdf.click();
  enlacePdf.remove()
}
*/
export async function createPDF(task) {
  const pdfDoc = await PDFDocument.create();

  // Embed the Times Roman font
  const helveticaBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // Add a blank page to the document
  const page = pdfDoc.addPage();

  // Get the width and height of the page
  const { width, height } = page.getSize();

  // Draw a string of text toward the top of the page
  const fontSize = 15;

  const textPDF = `ID Tarea: ${task.id} \n  
  Tarea: ${task.title} \n 
  Completada: ${task.isCompleted ? "Si" : "No"} 
  \n Fecha impresion: ${new Date().toLocaleString()}`;

  page.drawText(textPDF, {
    x: 50,
    y: height - 4 * fontSize,
    size: fontSize,
    font: helveticaBoldFont,
    color: rgb(0, 0.53, 0.71),
  });

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();

  const bob = new Blob([pdfBytes], { type: "application/pdf" });
  // Crear URL para el blob de arriba
  const urlBlob = URL.createObjectURL(bob);

  // Crear enlace descarga
  const enlacePdf = document.createElement("a");
  enlacePdf.href = urlBlob;
  enlacePdf.download = `${task.title.substring(
    0,
    4
  )}_${new Date().toLocaleDateString()}.pdf`;

  // Agregar enlace al DOM
  document.body.appendChild(enlacePdf);
  enlacePdf.click();
  enlacePdf.remove()
}
