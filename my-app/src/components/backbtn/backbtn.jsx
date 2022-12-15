import './backbtn.css'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import back from '../../pics/navicon/Pil.svg'

function Backbtn() {
    const navigate = useNavigate();
  return (
    <div>
        <button className="backBTN" onClick={() => navigate(-1)}>
          <img src={back} alt="Info-logo"/>
        </button>
    </div>
  )
}

export default Backbtn
