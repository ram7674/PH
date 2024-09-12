import React from 'react'
import './Nacharam.css'

import MegaNavbar from '../../components/Navbar/MegaNavbar'
import Footer from '../../components/Footer/Footer'
import Slider from '../../components/SliderHomePage/Slider'
import HumanCareExp from '../../components/HumanCareExp/HumanCareExp'
import SearchDoctors from '../../components/SearchDoctors/SearchDoctors'
import MethodCard from '../../components/MethodCard/MethodCard'

import manikondaHospital from "../../../public/assets/branch-img-phn.jpg"

const Nacharam = () => {
  return (
    <>

      {/* meagNavbat component */}
      <MegaNavbar/>

      {/* slider page component */}
      <Slider/>

      {/* Searchdoctors components */}
      <SearchDoctors/>

      {/* methodscard component */}
      <MethodCard/>

      {/* HumanCareExp component */}
      <HumanCareExp/>

      {/* location page */}
      <div className="container">
        <div className="row">
          <div className="col-12 p-0">
            <div className="location__section">
              <div className="image__sec">
                <img src={manikondaHospital} alt="manilonda hospital" className="manikonda__hosimg" />
              </div>
              <div className="map__sec">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.444482624963!2d78.55265277501131!3d17.438427383457515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bfb51b1d4bd%3A0xfa144994cd02f3af!2sPrasad%20Hospitals!5e0!3m2!1sen!2sin!4v1726115277169!5m2!1sen!2sin"
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

      {/* footer component */}
      <Footer/>
    </>
  )
}

export default Nacharam;