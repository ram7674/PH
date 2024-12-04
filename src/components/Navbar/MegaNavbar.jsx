import React, { useCallback } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./meganavbar.css";
import { Link } from "react-router-dom";

import logo from "/assets/logo.png";
import logoSmBgWhite from "/assets/logo-sm-white.png";
import LabReportsWidget from "../LabReportsWidget/LabReportsWidget";
import DoctorsWidget from "../DoctorsWidget/DoctorsWidget";

function MegaNavbar() {

 const OnAppoinment= useCallback(()=>{
  const appointBtn = document.querySelector("#mocdoc-drs > div:nth-child(1) > a > img")
  appointBtn?.click();
  //console.log("appointBtn,",appointBtn);
 },[])

 const labAccessBtn= useCallback(()=>{
  const labAccessBtn = document.querySelector("#viewreports")
  labAccessBtn?.click();
  //console.log("labAccessBtn,",labAccessBtn)
 },[])

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
                    <LabReportsWidget />
                    <DoctorsWidget />
                    <button className="appoint__btn" onClick={labAccessBtn}>Access Lab Reports</button>
                    <button className="appoint__btn" onClick={OnAppoinment}>Appointment</button>
                    <a href="tel:+918801233333">
                      <button className="emer__btn">Emergency</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* main topbar */}
        <Navbar expand="lg" className="main__navbar">
          <Container>
            <Link to="/">
              <img src={logoSmBgWhite} alt="logo" className="logo-sm" />
            </Link>
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <div className="nav-item dropdown">
                  <Nav.Link
                    href="#services"
                    className="dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                  >
                    Centre of Excellence
                  </Nav.Link>
                  <div className="dropdown-menu mega-menu nav__itemsW">
                    <Container>
                      <div className="row">
                        <ul className="col-sm-12">
                          <Link to="/center-of-excellence/Infertility">
                            <li className="dropdown-item">Infertility</li>
                          </Link>
                          <Link to="/center-of-excellence/Orthopedics">
                            <li className="dropdown-item">Orthopedics</li>
                          </Link>
                          <Link to="/center-of-excellence/Gynecology">
                            <li className="dropdown-item">Gynecology</li>
                          </Link>
                          <Link to="/center-of-excellence/ENT">
                            <li className="dropdown-item">Ear Nose Throat</li>
                          </Link>
                          <Link to="/center-of-excellence/Pulmonology">
                            <li className="dropdown-item">Pulmonology</li>
                          </Link>
                          <Link to="/center-of-excellence/Nephrology">
                            <li className="dropdown-item">Nephrology</li>
                          </Link>
                          <Link to="/center-of-excellence/Urology">
                            <li className="dropdown-item">Urology</li>
                          </Link>
                          <Link to="/center-of-excellence/Neurology">
                            <li className="dropdown-item">Neurology</li>
                          </Link>
                          {/* <Link to="/center-of-excellence/Physiotherapy">
                            <li className="dropdown-item">Physiotherapy</li>
                          </Link> */}
                          {/* <Link to="/center-of-excellence/General Medicine">
                            <li className="dropdown-item">General Medicine</li>
                          </Link> */}
                          <Link to="/center-of-excellence/Pediatrics">
                            <li className="dropdown-item">Pediatrics</li>
                          </Link>
                          {/* <Link to="/center-of-excellence/Cryo Bank">
                            <li className="dropdown-item">Cryo Bank</li>
                          </Link> */}

                          <Link to="/center-of-excellence/Cardiology">
                            <li className="dropdown-item">Cardiology</li>
                          </Link>
                          <Link to="/center-of-excellence/GeneralPhysician">
                            <li className="dropdown-item">GeneralPhysician</li>
                          </Link>
                          <Link to="/center-of-excellence/Radiology">
                            <li className="dropdown-item">Radiology</li>
                          </Link>
                          <Link to="/center-of-excellence/Neurosurgery">
                            <li className="dropdown-item">Neurosurgery</li>
                          </Link>
                          <Link to="/center-of-excellence/Neonatology">
                            <li className="dropdown-item">Neonatology</li>
                          </Link>
                          <Link to="/center-of-excellence/SurgicalGastroenterology">
                            <li className="dropdown-item">
                              SurgicalGastroenterology
                            </li>
                          </Link>
                          <Link to="/center-of-excellence/Dental">
                            <li className="dropdown-item">Dental</li>
                          </Link>
                          <Link to="/center-of-excellence/GeneralSurgeon">
                            <li className="dropdown-item">GeneralSurgeon</li>
                          </Link>
                          <Link to="/center-of-excellence/Dermatology">
                            <li className="dropdown-item">Dermatology</li>
                          </Link>
                          <Link to="/center-of-excellence/Anesthesiology">
                            <li className="dropdown-item">Anesthesiology</li>
                          </Link>
                          <Link to="/center-of-excellence/CriticalCare">
                            <li className="dropdown-item">CriticalCare</li>
                          </Link>
                        </ul>
                      </div>
                    </Container>
                  </div>
                </div>
                <Nav.Link as={Link} to="/doctors-list">
                  Doctors
                </Nav.Link>
                <div className="nav-item dropdown">
                  <Nav.Link
                    href="#services"
                    className="dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                  >
                    Our Locations
                  </Nav.Link>
                  <div className="dropdown-menu mega-menu">
                    <Container>
                      <div className="row">
                        <div className="col-sm-12">
                          <Link to="/best-hospital-in-manikonda">
                            <span className="dropdown-item">Manikonda</span>
                          </Link>
                          <Link to="/best-hospital-in-Kukatpally">
                            <span className="dropdown-item">
                              Pragathi Nagar
                            </span>
                          </Link>
                          <Link to="/best-hospital-in-secunderabad">
                            <span className="dropdown-item">Nacharam</span>
                          </Link>
                        </div>
                      </div>
                    </Container>
                  </div>
                </div>
                <Nav.Link>International Patients</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default MegaNavbar;
