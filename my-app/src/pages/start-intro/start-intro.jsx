import "../../pages/start-intro/start-intro.css";
import logo from "../../pics/logo.svg";
import { Link } from "react-router-dom";

export default function StartIntro() {
  return (
    <div className="test">
      <div className="test2">
        <img className="logo" src={logo} alt="logo"></img>
        <h1>Kirkegårds historier</h1>
        <div className="buttons">
          <Link to="/Frontpage">
            <button>Start</button>
          </Link>
          <button>Intro</button>
        </div>
      </div>
    </div>
  );
}
