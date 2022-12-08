import "./btmNav.css";

// aktive ikoner
import activeHome from '../../pics/navicon/homeActive.svg'
import activeQr from '../../pics/navicon/qrActive.svg'
import activeMap from '../../pics/navicon/mapActive.svg'
import activeStory from '../../pics/navicon/storyActive.svg'

// inaktive ikoner
import inactiveHome from '../../pics/navicon/homeInactive.svg'
import inactiveQr from '../../pics/navicon/qrInactive.svg'
import inactiveMap from '../../pics/navicon/mapInactive.svg'
import inactiveStory from '../../pics/navicon/storyInactive.svg'



import { Link, useLocation } from "react-router-dom";


export default function BtmNav() {
      const location = useLocation();
        return (
  <nav className="navBtm">

    {/*Home */}
   {location.pathname === /* Hvis pathname er  */  "/home" ? /* SÅ vær hvid */  <Link to="/home">
    <img src={activeHome} alt="Home" className="Icon" height="100px" /> 
    </Link> 
        : /* Ellers så skal du være grøn sød tak */ 
    <Link to="/home"> <img src={inactiveHome} alt="Home" className="Icon" height="100px" />  </Link>}
   
   {/*QR */}
   {location.pathname === /* Hvis pathname er  */  "/qr" ? /* SÅ vær hvid */  <Link to="/qr">
    <img src={activeQr} alt="Home" className="Icon" height="100px" /> 
    </Link> 
        : /* Ellers så skal du være grøn sød tak */ 
    <Link to="/qr"> <img src={inactiveQr} alt="Home" className="Icon" height="100px" /></Link>}

   {/* Map */}
   {location.pathname === /* Hvis pathname er  */  "/map" ? /* SÅ vær hvid */  <Link to="/map">
    <img src={activeMap} alt="Home" className="Icon" height="100px" /> 
    </Link> 
        : /* Ellers så skal du være grøn sød tak */ 
    <Link to="/map"> <img src={inactiveMap} alt="Home" className="Icon" height="100px" /></Link>}
   
   {/* Story */}
   {location.pathname === /* Hvis pathname er  */  "/story" ? /* SÅ vær hvid */  <Link to="/story">
    <img src={activeStory} alt="Home" className="Icon" height="100px" /> 
    </Link> 
        : /* Ellers så skal du være grøn sød tak */ 
    <Link to="/story"> <img src={inactiveStory} alt="Home" className="Icon" height="100px" /></Link>}
   
  
          
      
    </nav>
  );
}
