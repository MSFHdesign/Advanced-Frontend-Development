import "../../pages/start-intro/start-intro.css";
import logo from "../../pics/logo.svg";
import btmpart from "../../pics/bottompart.svg";

export default function StartIntro() {
  return (
    <div className="test">
      <img className="logo" src={logo} alt="logo"></img>
      <img className="logo" src={btmpart} alt="logo"></img>
      <h1>Kirkegårds historier</h1>
      <div className="buttons">
        <button>Start</button>
        <button>Intro</button>
      </div>
    </div>
  );
}
