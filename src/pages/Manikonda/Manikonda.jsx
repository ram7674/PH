import React from "react";
import "./manikonda.css";

import MegaNavbar from "../../components/Navbar/MegaNavbar";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/SliderHomePage/Slider";
import HumanCareExp from "../../components/HumanCareExp/HumanCareExp";
import SearchDoctors from "../../components/SearchDoctors/SearchDoctors";
import MethodCard from "../../components/MethodCard/MethodCard";

import manikondahp from "../../../public/assets/branch-img-phm.jpg"

const Manikonda = () => {
  return (
    <>
      {/* meagNavbat component */}
      <MegaNavbar />

      {/* slider page component */}
      <Slider />

      {/* Searchdoctors components */}
      <SearchDoctors />

      {/* methodscard component */}
      <MethodCard />

      {/* HumanCareExp component */}
      <HumanCareExp />

      {/* location page */}
      <div className="container">
        <div className="row">
          <div className="col-12 p-0">
            <div className="location__section">
              <div className="image__sec">
                <img src={manikondahp} alt="manilonda hospital" className="manikonda__hosimg" />
              </div>
              <div className="map__sec">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1062513392108!2d78.3820474750106!3d17.40668788348377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97b7d5ca06cb%3A0x55fb12ed6b83f2b9!2sPrasad%20Hospitals%20-%20Best%20Hospital%20in%20Manikonda%2C%20Jubilee%20Hills%2C%20Shaikpet%2C%20Narsingi%2C%20Gachibowli!5e0!3m2!1sen!2sin!4v1726049646057!5m2!1sen!2sin"
                  className="manikonda__map"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Prasad Hospital Manikonda"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* lifeglane tabs components */}
      {/* <LifeGlaneTabs/> */}

      {/* footer component */}
      <Footer />
    </>
  );
};

export default Manikonda;
