import "../../pages/qr/qr.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import QrScan from "react-qr-reader";

function QRscanner() {
  const [qrscan, setQrscan] = useState("No result");
  const navigate = useNavigate();
  var URL = "";
  const handleScan = (data) => {
    if (data) {
      setQrscan(data);
      URL = `/${data}`;
      navigate(URL);
      console.log(qrscan);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <span>QR Scanner</span>
      <div className="qrscanner">
        <QrScan delay={300} onError={handleError} onScan={handleScan} />
      </div>
    </div>
  );
}

export default QRscanner;
