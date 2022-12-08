import "../../pages/intro/step.css";
import { Link } from "react-router-dom";
import icon from "../../pics/navicon/mapInactive.svg";

export default function Step1() {
  return (
    <div className="bg">
      <div className="box">
        <h1>Start guide</h1>
        <p>
          Tryk på “Kort”-ikonet for at gå til kortoversigten over kirkegården.
        </p>
        <img className="logo" src={icon} alt="logo"></img>
        <div className="buttons1">
          <Link to="/Frontpage">
            <button>Skip</button>
          </Link>
          <Link to="/step4">
            <button id="solid">Næste</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
