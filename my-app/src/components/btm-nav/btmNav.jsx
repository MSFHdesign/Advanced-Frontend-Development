import "./btmNav.css";
import HomeGreen from "../../pics/homegreen.svg";
import MapGreen from "../../pics/mapgreen.svg";
import QRscanner from "../../pics/qrscansolidgreen.svg";
import { Link, useLocation } from "react-router-dom";


export default function BtmNav() {
      const location = useLocation();
        return (
  <nav className="navBtm">

    {/*Home */}
   {location.pathname === /* Hvis pathname er  */  "/home" ? /* SÅ vær hvid */  <Link to="/home">
    <img src={HomeGreen} alt="Home" className="Icon" height="100px" /> 
    </Link> 
        : /* Ellers så skal du være grøn sød tak */ 
    <Link to="/home"> GRØN </Link>}
   
   {/*QR */}
   {location.pathname === /* Hvis pathname er  */  "/qr" ? /* SÅ vær hvid */  <Link to="/qr">
    <img src={QRscanner} alt="Home" className="Icon" height="100px" /> 
    </Link> 
        : /* Ellers så skal du være grøn sød tak */ 
    <Link to="/qr"> GRØN</Link>}

   {/* Map */}
   {location.pathname === /* Hvis pathname er  */  "/map" ? /* SÅ vær hvid */  <Link to="/map">
    <img src={MapGreen} alt="Home" className="Icon" height="100px" /> 
    </Link> 
        : /* Ellers så skal du være grøn sød tak */ 
    <Link to="/map"> GRØN</Link>}
   
   {/* Story */}
   {location.pathname === /* Hvis pathname er  */  "/story" ? /* SÅ vær hvid */  <Link to="/story">
    <img src={MapGreen} alt="Home" className="Icon" height="100px" /> 
    </Link> 
        : /* Ellers så skal du være grøn sød tak */ 
    <Link to="/story"> GRØN</Link>}
   
  
          
      
    </nav>
  );
}
