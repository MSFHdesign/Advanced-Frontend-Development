import "../../pages/intro/step.css";
import { Link } from "react-router-dom";
import icon from "../../pics/navicon/mapInactive.svg";

export default function Step3() {
  return (
    <div className="bg">
      <div className="box">
        <h1>Startguide</h1>
        <img className="logo" src={icon} alt="logo"></img>
        <p>
        Kort over kirkegården.<br></br>Klik på gravene for at se information om de begravede.
        </p>
        <div className="buttons1">
          <Link to="/home">
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
