import './topnavstyle.css'
import logo from '../../pics/logo.svg'
import { Link } from "react-router-dom";
import info from '../../pics/icons/Info1.svg'

function Topnav() {
  return (
    <div className='topNavbox'>
      <Link to= "/" >
        <img src={logo} alt="Kirkegårds appen" className='srcLogo'/>
      </Link>
      <h3>Kirkegårdshistorier</h3>
      <Link to= "/step0" >
        <img src={info} alt="Info-logo" className='srcLogo'/>
      </Link>
    </div>
  )
}

export default Topnav