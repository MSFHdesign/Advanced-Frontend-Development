import "./btmNav.css";
import HomeGreen from "../../pics/homegreen.svg";
import MapGreen from "../../pics/mapgreen.svg";
import QRscanner from "../../pics/qrscansolidgreen.svg";

export default function btmNav() {
  return (
    <nav className="navBtm">
      <div className="iconFlex">
        <img src={HomeGreen} alt="Home" className="HomePic" />
        <img src={QRscanner} alt="HQR" className="QRscanner" />
        <img src={MapGreen} alt="Map" className="Pointer" />
      </div>

      <svg
        width="100vw"
        height="100%"
        viewBox="0 0 428 108"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 81.8908C165 69.7555 135.5 -0.000136566 216 1.64175e-10C296.5 0.000136567 274 81.8908 428 81.8908V108H0V81.8908Z"
          fill="#34430F"
        />
      </svg>
    </nav>
  );
}
