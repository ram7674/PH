import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import DoctorDetails from './pages/DoctorDetails/DoctorDetails'
import DoctorsList from './pages/DoctorsList/DoctorsList'
import CentreofExcellence from './pages/CentreofExcellence/CentreofExcellence'
import Manikonda from './pages/Manikonda/Manikonda'
import Nacharam from './pages/Nacharam/Nacharam'
import Pragatinagar from './pages/Pragatinagar/Pragatinagar'
import AboutPneumoniaPage from './pages/AboutPneumoniaPage/AboutPneumoniaPage'
import ChoosingRightHospitalPage from './pages/ChoosingRightHospitalPage/ChoosingRightHospitalPage'
import LifeAfterSurgeryPage from './pages/LifeAfterSurgeryPage/LifeAfterSurgeryPage'
import PcodPage from './pages/PcodPage/PcodPage'
import AboutPregnancyCarePage from './pages/AboutPregnancyCarePage/AboutPregnancyCarePage'
import Disclaimer from './pages/DisclaimerPage/DisclaimerPage'
import PrivacyPolicy from './pages/PrivacyPolicyPage/PrivacyPolicy'
import TermsConditions from './pages/TermsConditionsPage/TermsConditions'
import RefundPolicy from './pages/RefundPolicyPage/RefundPolicy'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/doctor/:doctorName" element={<DoctorDetails />} />
        <Route path='/doctors-list' element={<DoctorsList/>} />
        <Route path='/center-of-excellence/:specialty' element={<CentreofExcellence/>} />
        <Route path='/best-hospital-in-manikonda' element={<Manikonda/>} />
        <Route path='/best-hospital-in-secunderabad' element={<Nacharam/>} />
        <Route path='/best-hospital-in-Kukatpally' element={<Pragatinagar/>} />
        <Route path='/all-you-should-know-about-pneumonia' element={<AboutPneumoniaPage/>} />
        <Route path='/choosing-the-right-hospital' element={<ChoosingRightHospitalPage/>} />
        <Route path='/life-after-knee-ligament-surgery' element={<LifeAfterSurgeryPage/>} />
        <Route path='/pcod' element={<PcodPage />} />
        <Route path='/all-kou-kust-know-about-pregnancy-care' element={<AboutPregnancyCarePage />} />
        <Route path='/disclaimer' element={<Disclaimer/>} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-conditions' element={<TermsConditions/>} />
        <Route path='/refund-policy' element={<RefundPolicy/>} />
      </Routes>
    </Router>
  )
}

export default App;