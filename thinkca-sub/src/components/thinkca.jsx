import { useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
// import { Button } from "@/components/ui/button";

export default function ExcelProcessor() {
  const [data, setData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const binaryStr = e.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
    };

    reader.readAsBinaryString(file);
  };

  const selectRandomData = () => {
    const sampleSize = Math.floor(data.length * 0.1);
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    setData(shuffled.slice(0, sampleSize));
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "exported_data.xlsx");
  };

  return (
    <div className="p-4">
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} className="mb-4 border-1 border-gray-450 p-2 m-2" />
      <button onClick={selectRandomData} className="mx-2 border-1 border-gray-450 p-2 m-2">Select 10% Random Data</button>
      <button onClick={exportToExcel} className="mx-2 border-1 border-gray-450 p-2 m-2">Export to Excel</button>
      <table className="table-auto w-full mt-4 border">
        <thead>
          <tr>
            {data.length > 0 && Object.keys(data[0]).map((key) => (
              <th key={key} className="border p-2">{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, idx) => (
                <td key={idx} className="border p-2">{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
