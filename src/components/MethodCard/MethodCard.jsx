import React, { useState } from "react";
import "./MethodCard.css";

const MethodCard = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Define tabs, images, and content
  const tabs = ["Why Prasad?", "NABH Accredited", "47 Years of Legacy", "0% Surgical-Side Infection Rate", "Empanalled With All Corporates"];
  const images = [
    "/assets/bannere-whyprasad.jpg",
    "/assets/bannere-whyprasad.jpg",
    "/assets/bannere-whyprasad.jpg",
    "/assets/bannere-whyprasad.jpg",
    "/assets/bannere-whyprasad.jpg",
  ];
  const content = [
    {
      title: "Why Prasad?",
      description:
        "At Prasad Hospitals, we are committed to providing exceptional healthcare services across a range of specialties. With a team of highly skilled doctors and cutting-edge technology, we ensure that every patient receives the best possible care in a warm, compassionate environment.",
    },
    {
      title: "NABH Accredited",
      description:
        "Prasad Hospitals Nacharam is the first & only NABH-Accredited hospital in Nacharam, on par with the Best hospitals in Hyderabad for excellence in patient care.",
    },
    {
      title: "47 Years of Legacy",
      description:
        "Dr. KVR Prasad first founded Sridevi Nursing Home in Warasiguda in 1974. The facility was subsequently upgraded with a premium ICU and an ambulance service, and a high-end operation theatre. After earning the trust of thousands, Dr. Suma established a state-of-the-art clinic with a lab at Kukatpally. A high-end NABH-accredited hospital in Nacharam (2013) followed suit.",
    },
    {
      title: "0% Surgical-Side Infection Rate",
      description:
        "With world-class HEPA Filters, Modular OTs & an Ultra-Hygienic Environment, we take pride in the face that our surgical side infection rate is ZERO!.",
    },
    {
      title: "Empanalled With All Corporates",
      description:
        "Where ever you work, whatever you do, whoever your insurer is, we will cure you. From major insurance companies like Apollo Munich, to TPAs & PSUs like GHPL & TSGENCO, we offer cash-less services for almost everyone!.",
    },
    
  ];

  // Handle tab click
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row methods__containerSec">
          {/* Tabs */}
          <div className="col-12 col-md-5 col-lg-5 tabs__cardSec">
            <h2 className="methods__mainTit">Method to Miracle</h2>
            <ul className="tabs">
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  className={
                    activeTab === index ? "tab-title active" : "tab-title"
                  }
                  onClick={() => handleTabClick(index)}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>

          {/* Image based on selected tab */}
          <div className="col-12 col-md-7 col-lg-7 tabs__img__card">
            <img
              src={images[activeTab]}
              alt={`Image for ${tabs[activeTab]}`}
              className="tab-image"
            />
          </div>
        </div>
      </div>

      {/* Content based on selected tab */}
      <div className="container">
        <div className="row">
          <div className="col-12 p-0">
            <div className="selTab-content">
              <h2>{content[activeTab].title}</h2>
              <p>{content[activeTab].description}</p>
              <div>{content[activeTab].additionalInfo}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MethodCard;
