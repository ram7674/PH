import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";
import { Link } from "react-router-dom";
import logo from "../../../public/assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
              Prasad Hospitals Nacharam is the first & only NABH-Accredited
              hospital in Nacharam, on par with the best hospitals in India for
              excellence in patient care.
            </p>
            <div className="footer__contactSec">
              <div className="footer__card">
                <FontAwesomeIcon icon={faPhone} />
                <span className="footer__num"><a href="tel:+88012 33333">+91 88012 33333</a></span>
              </div>

              <div className="footer__card">
                <FontAwesomeIcon icon={faPhone} />
                <span className="footer__num"><a href="tel:+81212 12707">+91 81212 12707</a></span>
              </div>

              <div className="footer__card">
                <FontAwesomeIcon icon={faPhone} />
                <span className="footer__num"><a href="tel:+88850 23110">+91 88850 23110</a></span>
              </div>
              
              <div className="footer__card">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="footer__num"><a href="mailto:info@example.com">info@prasadhospitals.in</a></span>
              </div>
            </div>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="footer_subTitles">Centres of Excellence</h5>
            <ul className="list-unstyled footer__mainItem mb-0">
              <Link to="/center-of-excellence/Infertility">
                <li className="footer__liItems">Infertility</li>
              </Link>
              <Link>
                <li className="footer__liItems">Orthopedics</li>
              </Link>
              <Link>
                <li className="footer__liItems">Gynecology</li>
              </Link>
              <Link>
                <li className="footer__liItems">Ear Nose Throat</li>
              </Link>
              <Link>
                <li className="footer__liItems">Pulmonology</li>
              </Link>
              <Link>
                <li className="footer__liItems">Nephrology</li>
              </Link>
              <Link>
                <li className="footer__liItems">Urology</li>
              </Link>
              <Link>
                <li className="footer__liItems">Neurology</li>
              </Link>
              <Link>
                <li className="footer__liItems">Physiotherapy</li>
              </Link>
              <Link>
                <li className="footer__liItems">General Medicine</li>
              </Link>
              <Link>
                <li className="footer__liItems">Dermotology</li>
              </Link>
              <Link>
                <li className="footer__liItems">Pediatrics</li>
              </Link>
              <Link>
                <li className="footer__liItems">Cryo Bank</li>
              </Link>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="footer_subTitles">Recent Blogs</h5>
            <ul className="list-unstyled footer__mainItem mb-0">
              <Link>
                <li className="footer__liItems">
                  All You Should Know About Pneumonia
                </li>
              </Link>

              <Link>
                <li className="footer__liItems">Choosing The Right Hospital</li>
              </Link>

              <Link>
                <li className="footer__liItems">
                  Life after Knee Ligament (ACL) Surgery
                </li>
              </Link>

              <Link>
                <li className="footer__liItems">PCOD</li>
              </Link>

              <Link>
                <li className="footer__liItems">
                  All You Must Know About Pregnancy Care
                </li>
              </Link>
            </ul>
          </Col>

          <Col lg={2} md={6} className="mb-4 mb-md-0">
            <h5 className="footer_subTitles">Locations</h5>
            <ul className="list-unstyled footer__mainItem mb-0">
              <Link to="/manikonda">
                <li className="footer__liItems">Manikonda</li>
              </Link>

              <Link to="/pragatinagar">
                <li className="footer__liItems">Pragathi Nagar</li>
              </Link>

              <Link to="/nacharam">
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
                <Link to="/manikonda">
                  <span>Manikonda</span>
                </Link>
                <Link to="/pragatinagar">
                  <span>Pragathi Nagar</span>
                </Link>
                <Link to="/nacharam">
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
            <span>Disclaimer</span> | <span>Privacy Policy</span> |{" "}
            <span>Site map</span> | <span>Terms & Conditions</span> |{" "}
            <span>Refund Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
