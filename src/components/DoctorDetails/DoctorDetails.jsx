import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/data';
import MegaNavbar from '../Navbar/MegaNavbar';
import Footer from '../Footer/Footer';
import './DoctorDetails.css';

const DoctorDetails = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const { doctorName } = useParams();
  const doctor = data.doctors[doctorName];

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  // Tab configuration
  const tabs = [
    { key: 'overview', label: 'Overview', content: doctor.overview || "Overview information not available." },
    { key: 'fellowship', label: 'Fellowship & Membership', content: doctor.fellowship },
    { key: 'expertise', label: 'Field of Expertise', content: doctor.expertise },
    { key: 'languages', label: 'Languages Spoken', content: doctor.languages?.join(', ') },
    { key: 'publications', label: 'Talks & Publications', content: doctor.publications?.join(', ') },
    { key: 'awards', label: 'Awards & Achievements', content: doctor.awards || "Awards and achievements not available." }
  ];

  return (
    <>
      {/* MegaNavbar component */}
      <MegaNavbar />

      <div className='container-fluid each__drContainer'>
        <div className='container'>
          <div className='row'>
            
            {/* each doctor details card */}
            <div className='col-12 col-md-12 col-lg-8 p-0'>    
              <div className='each__docotor__card'>

                <div className='images__cards'>
                  <img src={`/public/assets/doctors/${doctor.image}`} alt={doctorName} className='dr__img' />
                </div>

                <div className='person__details'> 
                  <span className='dr__name'>{doctorName}</span>
                  <span className='dr__Speciality'>Consultant - Cardiology</span>
                  <div className='dr__qul__sec'>
                    <h3>Qualification:</h3>
                    <span>Fellowship in Paediatric Critical Care</span>
                  </div>
                </div>

              </div>          
            </div>

            {/* bookappointment card */}
            <div className='col-12 col-md-12 col-lg-4 p-0'>    
              <div className='banner__card'>
                
              </div>          
            </div>

          </div>
        </div>
      </div>

      {/* tabs container */}
      <div className='container mb-5 pb-3'>
        <div className='row'>
          <div className='col-12 col-md-12 col-lg-8'>
            <div className='tabs__card'>
              {/* Tabs */}
              <ul className="nav nav-tabs">
                {tabs.map((tab) => (
                  <li className="tab-items" key={tab.key}>
                    <a
                      className={`nav-link ${activeTab === tab.key ? 'active' : ''}`}
                      href="#"
                      onClick={() => setActiveTab(tab.key)}
                    >
                      {tab.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Tab Content */}
              <div className='tab-content'>
                <table className='table'>
                  <tbody>
                    {tabs.map(
                      (tab) =>
                        activeTab === tab.key && (
                          <div key={tab.key}>
                            <div>{tab.label}</div>
                            <div>{tab.content}</div>
                          </div>
                        )
                    )}
                  </tbody>
                </table>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Footer component */}
      <Footer />

    </>
  );
};

export default DoctorDetails;
