import './topnavstyle.css'
import logo from '../../pics/logo.svg'
import { Link } from "react-router-dom";

function Topnav() {
  return (
    <div className='topNavbox'>
      <Link to= "/" >
        <img src={logo} alt="Kirkegårds appen" className='srcLogo'/>
      </Link>
    </div>
  )
}

export default Topnav