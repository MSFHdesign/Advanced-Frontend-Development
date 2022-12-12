import './topnavstyle.css'
import logo from '../../pics/logo.svg'
import { NavLink, BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Topnav() {
  return (
    <div className='topNavbox'>
      <NavLink to= "/home" >
        <img src={logo} alt="Kirkegårds appen" className='srcLogo'/>
      </NavLink>
    </div>
  )
}

export default Topnav