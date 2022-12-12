import React, { useState } from "react";
import { Link } from "react-router-dom";
import QrScan from "react-qr-reader";

function QRscanner() {
  const [qrscan, setQrscan] = useState("No result");
  const handleScan = (data) => {
    if (data) {
      setQrscan(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <span>QR Scanner</span>

      <center>
        <div style={{ marginTop: 30 }}>
          <QrScan
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ height: 240, width: 320 }}
          />
        </div>
      </center>
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
