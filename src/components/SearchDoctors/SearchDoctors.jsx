import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../../data/data"; // Adjust the path if necessary
import './searchdoctors.css'

const SearchDoctors = () => {
  const [selectedHospital, setSelectedHospital] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const navigate = useNavigate();

  // Fetch the hospital names from data
  const hospitals = Object.keys(data.hospitals);

  // Filter specialties based on selected hospital or show all specialties if no hospital is selected
  const specialties = selectedHospital
    ? data.hospitals[selectedHospital]
    : Array.from(new Set(Object.values(data.hospitals).flat()));

  // Filter doctors based on selected specialty or show all doctors if no specialty is selected
  const doctors = selectedSpecialty
    ? data.specialties[selectedSpecialty]
    : Array.from(new Set(Object.values(data.specialties).flat()));

  // Handle submit button click
  const handleSubmit = () => {
    if (selectedDoctor) {
      navigate(`/doctor/${selectedDoctor}`);
    }
  };

  return (
    <div className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="col-12 search__doct__card">

                    {/* Select Hospital card */}
                    <div className="inputs__cards mar__right">
                        <select
                        value={selectedHospital}
                        onChange={(e) => {
                            setSelectedHospital(e.target.value);
                            setSelectedSpecialty(""); // Reset Specialty and Doctor when Hospital changes
                            setSelectedDoctor("");
                        }}
                        className="input__select"
                        >
                        <option value="">Select Hospital</option>
                        {hospitals.map((hospital) => (
                            <option key={hospital} value={hospital}>
                            {hospital}
                            </option>
                        ))}
                        </select>
                    </div>

                    {/* Select Specialty card*/}
                    <div className="inputs__cards mar__right">
                        <select
                        value={selectedSpecialty}
                        onChange={(e) => {
                            setSelectedSpecialty(e.target.value);
                            setSelectedDoctor(""); // Reset Doctor when Specialty changes
                        }}
                        className="input__select"
                        >
                        <option value="">Select Specialty</option>
                        {specialties.map((specialty) => (
                            <option key={specialty} value={specialty}>
                            {specialty}
                            </option>
                        ))}
                        </select>
                    </div>

                    {/* Select Doctor card*/}
                    <div className="inputs__cards">
                        <select
                        value={selectedDoctor}
                        onChange={(e) => setSelectedDoctor(e.target.value)}
                        className="input__select"
                        >
                        <option value="">Select Doctor</option>
                        {doctors.map((doctor) => (
                            <option key={doctor} value={doctor}>
                            {doctor}
                            </option>
                        ))}
                        </select>
                    </div>

                    <button className="submit__btn" onClick={handleSubmit} disabled={!selectedDoctor}>
                       Submit
                    </button>

                </div>
            </div>
        </div>
    </div>
  );
};

export default SearchDoctors;