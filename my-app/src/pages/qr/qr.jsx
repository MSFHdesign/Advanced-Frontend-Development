import "../../pages/qr/qr.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QrScan from "react-qr-reader";
import Topnav from "../../components/top-nav/topnav";

function QRscanner() {
  const [qrscan, setQrscan] = useState("No result");
  const navigate = useNavigate();
  // var URL = "";
  const handleScan = (data) => {
    if (data) {
      setQrscan(data);
      // URL = `/qr/${data}`;
      // navigate(URL);
      sessionStorage.QrNavn = data;
      navigate(data);
      console.log(qrscan);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="qrsite">
      <Topnav />
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
