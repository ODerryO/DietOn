import React from "react"
import {
  BrowserRouter as
  Route
} from "react-router-dom";
import "./header.css"
import Shora from "../../assets/shora.jpg"
import Bell from "../../assets/Bell.png"
import Logo from "../../assets/Logo.png"

function Header () {
  return(
    
    <div className="header">
      <div className="logo">
        <img className="bannerLogo" src={Logo}
        alt="Logo" />

      </div>
      <div className="notifIcon">
        <img className="iconNotif"
        src={Bell}
        alt="Bell" />
      </div>
      <div className="userIcon">
        <ul className="profile-wrapper">
          <li>
          {/* <!-- user profile --> */}
          <div className="profile">
            <img
            src={Shora}
            alt="user profile" />
            {/* <!-- more menu --> */}
            <ul className="menu">
              <li><a href="/User">Profile</a></li>
              <Route path={`/User`} />
              <li className="logOut">Log out</li>
              {/* <li><a href="#">Log out</a></li> */}
            </ul>
          </div>
          </li>
        </ul>
    </div>
    </div>
  )
}

export default Header