//import ReactExport from "react-export-excel";
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
// import html2pdf from 'html2pdf.js';
export const generatePDF = async (containerId, fileName) => {
  try {
    console.log('clicked')
    const input = document.getElementById(containerId);

    // Ensure the element is present in the DOM
    if (!input) {
      console.error(`Element with ID ${containerId} not found`);
      return;
    }

    // Create the PDF using html2pdf
    const pdfOptions = {
      margin: 10,
      filename: `${fileName}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    // await html2pdf().from(input).set(pdfOptions).outputPdf();

    console.log('PDF generated successfully');
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
};

export const generateExcel = (containerId, fileName) => {
  try {
    const input = document.getElementById(containerId);
    const wb = XLSX.utils.table_to_book(input);
    const blob = XLSX.write(wb, { bookType: 'xlsx', type: 'blob' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${fileName}.xlsx`;
    link.click();
  } catch (error) {
    console.error('Error generating Excel:', error);
  }
};

// ButtonUtils.jsx
export const printContent = (containerId) => {
  const content = document.getElementById(containerId);

  if (!content) {
    console.error(`Element with ID ${containerId} not found`);
    return;
  }

  const printWindow = window.open('', '_blank');

  if (printWindow) {
    const printDocument = printWindow.document;
    printDocument.open();
    printDocument.write('<html><head><title>Print</title></head><body>');
    printDocument.write(content.innerHTML);
    printDocument.write('</body></html>');
    printDocument.close();
    printWindow.print();
  } else {
    console.error('Print window could not be opened');
  }
};
