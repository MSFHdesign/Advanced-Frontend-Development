import "../../pages/start-intro/start-intro.css";
import logo from "../../pics/logo.svg";

export default function StartIntro() {
  return (
    <div className="test">
      <div className="test2">
        <img className="logo" src={logo} alt="logo"></img>
        <h1>Kirkegårds historier</h1>
        <div className="buttons">
          <button>Start</button>
          <button>Intro</button>
        </div>
      </div>
    </div>
  );
}
