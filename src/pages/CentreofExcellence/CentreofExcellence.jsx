import React, { useState, useEffect } from "react";
import MegaNavbar from "../../components/Navbar/MegaNavbar";
import Footer from "../../components/Footer/Footer";
import "./centreofexcellence.css";
import whyChooseImg from "../../../public/assets/why-choose-img.jpg";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../data/data"; // Assuming data is in this path
import LifeGlaneTabs from "../../components/LifeGlaneTabs/LifeGlaneTabs";

const CentreofExcellence = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { specialty } = useParams(); // Only specialty is needed
  const navigate = useNavigate();

  // Local state to store the specialty data
  const [specialtyData, setSpecialtyData] = useState({});

  // Fetch the specialty data when the specialty parameter changes
  useEffect(() => {
    const fetchData = () => {
      // Get the specialty data based on the specialty parameter
      const fetchedSpecialtyData = data.specialtiesData[specialty] || {};
      setSpecialtyData(fetchedSpecialtyData);
    };

    fetchData();
  }, [specialty]);

  // Handle the click event to view doctor profile
  const handleViewProfile = (drItem) => {
    navigate(`/doctor/${drItem}`);
  };

  // Handle slider navigation
  const handleNext = () => {
    if (currentIndex < (specialtyData.treatmentProcedures?.length || 0) - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Toggle FAQ section
  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const currentDoctors = specialtyData?.doctors || [];

  return (
    <>
      <MegaNavbar />

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <div className="center__ex__main">
              {specialtyData.bannerbg && (
                <img
                  src={`/assets/banner-stack/${specialtyData.bannerbg}`} // Accessing bannerbg
                  alt="Specialty Banner"
                  className="banner__imageCOE"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid select__spe__maincd">
        <div className="container">
          <div className="row select__container">
            <div className="col-12 col-lg-11 p-0">
              <div className="select__card">
                <div className="select__cardleft">
                  {/* Icons place here */}
                </div>
                <div className="select__cardright">
                  <h3>{specialtyData.title}</h3>
                  <h5>{specialtyData.subtitle}</h5>
                  <p>{specialtyData.description}</p>
                </div>
              </div>
            </div>

            <div className="why__section">
              <div className="why__card1">
                <img src={whyChooseImg} alt="Our Story" className="why__secimg" />
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

      <div className="container pt-5">
        <div className="row">
          <div className="col-12">
            <h3 className="treat-procetitle">Treatment & Procedures</h3>
            <div className="treatment-slider">
              <div className="treatment-container">
                {specialtyData.treatmentProcedures?.map((procedure, index) => (
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
              {currentIndex < (specialtyData.treatmentProcedures?.length || 0) - 1 && (
                <button className="next-arrow" onClick={handleNext}>
                  &rarr;
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

     {/* specialtyData filter related doctor cards */}
      <div className="container">
        <div className="row dr__detailpgCard">
          <div className="doctors__mainSec pt-4 pb-5">
            {currentDoctors.map((drItem) => {
              const doctor = data.doctors?.[drItem];
              return (
                <div key={drItem} className="each__doctor__cardItem">
                  <div className="img__card">
                    <marquee className="marq__ele">
                      {drItem} {doctor?.qualification}
                    </marquee>
                    <img
                      src={`/assets/doctors/${doctor?.image}`}
                      alt={drItem}
                      className="dr__image"
                    />
                  </div>
                  <div className="persn__det">
                    <div className="doctor__qul__sec">
                      <span className="doctor__name">{drItem}</span>
                      <span className="doctor__Speciality">{doctor?.expertise}</span>
                      <h3 className="doctor__qualif">Qualification:</h3>
                      <span>{doctor?.qualification}</span>
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
      

      <div className="container-fluid faq__secCard py-5">
        <div className="container py-3">
          <div className="row">
            <div className="col-12 col-lg-12 p-0">
              <h3 className="title__faqs">FAQ's</h3>
              {specialtyData.faq?.length > 0 ? (
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

      <LifeGlaneTabs />

      <Footer />
    </>
  );
};

export default CentreofExcellence;
