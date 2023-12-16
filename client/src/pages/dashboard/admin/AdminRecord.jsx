import React, { useEffect, useState } from "react";
import { ClaimsData } from "../../../utils/Data";
import Table from "../../../components/molecules/dashboard/Table";
import { transformData } from "../../../utils/DataTransformer";
import ActionButton from "../../../components/molecules/dashboard/ActionButton";
import Searchbar from "../../../components/molecules/dashboard/Searchbar";
import {
  generatePDF,
  generateExcel,
  printContent,
} from "../../../components/molecules/dashboard/ButtonUtils";

const AdminRecords = () => {
  // database retrieve
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    // Retrieve form data from local storage
    const storedData = JSON.parse(localStorage.getItem("formData")) || [];
    setFormData(storedData);
  }, []);
  // database retrieve ends
  const [filteredData, setFilteredData] = useState(transformData(formData));

  const updateFilteredData = (newData) => {
    setFilteredData(transformData(newData));
  };

  let tableHead = {
    head1: "S/N",
    head2: "Policy No.",
    head3: "Duration",
    head4: "Premium Amt",
    head5: "Date",
    head6: "Product",
    head7: "Status",
  };

  useEffect(() => {
    // Ensure the element is present in the DOM before generating PDF
    const tableContainer = document.getElementById("table-container");
    if (tableContainer) {
      generatePDF("table-container", "document");
    }
  }, []);

  const handlePDFClick = () => {
    console.log("PDF button clicked");
  };

  const handleExcelClick = () => {
    console.log("Excel button clicked");
    generateExcel("table-container", "document");
  };

  const handlePrintClick = () => {
    console.log("Print button clicked");
    printContent("table-container");
  };

  return (
    <div>
      <Searchbar
        data={ClaimsData}
        keyword="PolicyNo"
        onUpdateData={updateFilteredData}
      />
      <div className="flex justify-between mb-4">
        <div className="flex">
          {/* <ActionButton title='PDF' onClick={handlePDFClick} />
          <ActionButton title='EXCEL' onClick={handleExcelClick} />
          <ActionButton title='PRINT' onClick={handlePrintClick} /> */}

          {/* <ActionButton title='PDF' 
        action={generatePDF('table-container', 'document')} 
        />
          <ActionButton title='EXCEL' onClick={() => generateExcel('table-container', 'document')} />
          <ActionButton title='PRINT' onClick={() => printContent('table-container')} /> */}

        </div>
      </div>

      <Table
        data={{ tableHead, tabledata: filteredData }}
        id="table-container"
      />
    </div>
  );
};

export default AdminRecords;
