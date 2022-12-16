import "../../pages/qr/qr.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import QrScan from "react-qr-reader";

function QRscanner() {
  const navigate = useNavigate();
  const handleScan = (data) => {
    sessionStorage.QrNavn = data;
    navigate(data);
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="qrsite">
      <h1>Scan QR-kode</h1>
      <div className="qrscanner">
        <QrScan
          delay={300}
          onError={handleError}
          onScan={handleScan}
          facingMode="environment"
          className="qr-image-wrapper"
          resolution={100}
          style={{ width: "90vw" }}
        />
      </div>
    </div>
  );
}

export default QRscanner;
