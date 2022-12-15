import React from 'react'
import { useNavigate } from 'react-router-dom';

function Backbtn() {
    const navigate = useNavigate();
  return (
    <div>
        <button className="backBTN" onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}

export default Backbtn
