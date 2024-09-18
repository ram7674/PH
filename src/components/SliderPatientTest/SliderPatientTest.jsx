import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaYoutube } from 'react-icons/fa';
import './SliderPatientTest.css';

const SliderPatientTest = () => {
  const items = [
    { img: "slider-emergency.jpg", text: "Patient Testimonials, Infertility Treatment in Secunderabad, Prasad Hospitals Nacharam", content: "Dr. K. Suma Prasad's patients, Smt. Vasanta's husband about her experience at Prasad Hospitals, Nacharam where she underwent infertility treatment.", videoId: "bkpcbb2e9eY" },
    { img: "slider-treatment.jpg", text: "Knee Replacement Patient Mrs. Prema Testimonial, Dr. Uday G. Reddy, Prasad Hospitals Nacharam", content: "Mrs. Prema, A School Principal in Hyderabad got her knee replaced by Dr. Uday G. Reddy at Prasad Hospital, Nacharam. She shares her experience with the doctor and her brother talks about the hospital.", videoId: "YEoHV1BFAJE" },
    { img: "slider-treatment.jpg", text: "Knee Replacement by Dr. Uday G. Reddy - Patient Testimonial - Prasad Hospitals Nacharam", content: "Dr. Veeresam, A BHMS Doctor from Hyderabad shares his experience about his Bilateral Total Knee Replacement Surgery Performed by Dr. Uday G. Reddy at Prasad Hospitals, Nacharam", videoId: "wIOC4NWELAI" },
    { img: "slider-emergency.jpg", text: "ENT Testimonial - Tonsillectomy by Dr. K. Swami - Prasad Hospitals Nacharam", content: "Mr. Subramanyam, An Aarogyabadrata Card Holder from Nallakunta Police Station, Hyderabad shares his experience about his Tonsillectomy Surgery Performed by Dr. K. Swamy at Prasad Hospitals, Nacharam", videoId: "JOk4pYH8W0s" },
    { img: "slider-treatment.jpg", text: "Knee Replacement by Dr. Uday G. Reddy - Patient Testimonial - Prasad Hospitals Nacharam", content: "Mr. Bakta Prahalada, an NFC Employee from Hyderabad shares his experience about his Bilateral Total Knee Replacement Surgery Performed by Dr. Uday G. Reddy at Prasad Hospitals, Nacharam", videoId: "07dJMIj3pno" },
    { img: "slider-emergency.jpg", text: "Straight from the heart - patient's testimonial - Prasad Hospitals Nacharam", content: "patient's testimonial - Prasad Hospitals Nacharam", videoId: "BCGpfVODYuc" },
    { img: "slider-emergency.jpg", text: "Patient Testimonial - Best Dialysis Centre in Secunderabad - Prasad Hospitals Nacharam", content: "Best Dialysis Centre in Secunderabad - Prasad Hospitals Nacharam", videoId: "Zu_mExeFU8I" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [itemWidth, setItemWidth] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const totalItems = items.length;

  useEffect(() => {
    const updateItemWidth = () => {
      const sliderItem = document.querySelector('.slider-item');
      if (sliderItem) {
        setItemWidth(sliderItem.clientWidth + 10); // Including margin
      }
    };

    // Update item width on resize
    updateItemWidth();
    window.addEventListener('resize', updateItemWidth);
    return () => window.removeEventListener('resize', updateItemWidth);
  }, []);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    }
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  const calculateTranslateValue = () => {
    return `translateX(-${(currentIndex + totalItems) % totalItems * itemWidth}px)`;
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleVideoClick = (videoId) => {
    setCurrentVideo(videoId);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setCurrentVideo(null);
  };

  return (
    <div className="slider-container">
      <button className="slider-button prev-button" onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <div
        className="slider-wrapper"
        style={{
          transform: calculateTranslateValue(),
          transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {items.concat(items).map((item, index) => (
          <div
            className="slider-item"
            key={index}
            onClick={() => handleVideoClick(item.videoId)}
          >
            <img
              src={`/assets/${item.img}`}
              alt={`Slide ${index}`}
              className="slider-image"
            />
            <div className="slider-content">
              <div className="slider-text">{item.text}</div>
              <div className="slider-insideCard">
                <span className="slider__hrLine"></span>
                <div className="slider-icon">
                  <FaYoutube />
                </div>
                <span className="slider__hrLine"></span>
              </div>
              <div className="slider-text">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
      <button className="slider-button next-button" onClick={nextSlide}>
        <FaChevronRight />
      </button>

      {/* Popup for YouTube video */}
      {popupVisible && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>
              &times;
            </button>
            {currentVideo && (
              <iframe
                width="560"
                height="315"
                className='video__cont'
                src={`https://www.youtube.com/embed/${currentVideo}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderPatientTest;
