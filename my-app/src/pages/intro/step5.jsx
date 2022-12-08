import "../../pages/intro/step.css";
import { Link } from "react-router-dom";
import icon from "../../pics/navicon/storyInactive.svg";

export default function Step5() {
  return (
    <div className="bg">
      <div className="box">
        <h1>Start guide</h1>
        <p>Tryk på plus for at tilføje en historie om en afdød.</p>
        <img className="logo" src={icon} alt="logo"></img>
        <div className="buttons1">
          <Link to="/Frontpage">
            <button>Skip</button>
          </Link>
          <Link to="/Frontpage">
            <button id="solid">Færdig</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
