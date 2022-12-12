import "../../pages/intro/step.css";
import { Link } from "react-router-dom";
import icon from "../../pics/navicon/homeInactive.svg";

export default function Step1() {
  return (
    <div className="bg">
      <div className="box">
        <h1>Startguide</h1>
        <img className="logo" src={icon} alt="logo"></img>
        <p>Forsiden.<br></br>Her kan du se udvalgte livshistorier.</p>
        <div className="buttons1">
          <Link to="/home">
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
