import "../../pages/intro/step.css";
import { Link } from "react-router-dom";
import icon from "../../pics/navicon/qrInactive.svg";

export default function Step2() {
  return (
    <div className="bg">
      <div className="box">
        <h1>Startguide</h1>
        <img className="logo" src={icon} alt="logo"></img>
        <p>QR-scanner.<br></br>Scan et gravsteds QR-kode for at læse den begravedes livshistorie.</p>
        <div className="buttons1">
          <Link to="/Frontpage">
            <button>Skip</button>
          </Link>
          <Link to="/step3">
            <button id="solid">Næste</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
