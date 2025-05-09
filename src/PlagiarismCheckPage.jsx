import React, { useState } from "react";
import "./PlagiarismCheckPage.css";

const PlagiarismCheckPage = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [plagiarismResult, setPlagiarismResult] = useState(null);

  const handlePdfUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please upload a valid PDF file");
    }
  };

  const checkPlagiarism = async () => {
    // Simulate fetch from backend
    const mockResult = {
      percentage: 18, // example: 18% matched with NCERT
    };
    setPlagiarismResult(mockResult);
  };

  const downloadCertificate = () => {
    const element = document.getElementById("certificate");
    const opt = {
      margin: 1,
      filename: "plagiarism_certificate.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "landscape" },
    };
    import("html2pdf.js").then(({ default: html2pdf }) => {
      html2pdf().set(opt).from(element).save();
    });
  };

  return (
    <div className="plagiarism-check-container bg-gray-800">
      <h1 className="page-title">Free Plagiarism Checker</h1>
      {!plagiarismResult ? (
        <>
          <div className="upload-box">
            {pdfFile ? (
              <p>{pdfFile.name}</p>
            ) : (
              <p className="placeholder-text">Upload your PDF here</p>
            )}
            <input type="file" accept="application/pdf" onChange={handlePdfUpload} />
          </div>
          <button
            className="check-button"
            onClick={checkPlagiarism}
            disabled={!pdfFile}
          >
            Check for Plagiarism
          </button>
        </>
      ) : (
        <div className="certificate-wrapper">
          <div id="certificate" className="certificate">
            <h2>Certificate of Plagiarism Check</h2>
            <p>This certifies that the uploaded document</p>
            <h3>{pdfFile.name}</h3>
            <p>has been checked against NCERT standards.</p>
            <p className="highlight">
              Plagiarism Match: <strong>{plagiarismResult.percentage}%</strong>
            </p>
            <p className="footer">Generated on {new Date().toLocaleDateString()}</p>
          </div>
          <button className="check-button" onClick={downloadCertificate}>
            Download Certificate
          </button>
        </div>
      )}
    </div>
  );
};

export default PlagiarismCheckPage;
