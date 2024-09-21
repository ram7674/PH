import React, { useState, useEffect } from "react";
import MegaNavbar from "../../components/Navbar/MegaNavbar";
import Footer from "../../components/Footer/Footer";
import "./centreofexcellence.css";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../data/data";
import InfertilityTabs from "../../components/InfertilityTabsComp/InfertilityTabs"

const CentreofExcellence = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { specialty } = useParams(); // Only specialty is needed
  const navigate = useNavigate();

  // Local state to store the specialty data
  const [specialtyData, setSpecialtyData] = useState({});
  const [activeTab, setActiveTab] = useState(0);

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

  // Extract the departmentContentTab from the specialtyData
  const departmentContentTab = specialtyData.departmentContentTab || [];

  // Function to handle tab click
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const currentDoctors = specialtyData?.doctors || [];

  // Check if the current specialty is 'infertility'
  const isInfertilityPage = specialty === 'Infertility';

  return (
    <>
      {/* Navbar component */}
      <MegaNavbar />

      {/* Banner container */}
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

      {/* Our story container */}
      <div className="container-fluid select__spe__maincd">
        <div className="container">
          <div className="row select__container">
            <div className="col-12 col-lg-11 p-0">
              <div className="select__card">
                <div className="select__cardleft">
                  <img src={`/assets/icons/${specialtyData.icons}`} alt="" />
                </div>
                <div className="select__cardright">
                  <h3>{specialtyData.title}</h3>
                  <p>{specialtyData.description}</p>
                </div>
              </div>
            </div>

            <div className="why__section">
              <div className="why__card1">
                <img
                  src={`/assets/${specialtyData.ourStoryImage}`}
                  alt="Our Story"
                  className="why__secimg"
                />
                {/* <div className="why-sec-imgcard">
                  <span>OUR STORY</span>
                  <span>
                    Know <br /> About Us
                  </span>
                </div> */}
              </div>

              <div className="why__card2">
                <h3>{specialtyData.whyPrasadTittle}</h3>
                <p>{specialtyData.whyDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally render InfertilityTabs */}
      {isInfertilityPage && <InfertilityTabs/>}


      {/* Tabs container */}
      <div className="container pt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="treat-procetitle">
              Department of{" "}
              {departmentContentTab.length > 0
                ? departmentContentTab[0].mainTitle
                : "Our Services"}
            </h1>
            <ul className="nav nav-tabs">
              {departmentContentTab.length > 0 &&
                departmentContentTab[0].sections.map((section, index) => (
                  <li key={index} className="nav-item">
                    <button
                      className={`nav-link ${
                        activeTab === index ? "active" : ""
                      }`}
                      onClick={() => handleTabClick(index)}
                    >
                      {section.tabsTitle}
                    </button>
                  </li>
                ))}
            </ul>

            <div className="tab-content tabs__desCont">
              {departmentContentTab.length > 0 &&
                departmentContentTab[0].sections.map((section, index) => (
                  <div
                    key={index}
                    className={`tab-pane fade ${
                      activeTab === index ? "show active" : ""
                    }`}
                  >
                    <div className="tab-section-content">
                      {section.tabsdesc.map((text, textIndex) => (
                        <p key={textIndex}>{text}</p>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Treatment & Procedures container */}
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
              {currentIndex <
                (specialtyData.treatmentProcedures?.length || 0) - 1 && (
                <button className="next-arrow" onClick={handleNext}>
                  &rarr;
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* SpecialtyData filter related doctor cards */}
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
                      <span className="doctor__Speciality">
                        {doctor?.expertise}
                      </span>
                      <h3 className="doctor__qualif">Qualification :</h3>
                      <span className="dr__qulf">{doctor?.qualification}</span>
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

      {/* FAQs container */}
      <div className="container-fluid faq__secCard py-5">
        <div className="container py-3">
          <div className="row">
            <div className="col-12 col-lg-12 p-0">
              <h3 className="title__faqs">FAQ's</h3>
              {specialtyData.faq?.length > 0 ? (
                specialtyData.faq.map((faqItem, index) => (
                  <div
                    key={index}
                    className={`faq-item ${
                      expandedIndex === index ? "expanded" : ""
                    }`}
                  >
                    <div
                      className="faq-question"
                      onClick={() => toggleFAQ(index)}
                    >
                      <h5 className="faq__quest">{faqItem.question}</h5>
                      <span
                        className={`plus-icon ${
                          expandedIndex === index ? "rotated" : ""
                        }`}
                      >
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

      {/* Footer component */}
      <Footer />
    </>
  );
};

export default CentreofExcellence;
