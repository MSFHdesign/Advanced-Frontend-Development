import "../../pages/intro/step.css";
import { Link } from "react-router-dom";
import icon from "../../pics/navicon/qrInactive.svg";

export default function Step1() {
  return (
    <div className="bg">
      <div className="box">
        <h1>Start guide</h1>
        <p>Tryk på “Scan”-ikonet for at scanne QR-koder.</p>
        <img className="logo" src={icon} alt="logo"></img>
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
