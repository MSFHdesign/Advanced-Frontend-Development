import React, { useState } from "react";
import { Link } from "react-router-dom";
import QrScan from "react-qr-reader";

function QR() {
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
      <Link to="/"></Link>
      <span>QR Scanner</span>

      <center>
        <div>
          <QrScan
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ height: 240, width: 320 }}
          />
        </div>
      </center>

      <textarea name="test" value={qrscan} readOnly></textarea>
      <div>
        <Link to={qrscan}>
          <button>tryk ik på mig</button>
        </Link>
      </div>
    </div>
  );
}

export default QR;
