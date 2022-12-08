import "../../pages/intro/step1.css";
import { Link } from "react-router-dom";

export default function Step1() {
  return (
    <div className="bg">
      <div className="box">
        <h1>Start guide</h1>
        <p>Tryk på “Hjem”-ikonet for at gå til forsiden.</p>
        <img className="logo" src alt="logo"></img>
        <div className="buttons1">
          <Link to="/Frontpage">
            <button id="hollow">Start</button>
          </Link>
          <button id="solid">Intro</button>
        </div>
      </div>
    </div>
  );
}
