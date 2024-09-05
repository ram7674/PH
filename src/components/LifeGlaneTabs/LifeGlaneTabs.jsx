import React, { useState } from 'react';
import LifeGlaneSlider from '../../components/LifeGlaneSlider/LifeGlaneSlider';
import './lifeglanetabs.css'; 

const LifeGlaneTabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    { id: 'tab1', label: 'Tab 1' },
    { id: 'tab2', label: 'Tab 2' },
    { id: 'tab3', label: 'Tab 3' },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className='container-fluid' style={{background: '#01b2ac',}}>
      <div className='container'>
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
            {activeTab === 'tab1' && <LifeGlaneSlider />}
            {activeTab === 'tab2' && <LifeGlaneSlider />}
            {activeTab === 'tab3' && <LifeGlaneSlider />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeGlaneTabs;
