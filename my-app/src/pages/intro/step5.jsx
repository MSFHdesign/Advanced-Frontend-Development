import "../../pages/intro/step.css";
import { Link } from "react-router-dom";
import icon from "../../pics/navicon/storyInactive.svg";

export default function Step5() {
  return (
    <div className="bg">
      <div className="box">
        <h1>Startguide</h1>
        <img className="logo" src={icon} alt="logo"></img>
        <p>Opret livshistorie.<br></br>Skriv en historie om en af de begravede.</p>
        <div className="buttons1">
          <Link to="/home">
            <button id="step5Button">Færdig</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
