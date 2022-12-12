import "../../pages/intro/step.css";
import { Link } from "react-router-dom";
import icon from "../../pics/icons/loop.svg";

export default function Step4() {
  return (
    <div className="bg">
      <div className="box">
        <h1>Startguide</h1>
        <img className="logo" src={icon} alt="logo"></img>
        <p>Søgefelt.<br></br>Find begravede ved at søge på deres navn eller gravstedets nummer.</p>
        <div className="buttons1">
          <Link to="/home">
            <button>Skip</button>
          </Link>
          <Link to="/step5">
            <button id="solid">Næste</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
