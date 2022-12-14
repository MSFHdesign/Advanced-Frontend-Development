import "../../pages/start-intro/start-intro.css";
import logo from "../../pics/logo.svg";
import { Link } from "react-router-dom";

export default function StartIntro() {
  return (
    <div className="test">
      <div className="test2">
        <img className="logoMain" src={logo} alt="logo"></img>
        <div className="introContent">
          <h1 className="introHeader">Kirkegårds historier</h1>
          <div className="buttons">
            <Link to="/Step0">
              <button>Start</button>
            </Link>
            <Link to="/home">
              <button>Skip intro</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}