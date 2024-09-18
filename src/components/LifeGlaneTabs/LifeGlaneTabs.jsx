import React, { useState } from 'react';
import './lifeglanetabs.css'; 
import SliderDrVideos from '../SliderDrVideos/SliderDrVideos';
import SliderPatientTest from '../SliderPatientTest/SliderPatientTest';
import SliderGeneralVid from '../SliderGeneralVid/SliderGeneralVid';

const LifeGlaneTabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    { id: 'tab1', label: 'Doctor Videos' },
    { id: 'tab2', label: 'Patient Testimonials' },
    { id: 'tab3', label: 'General Videos' },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className='container-fluid' style={{background: '#a6cf45',}}>
      <div className='container p-0'>
        <div className="tabs-containers py-3">
          <div className="tabs-slider">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="tab-content">
            {activeTab === 'tab1' && <SliderDrVideos/>}
            {activeTab === 'tab2' && <SliderPatientTest/>}
            {activeTab === 'tab3' && <SliderGeneralVid/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeGlaneTabs;
