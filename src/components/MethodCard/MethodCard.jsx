import React, { useState } from "react";
import "./MethodCard.css";

const MethodCard = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Define tabs, images, and content
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];
  const images = [
    "/path/to/image1.jpg",
    "/path/to/image2.jpg",
    "/path/to/image3.jpg",
  ];
  const content = [
    {
      title: "Orthopaedics",
      description:
        "The Department of Plastic & Cosmetic Surgery at Manipal Hospitals is a comprehensive practice for restoring, reconstructing and enhancing the physical attributes of its patients to help them achieve a better quality of life.",
    },
    {
      title: "Plastic And Cosmetic Surgery",
      description:
        "The Department of Plastic & Cosmetic Surgery at Manipal Hospitals is a comprehensive practice for restoring, reconstructing and enhancing the physical attributes of its patients to help them achieve a better quality of life.",
    },
    {
      title: "Orthopaedics",
      description:
        "The Department of Plastic & Cosmetic Surgery at Manipal Hospitals is a comprehensive practice for restoring, reconstructing and enhancing the physical attributes of its patients to help them achieve a better quality of life.",
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
          <div className="col-12 col-lg-5 tabs__cardSec">
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
          <div className="col-12 col-lg-7 tabs__img__card">
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
          <div className="col-12">
            <div className="selTab-content">
              <p>{content[activeTab].description}</p>
              <h2>{content[activeTab].title}</h2>
              <div>{content[activeTab].additionalInfo}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MethodCard;
