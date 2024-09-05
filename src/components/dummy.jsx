import React, { useState } from "react";
import MegaNavbar from "../../components/Navbar/MegaNavbar";
import Footer from "../../components/Footer/Footer";
import "./centreofexcellence.css";

import whyChooseImg from "../../../public/assets/why-choose-img.jpg";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../data/data";
import LifeGlaneTabs from "../../components/LifeGlaneTabs/LifeGlaneTabs";

const CentreofExcellence = () => {
  // State to track which FAQ is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Extract parameters from the URL
  const { specialty, hospital } = useParams();

  // Retrieve data for the selected hospital and specialty
  const hospitalData = data.hospitals[hospital];
  const specialtyData = hospitalData?.specialties[specialty] ? data.specialtiesData[specialty] : {};

  // Filter doctors based on selected specialty
  const currentDoctors = hospitalData?.specialties[specialty] || [];

  // Handle view profile button click
  const navigate = useNavigate();
  const handleViewProfile = (drItem) => {
    navigate(`/doctor/${drItem}`);
  };

  const handleNext = () => {
    if (currentIndex < (specialtyData.treatmentProcedures?.length || 0) - 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Toggle the expanded FAQ
  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <MegaNavbar />

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <div className="center__ex__main">
              <img
                src={`/assets/banner-stack/${specialtyData.bannerbg}`}
                alt="Specialty Banner"
                className="banner__imageCOE"
              />
            </div>
          </div>
        </div>
      </div>

      <LifeGlaneTabs />

      <Footer />
    </>
  );
};

export default CentreofExcellence;
