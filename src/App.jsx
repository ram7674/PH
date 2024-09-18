import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import DoctorDetails from './components/DoctorDetails/DoctorDetails'
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

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/doctor/:doctorName" element={<DoctorDetails />} />
        <Route path='/doctors-list' element={<DoctorsList/>} />
        <Route path='/center-of-excellence/:specialty' element={<CentreofExcellence/>} />
        <Route path='/manikonda' element={<Manikonda/>} />
        <Route path='/nacharam' element={<Nacharam/>} />
        <Route path='/pragatinagar' element={<Pragatinagar/>} />
        <Route path='/all-you-should-know-about-pneumonia' element={<AboutPneumoniaPage/>} />
        <Route path='/choosing-the-right-hospital' element={<ChoosingRightHospitalPage/>} />
        <Route path='/life-after-knee-ligament-surgery' element={<LifeAfterSurgeryPage/>} />
        <Route path='/pcod' element={<PcodPage />} />
        <Route path='/all-kou-kust-know-about-pregnancy-care' element={<AboutPregnancyCarePage />} />
      </Routes>
    </Router>
  )
}

export default App;