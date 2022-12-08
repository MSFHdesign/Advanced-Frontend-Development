import "../../pages/intro/step.css";
import { Link } from "react-router-dom";
import icon from "../../pics/navicon/homeInactive.svg";

export default function Step1() {
  return (
    <div className="bg">
      <div className="box">
        <h1>Start guide</h1>
        <p>Tryk på “Hjem”-ikonet for at gå til forsiden.</p>
        <img className="logo" src={icon} alt="logo"></img>
        <div className="buttons1">
          <Link to="/Frontpage">
            <button>Skip</button>
          </Link>
          <Link to="/step2">
            <button id="solid">Næste</button>
          </Link>
        </div>
      </div>
    </div>
  );
}