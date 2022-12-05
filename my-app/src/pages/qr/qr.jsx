import "../../pages/qr/qr.css";
import React, { useState } from 'react';
import QrReader from 'react-qr-scanner';

const Example = () => {
  const delay = 500;

  const previewStyle = {
    height: 'auto',
    width: '100%',
  };

  const [result, setResult] = useState('Scan QR koden på gravsteder for at finde historien');

  const handleScan = (result) => {
    if (result) {
      setResult(result);
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <>
      <QrReader
      className='QRreader'
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p>{result}</p>
    </>
  );
};

export default Example;