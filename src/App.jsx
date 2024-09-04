import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import DoctorDetails from './components/DoctorDetails/DoctorDetails'
import DoctorsList from './pages/DoctorsList/DoctorsList'
import CentreofExcellence from './pages/CentreofExcellence/CentreofExcellence'
import Manikonda from './pages/Manikonda/Manikonda'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/doctor/:doctorName" element={<DoctorDetails />} />
        <Route path='/doctors-list' element={<DoctorsList/>} />
        <Route path='/center-of-excellence/:specialty' element={<CentreofExcellence/>} />
        <Route path='/manikonda' element={<Manikonda/>} />
      </Routes>
    </Router>
  )
}

export default App;