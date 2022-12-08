import "../../pages/intro/step.css";
import { Link } from "react-router-dom";
import icon from "../../pics/icons/loop.svg";

export default function Step1() {
  return (
    <div className="bg">
      <div className="box">
        <h1>Start guide</h1>
        <p>Tryk på søgefeltet for at søge efter grave.</p>
        <img className="logo" src={icon} alt="logo"></img>
        <div className="buttons1">
          <Link to="/Frontpage">
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
