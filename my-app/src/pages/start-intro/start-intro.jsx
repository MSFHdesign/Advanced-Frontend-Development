import "../../pages/start-intro/start-intro.css";
import logo from "../../pics/logo.svg";
import { Link } from "react-router-dom";

export default function StartIntro() {
  return (
    <div className="test">
      <div className="test2">
        <img className="logoMain" src={logo} alt="logo"></img>
        <h1>Kirkegårds historier</h1>
        <div className="buttons">
          <Link to="/Frontpage">
            <button>Start</button>
          </Link>
          <Link to="/Step1">
            <button>Intro</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
