import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data";
import "./DoctorDetails.css";


const DoctorDetails = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const { doctorName } = useParams();
  const doctor = data.doctors[doctorName];

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  // Tab configuration
  const tabs = [
    {
      key: "overview",
      label: "Overview",
      content: Array.isArray(doctor.overview)
        ? doctor.overview
        : [doctor.overview || "Overview information not available."],
    },
    {
      key: "fellowship",
      label: "Fellowship & Membership",
      content: doctor.fellowship || "Fellowship information not available.",
    },
    {
      key: "expertise",
      label: "Field of Expertise",
      content: doctor.expertise || "Expertise information not available.",
    },
    {
      key: "languages",
      label: "Languages Spoken",
      content:
        doctor.languages?.join(", ") || "Languages information not available.",
    },
    {
      key: "publications",
      label: "Talks & Publications",
      content:
        doctor.publications?.join(", ") ||
        "Publications information not available.",
    },
    {
      key: "awards",
      label: "Awards & Achievements",
      content: doctor.awards || "Awards and achievements not available.",
    },
  ];

  return (
    <>

      {/* Doctors details and book appointment card */}
      <div className="container-fluid each__drContainer">
        <div className="container">
          <div className="row">
            {/* Each doctor details card */}
            <div className="col-12 col-md-12 col-lg-8 p-0">
              <div className="each__docotor__card">
                <div className="images__cards">
                  <img
                    src={`/assets/doctors/${doctor.image}`}
                    alt={doctorName}
                    className="dr__img"
                  />
                </div>

                <div className="person__details">
                  <span className="dr__name">{doctorName}</span>
                  <span className="dr__Speciality">
                  {doctor.expertise}
                  </span>
                  <div className="dr__qul__sec">
                    <h3>Qualification :</h3>
                    <span>{doctor.qualification}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Book appointment card */}
            <div className="col-12 col-md-12 col-lg-4 p-0">
              <div className="banner__card"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs container */}
      <div className="container mb-5 pb-3">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8">
            <div className="tabs__card">
              {/* Tabs Navigation */}
              <ul className="nav nav-tabs">
                {tabs.map((tab) => (
                  <li className="tab-items" key={tab.key}>
                    <a
                      className={`nav-link dr__navLinks ${
                        activeTab === tab.key ? "active" : ""
                      }`}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default link behavior
                        setActiveTab(tab.key);
                      }}
                    >
                      {tab.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Tab Content */}
              <div className="tab-drcontent mt-3">
                {tabs.map((tab) =>
                  activeTab === tab.key ? (
                    <div key={tab.key} className="tab-pane fade show active">
                      <div className="tab-drtitle">{tab.label}</div>
                      {Array.isArray(tab.content) ? (
                        <ul className="drcontent-list">
                          {tab.content.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <div>{tab.content}</div>
                      )}
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default DoctorDetails;
