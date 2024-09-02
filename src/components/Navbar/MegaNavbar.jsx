import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './meganavbar.css'
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

function MegaNavbar() {
  return (
    <>
    <div className='sticky-top'>

        {/* top navabar */}
        <div className='top__container'>
            <div className="container">
                <div className='row'>
                    <div className='col-12'>
                        <div className='topnav__card'>
                            <Link to='/'><img src={logo} alt="logo" className='logo' /></Link>
                            <div className='topnav__left__card'>
                                <button className='accesslab__btn'>Access Lab Reports</button>
                                <button className='appoint__btn'>Appointment</button>
                                <button className='emer__btn'>Emergency</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* main topbar */}
        <Navbar  expand="lg" className="main__navbar">
        <Container>
            <Navbar.Brand ></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                <div className="nav-item dropdown">
                <Nav.Link href="#services" className="dropdown-toggle" role="button" data-toggle="dropdown">
                    Centre of Excellence
                </Nav.Link>
                <div className="dropdown-menu mega-menu">
                    <Container>
                    <div className="row">
                        <ul className="col-sm-4">
                            <Link to='/center-of-excellence/Infertility'><li className="dropdown-item">Infertility</li></Link>
                            <Link to='/center-of-excellence/Orthopedics'><li className="dropdown-item">Orthopedics</li></Link>
                            <Link to='/center-of-excellence/Gynecology'><li className="dropdown-item">Gynecology</li></Link>
                            <Link to='/center-of-excellence/EarNoseThroat'><li className="dropdown-item">Ear Nose Throat</li></Link>
                            <Link to='/center-of-excellence/Pulmonology'><li className="dropdown-item">Pulmonology</li></Link>
                            <Link to='/center-of-excellence/Nephrology'><li className="dropdown-item">Nephrology</li></Link>
                            <Link to='/center-of-excellence/Urology'><li className="dropdown-item">Urology</li></Link>
                            <Link to='/center-of-excellence/Neurology'><li className="dropdown-item">Neurology</li></Link>
                            <Link to='/center-of-excellence/Physiotherapy'><li className="dropdown-item">Physiotherapy</li></Link>
                            <Link to='/center-of-excellence/General Medicine'><li className="dropdown-item">General Medicine</li></Link>
                            <Link to='/center-of-excellence/Dermotology'><li className="dropdown-item">Dermotology</li></Link>
                            <Link to='/center-of-excellence/Pediatrics'><li className="dropdown-item">Pediatrics</li></Link>
                            <Link to='/center-of-excellence/Cryo Bank'><li className="dropdown-item">Cryo Bank</li></Link>
                        </ul>
                    </div>
                    </Container>
                </div>
                </div>
                <Nav.Link as={Link} to="/doctors-list">Doctors</Nav.Link>
                <div className="nav-item dropdown">
                <Nav.Link href="#services" className="dropdown-toggle" role="button" data-toggle="dropdown">
                    Our Locations
                </Nav.Link>
                <div className="dropdown-menu mega-menu">
                    <Container>
                    <div className="row">
                        <div className="col-sm-4">
                            <Link to='/manikonda'><span className="dropdown-item">Manikonda</span></Link>
                            <Link><span className="dropdown-item">Pragathi Nagar</span></Link>
                            <Link><span className="dropdown-item">Nacharam</span></Link>
                        </div>
                    </div>
                    </Container>
                </div>
                </div>
                <Nav.Link >International Patients</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

        </div>
    </>
  );
}

export default MegaNavbar;
