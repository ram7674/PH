import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaYoutube } from "react-icons/fa";

const SliderDrVideos = () => {
  const items = [
    { img: "drslider-image1.png", text: "Prasad Hospitals Nacharam", content: "Everything you need to know about Black Fungus (Mucormycosis) by Dr. Nishanth, Senior ENT Surgeon ", videoId: "xOZRxLI8pXg" },
    { img: "drslider-image2.png", text: "Infertility Centre, Dr. K. Suma Prasad TV Interview", content: "Infertility Centre, Dr. K. Suma Prasad TV Interview, Prasad Hospitals Nacharam.", videoId: "Zx2hIo-XbKs" },
    { img: "drslider-image3.png", text: "Dr. K. Suma Prasad TV9 Interview - Best Infertility Doctor", content: " Best Infertility Doctor | Prasad Hospitals Nacharam Pragathinagar", videoId: "MdI8D-H8HSk" },
    { img: "drslider-image4.png", text: "Urologist Dr Raghavendar TV Interview - Prasad Hospitals Nacharam", content: "Consultant at Prasad Hospitals Nacharam, Dr. Raghavendar K's interview on Sneha TV Health Talk Program", videoId: "d8Yc3xhG5nU" },
    { img: "drslider-image5.png", text: "Expert ENT care - Prasad Hospitals Nacharam", content: "Problem with your senses? We are here to provide you with the best ENT medical facilities with proficient experts for any problems with the ear, nose and throat. Problems like hearing loss, ear discharge, ear-ache, balance disorders, Tinnitus, nasal blockage, nasal deformity, Sinusitis, Allergic Rhinitis and tumors of the nose and sinuses are addressed with utmost care giving an international standard healthcare experience", videoId: "iwb2eo-XU9w" },
    { img: "drslider-image6.png", text: "Covid-19 Vaccination for Women - Pregnancy, Lactation, Menstural Cycle - All you need to know", content: "Covid-19 Vaccination for Women - Pregnancy, Lactation, Menstural Cycle - All you need to know from Dr. Suma Prasad - Prasad Hospitals Nacharam", videoId: "IY9JldolPUU" },
    { img: "drslider-image7.png", text: "Prasad Hospitals - New Year 2024", content: "As we step into the dawn of a new year, Prasad Hospitals extends heartfelt wishes to our incredible community. ", videoId: "zC1xheaOglw" },
    { img: "drslider-image8.png", text: "Expert Neurology care - Prasad Hospitals Nacharam", content: "Neurological issues like migraines, neuropathy, and dementia begin with simple symptoms like headaches but only upon expert consultation and diagnosis, you can identify the problem and get the best solution for it. We at Prasad Hospitals, with the help of our proficient neurologists, provide you with a comprehensive, individualized and result-oriented approach to address your health complaints", videoId: "TxS0alyiwds" },
    { img: "drslider-image9.png", text: "Young Age Heart Attacks - Dr Sravan kumar - Prasad Hospitals Nacharam - Pragathinagar Road", content: "Dr Sravan kumar - Prasad Hospitals Nacharam - Pragathinagar Road", videoId: "3nrCZMAXUV8" },
    { img: "drslider-image10.png", text: "Expert Pulmonology / Lung Health care- Prasad Hospitals Nacharam", content: "Lungs are one of the highly affected parts of the body due to the pandemic, pollution and also sedentary lifestyle. Our pulmonologists, at Prasad Hospitals, provide you with specialised treatment suitable for your problem resulting in an improved quality of life. Our pulmonology services range from regular lung checks to serious respiratory issues with the best international standard care that you can get.", videoId: "gf8B_sagh1M" },
    { img: "drslider-image11.png", text: "Dr Nishanth Explains about Sinusitis Symptoms & Treatment - Prasad Hospitals Nacharam", content: "Sinusitis Symptoms & Treatment - Prasad Hospitals Nacharam", videoId: "DoGQHXQH-to" },
    { img: "drslider-image12.png", text: "Kidney Problems Advice by Dr. Raghavendar K. - Prasad Hospitals Nacharam", content: "Consultant at Prasad Hospitals Nacharam, Dr. Raghavendar K's interview on Sneha TV about Kidney Problems", videoId: "Q2vTNvzgUiQ" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [itemWidth, setItemWidth] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const totalItems = items.length;

  useEffect(() => {
    const updateItemWidth = () => {
      const sliderItem = document.querySelector(".slider-item");
      if (sliderItem) {
        setItemWidth(sliderItem.clientWidth + 10); // Including margin
      }
    };

    // Update item width on resize
    updateItemWidth();
    window.addEventListener("resize", updateItemWidth);
    return () => window.removeEventListener("resize", updateItemWidth);
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
    return `translateX(-${
      ((currentIndex + totalItems) % totalItems) * itemWidth
    }px)`;
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
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
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
              src={`/assets/drslide-images/${item.img}`}
              alt={`Slide ${index + 1}`}
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
                className="video__cont"
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

export default SliderDrVideos;
