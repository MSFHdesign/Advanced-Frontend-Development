import "./btmNav.css";
import HomeGreen from "../../pics/homegreen.svg";
import MapGreen from "../../pics/mapgreen.svg";
import QRscanner from "../../pics/qrscansolidgreen.svg";
import { Link } from "react-router-dom";

export default function btmNav() {
  return (
    <nav className="navBtm">
   
      <Link to="/">
        <img src={HomeGreen} alt="Home" className="Icon" /> 
      </Link>
      <Link to="/Qr">
        <img src={QRscanner} alt="HQR" className="Icon" />
      </Link>
      <Link to="/">  
        <img src={MapGreen} alt="Map" className="Icon" />
      </Link>  
      <Link to="/">
          <img src={MapGreen} alt="AddStory" className="Icon" />
      </Link>

    </nav>
  );
}
