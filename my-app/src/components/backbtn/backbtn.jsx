import React from 'react'
import { useNavigate } from 'react-router-dom';
import './backbtn.css';
function Backbtn() {
    const navigate = useNavigate();
  return (
    <div>
        <button className="backBTN" onClick={() => navigate('/')}>Go back</button>
    </div>
  )
}

export default Backbtn
