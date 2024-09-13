import React from "react";
import "./Pragatinagar.css";
import MegaNavbar from "../../components/Navbar/MegaNavbar";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/SliderHomePage/Slider";
import HumanCareExp from "../../components/HumanCareExp/HumanCareExp";
import SearchDoctors from "../../components/SearchDoctors/SearchDoctors";
import MethodCard from "../../components/MethodCard/MethodCard";
import pragathinagarhp from "/assets/branch-img-php.jpg";

const Pragatinagar = () => {
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
            <div className="location__sectionp">
              <div className="image__secp">
                <img
                  src={pragathinagarhp}
                  alt="pragathinaga hospital"
                  className="pragathinagar__hosimg"
                />
              </div>
              <div className="map__sec">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.672402852084!2d78.393116334114!3d17.505568528374695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9105e13703e9%3A0x627d9dece7150972!2sPrasad%20Hospitals%20-%20Best%20Hospital%20in%20Kukatpally%2C%20Pragatinagar%2C%20Bachupally%2C%20Nizampet!5e0!3m2!1sen!2sin!4v1726115374039!5m2!1sen!2sin"
                  className="pragathinagar__map"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Prasad Hospital Pragathinagar"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer component */}
      <Footer />
    </>
  );
};

export default Pragatinagar;
