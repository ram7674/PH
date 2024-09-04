import React, { useState } from "react";
import MegaNavbar from "../../components/Navbar/MegaNavbar";
import Footer from "../../components/Footer/Footer";
import "./centreofexcellence.css";

import whyChooseImg from "../../assets/why-choose-img.jpg";

import { useParams, useNavigate } from "react-router-dom";
import data from "../../data/data";
import LifeGlaneTabs from "../../components/LifeGlaneTabs/LifeGlaneTabs";

const CentreofExcellence = () => {

  // State to track which FAQ is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const { specialty } = useParams();
  const specialtyData = data.specialtiesData[specialty];

  // Filter doctors based on selected specialty
  const currentDoctors = data.specialties[specialty] || [];

  // Handle view profile button click
  const navigate = useNavigate();
  const handleViewProfile = (drItem) => {
    navigate(`/doctor/${drItem}`);
  };


  const handleNext = () => {
    if (currentIndex < specialtyData.treatmentProcedures.length - 2) {
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
      {/* Navbar components */}
      <MegaNavbar />

      {/* banner section container */}
      <div className="container-fluid">
        <div className="row">
          {/* Banner card */}
          <div className="col-12 p-0">
            <div className="center__ex__main">
              <img
                src={`/src/assets/${specialtyData.bannerbg}`}
                alt=""
                className="banner__imageCOE"
              />
            </div>
          </div>
        </div>
      </div>

      {/* our story section */}
      <div className="container-fluid select__spe__maincd">
        <div className="container">
          <div className="row select__container">

            {/* our story top section */}
            <div className="col-12 col-lg-11 p-0">
              <div className="select__card">
                <div className="select__cardleft">{/* Icons place here */}</div>
                <div className="select__cardright">
                  <h3>{specialtyData.title}</h3>
                  <h5>{specialtyData.subtitle}</h5>
                  <p >{specialtyData.description}</p>
                </div>
              </div>
            </div>

            {/* know aboutUS section */}
            <div className="why__section">
              <div className="why__card1">
                <img src={whyChooseImg} alt="" className="why__secimg" />
                <div className="why-sec-imgcard">
                  <span>OUR STORY</span>
                  <span>
                    Know <br /> About Us
                  </span>
                </div>
              </div>

              <div className="why__card2">
                <h3>{specialtyData.whyPrasadTittle}</h3>
                <p>{specialtyData.whyDescription}</p>
              </div>
            </div>

          </div>
        </div>
      </div>

       {/* Treatment & Procedures section */}
       <div className="container pt-5">
        <div className="row">
          <div className="col-12">  
            <h3 className="treat-procetitle">Treatment & Procedures</h3>
            <div className="treatment-slider">
              <div className="treatment-container">
                {specialtyData.treatmentProcedures.map((procedure, index) => (
                  <div
                    key={index}
                    className="treatment-item"
                    style={{
                      transform: `translateX(-${currentIndex * 100}%)`,
                      flex: "1 0 49%",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  >
                    <h3>{procedure.treatTitle}</h3>
                    <p>{procedure.treatdesc}</p>
                  </div>
                ))}
              </div>

              {currentIndex > 0 && (
                <button className="prev-arrow" onClick={handlePrev}>
                  &larr;
                </button>
              )}
              {currentIndex < specialtyData.treatmentProcedures.length - 2 && (
                <button className="next-arrow" onClick={handleNext}>
                  &rarr;
                </button>
              )}
            </div>
          </div>
        </div>
      </div>



      {/* Doctor's card section */}
      <div className="container">
        <div className="row dr__detailpgCard">
          <div className="doctors__mainSec pt-4 pb-5">
            {currentDoctors.map((drItem) => {
              const doctor = data.doctors[drItem];
              return (
                <div key={drItem} className="each__doctor__cardItem">

                  {/* image card block */}
                  <div className="img__card">
                    <marquee className="marq__ele">
                      {drItem} {doctor.qualification}
                    </marquee>
                    <img
                      src={`/src/assets/doctors/${doctor.image}`}
                      alt={drItem}
                      className="dr__image"
                    />
                  </div>

                  {/* content card block */}
                  <div className="persn__det">
                    <div className="doctor__qul__sec">
                      <span className="doctor__name">{drItem}</span>
                      <span className="doctor__Speciality">{doctor.expertise}</span>
                      <h3 className="doctor__qualif">Qualification:</h3>
                      <span>{doctor.qualification}</span>
                    </div>

                    <div className="view__card">
                      <button
                        className="view__btns"
                        onClick={() => handleViewProfile(drItem)}
                      >
                        View profile
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Faq's section */}
      <div className="container-fluid faq__secCard py-5">
        <div className="container py-3">
          <div className="row">
            <div className="col-12 col-lg-12 p-0">
              <h3 className="title__faqs">FAQ's</h3>
              {specialtyData.faq && specialtyData.faq.length > 0 ? (
                specialtyData.faq.map((faqItem, index) => (
                  <div
                    key={index}
                    className={`faq-item ${expandedIndex === index ? "expanded" : ""}`}
                  >
                    <div
                      className="faq-question"
                      onClick={() => toggleFAQ(index)}
                    >
                      <h5 className="faq__quest">{faqItem.question}</h5>
                      <span className={`plus-icon ${expandedIndex === index ? "rotated" : ""}`}>
                        +
                      </span>
                    </div>
                    {expandedIndex === index && (
                      <div className="faq-answer">
                        <p>{faqItem.answer}</p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p>No FAQs available for this specialty.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* lifeglanetabs component */}
      <LifeGlaneTabs/>
    

      {/* Footer components */}
      <Footer />

    </>
  );
};

export default CentreofExcellence;
