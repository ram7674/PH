import React, { useState, useEffect } from 'react';
import MegaNavbar from '../../components/Navbar/MegaNavbar';
import Footer from '../../components/Footer/Footer';
import './doctorslist.css';
import SearchDoctors from '../../components/SearchDoctors/SearchDoctors';
import data from '../../data/data';
import { useNavigate } from 'react-router-dom';

const DoctorsList = () => {
  const doctorsPerPage = 6; // Number of doctors per page
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate(); // Initialize navigate

  // Check screen size to determine if the device is mobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 767); // Adjust breakpoint as needed
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Calculate the index of the first and last doctor on the current page
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = Object.keys(data.doctors).slice(indexOfFirstDoctor, indexOfLastDoctor);

  const totalPages = Math.ceil(Object.keys(data.doctors).length / doctorsPerPage);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleViewProfile = (doctorName) => {
    navigate(`/doctor/${doctorName}`);
  };

  // Determine the page numbers to display based on the current page and screen size
  const getDisplayedPageNumbers = () => {
    if (isMobile) {
      if (currentPage === 1) {
        return [1, 2];
      } else if (currentPage === totalPages) {
        return [totalPages - 1, totalPages];
      } else {
        return [currentPage - 1, currentPage];
      }
    } else {
      return [...Array(totalPages).keys()].map((i) => i + 1);
    }
  };

  return (
    <>
      {/* MegaNavbar component */}
      <MegaNavbar />

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 p-0'>
            <div className='doctorpg__banner'></div>

            {/* SearchDoctors component */}
            <SearchDoctors />
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row dr__detailpg'>
          <div className='col-12 col-lg-9 mt-5 pt-3'>
            {currentDoctors.map((doctorName) => {
              const doctor = data.doctors[doctorName];
              return (
                <div key={doctorName} className='each__doctor__card'>
                  <div className='images__card'>
                    <marquee className="marq__tag">{doctorName} {doctor.qualification}</marquee>
                    <img src={`/assets/doctors/${doctor.image}`} alt={doctorName} className='doctor__img' />
                  </div>

                  <div className='person__details'>
                    <span className='dr__name'>{doctorName}</span>
                    <span className='dr__Speciality'>{doctor.expertise}</span>
                    <div className='dr__qul__sec'>
                      <h3>Qualification:</h3>
                      <span>{doctor.qualification}</span>
                    </div>

                    <div className='view__btnbg'>
                      <button className='view__btn' onClick={() => handleViewProfile(doctorName)}>View profile</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination with page numbers */}
        <div className='pagination'>
          <button 
            onClick={() => paginate(currentPage - 1)} 
            disabled={currentPage === 1}
            className='pagination-btn'
          >
            Previous
          </button>

          {getDisplayedPageNumbers().map((pageNumber) => (
            <button 
              key={pageNumber} 
              onClick={() => paginate(pageNumber)} 
              className={`pagination-btn ${currentPage === pageNumber ? 'active' : ''}`}
            >
              {pageNumber}
            </button>
          ))}

          <button 
            onClick={() => paginate(currentPage + 1)} 
            disabled={currentPage === totalPages}
            className='pagination-btn'
          >
            Next
          </button>
        </div>
      </div>

      {/* Footer component */}
      <Footer />
    </>
  );
};

export default DoctorsList;
