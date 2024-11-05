import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./meganavbar.css";
import { Link } from "react-router-dom";

import logo from "/assets/logo.png";
import logoSmBgWhite from "/assets/logo-sm-white.png";

function MegaNavbar() {
  return (
    <>
      <div className="sticky-top">
        {/* top navabar */}
        <div className="top__container">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="topnav__card">
                  <Link to="/">
                    <img src={logo} alt="logo" className="logo" />
                  </Link>
                  <div className="topnav__left__card">
                    <button className="appoint__btn">Access Lab Reports</button>
                    <button className="appoint__btn">Appointment</button>
                    <a href="tel:+918801233333">
                      <button className="emer__btn">Emergency</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MegaNavbar;
