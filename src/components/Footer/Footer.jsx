import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";
import { Link } from "react-router-dom";
import logo from "/assets/logo-sm-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-dark text-center text-white text-lg-start pt-4">
      {/* copy-rights top section */}
      <Container className="py-4">
        <Row>
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <img src={logo} alt="footer logo" className="footer__logo" />
            <h5 className="footer_subTitles"></h5>
            <p className="footer__desc">
              <span className="footer__ph">Prasad Hospitals : </span> A
              NABH-accredited center of excellence, committed to delivering
              superior patient-centric healthcare. We proudly accept all major
              insurance plans.
            </p>
            <div className="footer__contactSec">
              <div className="footer__card">
                <span>Nacharam</span>

                <span className="footer__num">
                  <FontAwesomeIcon icon={faPhone} />
                  <a href="tel:+88012 33333">+ 91 88012 33333</a>
                </span>
              </div>

              <div className="footer__card">
                <span>Pragathi Nagar</span>

                <span className="footer__num">
                  <FontAwesomeIcon icon={faPhone} />
                  <a href="tel:+81212 12707">+ 91 81212 12707</a>
                </span>
              </div>

              <div className="footer__card">
                <span>Manikonda</span>
                <span className="footer__num">
                  <FontAwesomeIcon icon={faPhone} />
                  <a href="tel:+88850 23110">+ 91 88850 23110</a>
                </span>
              </div>

              <div className="footer__card">
                <span>Landline Number</span>
                <span className="footer__num">
                <span className="landph-uni-code">{'\u260F'}</span>
                  <a href="tel:+88850 23110"> 040-68244555</a>
                </span>
              </div>

              <div className="footer__card">
                <span className="footer__num">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a href="mailto:info@example.com">care@prasadhospitals.in</a>
                </span>
              </div>

            </div>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="footer_subTitles">Centres of Excellence</h5>
            <ul className="list-unstyled footer__mainItem mb-0">
              <Link to="/center-of-excellence/Infertility">
                <li className="footer__liItems">Infertility</li>
              </Link>
              <Link to="/center-of-excellence/Orthopedics">
                <li className="footer__liItems">Orthopedics</li>
              </Link>
              <Link to="/center-of-excellence/Gynecology">
                <li className="footer__liItems">Gynecology</li>
              </Link>
              <Link to="/center-of-excellence/ENT">
                <li className="footer__liItems">Ear Nose Throat</li>
              </Link>
              <Link to="/center-of-excellence/Pulmonology">
                <li className="footer__liItems">Pulmonology</li>
              </Link>
              <Link to="/center-of-excellence/Nephrology">
                <li className="footer__liItems">Nephrology</li>
              </Link>
              <Link to="/center-of-excellence/Urology">
                <li className="footer__liItems">Urology</li>
              </Link>
              <Link to="/center-of-excellence/Neurology">
                <li className="footer__liItems">Neurology</li>
              </Link>
              <Link to="/center-of-excellence/Pediatrics">
                <li className="footer__liItems">Pediatrics</li>
              </Link>
              <Link to="/center-of-excellence/Cardiology">
                <li className="footer__liItems">Cardiology</li>
              </Link>
              <Link to="/center-of-excellence/GeneralPhysician">
                <li className="footer__liItems">GeneralPhysician</li>
              </Link>
              <Link to="/center-of-excellence/Radiology">
                <li className="footer__liItems">Radiology</li>
              </Link>
              <Link to="/center-of-excellence/Neurosurgery">
                <li className="footer__liItems">Neurosurgery</li>
              </Link>
              <Link to="/center-of-excellence/Neonatology">
                <li className="footer__liItems">Neonatology</li>
              </Link>
              <Link to="/center-of-excellence/SurgicalGastroenterology">
                <li className="footer__liItems">SurgicalGastroenterology</li>
              </Link>
              <Link to="/center-of-excellence/Dental">
                <li className="footer__liItems">Dental</li>
              </Link>
              <Link to="/center-of-excellence/GeneralSurgeon">
                <li className="footer__liItems">GeneralSurgeon</li>
              </Link>
              <Link to="/center-of-excellence/Dermatology">
                <li className="footer__liItems">Dermatology</li>
              </Link>
              <Link to="/center-of-excellence/Anesthesiology">
                <li className="footer__liItems">Anesthesiology</li>
              </Link>
              <Link to="/center-of-excellence/CriticalCare">
                <li className="footer__liItems">CriticalCare</li>
              </Link>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="footer_subTitles">Recent Blogs</h5>
            <ul className="list-unstyled footer__mainItem mb-0">
              <Link to="/all-you-should-know-about-pneumonia">
                <li className="footer__liItems">
                  All You Should Know About Pneumonia
                </li>
              </Link>

              <Link to="/choosing-the-right-hospital">
                <li className="footer__liItems">Choosing The Right Hospital</li>
              </Link>

              <Link to="/life-after-knee-ligament-surgery">
                <li className="footer__liItems">
                  Life after Knee Ligament (ACL) Surgery
                </li>
              </Link>

              <Link to="/pcod">
                <li className="footer__liItems">PCOD</li>
              </Link>

              <Link to="/all-kou-kust-know-about-pregnancy-care">
                <li className="footer__liItems">
                  All You Must Know About Pregnancy Care
                </li>
              </Link>
            </ul>
          </Col>

          <Col lg={2} md={6} className="mb-4 mb-md-0">
            <h5 className="footer_subTitles">Locations</h5>
            <ul className="list-unstyled footer__mainItem mb-0">
              <Link to="/best-hospital-in-manikonda">
                <li className="footer__liItems">Manikonda</li>
              </Link>

              <Link to="/best-hospital-in-Kukatpally">
                <li className="footer__liItems">Pragathi Nagar</li>
              </Link>

              <Link to="/best-hospital-in-secunderabad">
                <li className="footer__liItems">Nacharam</li>
              </Link>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* locations section */}
      <div className="container-fluid location__footer">
        <div className="container location__innerCard">
          <div className="row">
            <div className="col-12 p-0">
              <div className="location__card">
                <Link to="/best-hospital-in-manikonda">
                  <span>Manikonda</span>
                </Link>
                <Link to="/best-hospital-in-Kukatpally">
                  <span>Pragathi Nagar</span>
                </Link>
                <Link to="/best-hospital-in-secunderabad">
                  <span>Nacharam</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* copy_rights bottom section */}
      <div
        className="container-fluid py-3"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="container footer__copy">
          <div className="footer__copySec1">
            <span className="text-white">© 2024 Copyright </span>
            <a href="https://prasadhospitals.in/">
              <span className="text-white"> prasadhospitals</span>
            </a>
          </div>

          <div className="footer__copySec2">
            <Link to="/disclaimer">
              <span>Disclaimer</span>
            </Link>{" "}
            |{" "}
            <Link to="/privacy-policy">
              <span>Privacy Policy</span>
            </Link>{" "}
            |
            <Link to="/terms-conditions">
              <span>Terms & Conditions</span>
            </Link>{" "}
            |{" "}
            <Link to="/refund-policy">
              <span>Refund Policy</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
