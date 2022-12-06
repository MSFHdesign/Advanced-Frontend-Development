
import React from 'react'
import Modal from "./Modal.jsx";
import './modal.css'

import Insider from './insider.jsx'

export default function AddContent() {
    
  
    return (
<Modal
        activator={({ setShow }) => (
          <button
            className="Icon"
            type="button"
            onClick={() => setShow(true)}
          >
            IKON HER
          </button>
        )}
      >
       <Insider />
      </Modal>
  )
}
