import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaYoutube } from 'react-icons/fa';
import './SliderGeneralVid.css';

const SliderGeneralVid = () => {
  const items = [
    { img: "slider-emergency.jpg", text: "Eye Department Inauguration by NVSS Prabhakar Uppal MLA, Prasad Hospitals Nacharam", content: "Sri NVSS Prabhakar, MLA Uppal Inaugurated the opthatlamology department at Prasad Hospital, Nacharam in there presence of the hospital's MD, Dr. K. Suma Prasad & CEO Ramana Kovelamudi", videoId: "8I4qwHrQa2Y" },
    { img: "slider-treatment.jpg", text: "The RIGHT Precautionary Measures, Covid19-Prasad Hospitals Nacharam", content: "The RIGHT Precautionary Measures, Covid19-Prasad Hospitals Nacharam", videoId: "kqzHUO1jIpo" },
    { img: "slider-treatment.jpg", text: "Total Knee replacement surgery done @prasadhospitals by Dr Uday Sekhar Reddy, Prasad Hospitals", content: "Brilliant results post-surgery that helped her get back to walking happily like before! Just another day in making lives better and healthier @prasadhospitals", videoId: "snqkumVkakA" },
    { img: "slider-emergency.jpg", text: "Multispecialty Hospital in Hyderabad, Quality Health Care Services, Prasad Hospitals Nacharam", content: "We are one of the best private hospitals in Hyderabad with experienced team of doctors and staff who are dedicated to providing quality healthcare to the patients.", videoId: "LabJNjJ98b0" },
    { img: "slider-treatment.jpg", text: "Best Hospital in Nacharam, Tarnaka, Habsiguda, ECIL, Uppal, Boduppal - Prasad Hospitals Nacharam", content: "Prasad Hospitals Nacharam is the first and only hospital in Nacharam with NABH Accreditation. Prasad Hospitals has received the BEST HOSPITAL Award in 2017 under National Chapter. Prasad Hospitals has internationally trained doctors and state of the art operation theatres. Patients who are covered under Aarogyasri, EHS , Aarogyabadrata, CCMB, IICT, IG Mint, FCI and all major government and private insurances may avail cashless facility at Prasad hospitals Nacharam", videoId: "0iiUkOm30MU" },
    { img: "slider-emergency.jpg", text: "Prasad Hospitals Nacharam Free Medical Camp - 31.08.14 - Prasad Hospitals Nacharam", content: "Prasad Hospitals Nacharam organized a free health camp for over 1000 people in the hospital. Uppal MLA Sri NVSS Prabhakar, Malkajgiri MLA Sri Kanaka Reddy, Hospital MD Dr. K. Suma Prasad attended the camp", videoId: "OLow0AHSvWI" },
    { img: "slider-emergency.jpg", text: "All you need to know about Brain Stroke - Patient Education - Neurology - Prasad Hospitals", content: "Brain Stroke - Patient Education - Neurology - Prasad Hospitals", videoId: "9jZLKppCsG0" },
    { img: "slider-emergency.jpg", text: "What happens to your body when you go Vegan? - Vegan Day - Prasad Hospitals Nacharam", content: " your body when you go Vegan? - Vegan Day - Prasad Hospitals Nacharam", videoId: "XW27r2Go4w4" },
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

export default SliderGeneralVid;
