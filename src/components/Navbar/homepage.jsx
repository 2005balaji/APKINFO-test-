import React from "react";
import logo from "../Images/header/logo.svg";
import Profile from "../Images/profile.jpg";
import "../styles.css";
function homepage() {
  return (
    <>
      <header className="headerdiv" id="headerdiv">
        <div className="header1" id="header1">
          <img src={logo} alt="" />
          <span></span>
        </div>

        <div id="grideven" className="grideven">
        <span id="navspan">PREVIOUS-LOGS</span>

          <span id="navspan">GUIDES</span>

          <span id="navspan"></span>

          <div>
            <img src={Profile} alt="" id="dp" />
          </div>


          {/* <button id="loginbtn" >LOG IN</button> */}
        </div>
      </header>
    </>
  );
}

export default homepage;
