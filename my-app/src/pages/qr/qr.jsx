import "../../pages/qr/qr.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import QrScan from "react-qr-reader";

function QRscanner() {
  const [qrscan, setQrscan] = useState("No result");
  const navigate = useNavigate();
  var URL = "";
  const handleScan = (data) => {
    if (data) {
      setQrscan(data);
      URL = `/${data}`;
      navigate(URL);
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
      <textarea readOnly value={qrscan}></textarea>

      <div>
        <Link to={qrscan}>
          <button>tryk ik på mig</button>
        </Link>
      </div>
    </div>
  );
}

export default QRscanner;
