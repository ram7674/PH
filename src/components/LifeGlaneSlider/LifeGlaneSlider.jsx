import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaYoutube  } from 'react-icons/fa';
import './LifeGlaneSlider.css';

const LifeGlaneSlider = () => {
  const items = [
    { img: 'slider-emergency.jpg', text: 'Item 1' },
    { img: 'slider-treatment.jpg', text: 'Item 2' },
    { img: 'slider-treatment.jpg', text: 'Item 3' },
    { img: 'slider-emergency.jpg', text: 'Item 4' },
    { img: 'slider-treatment.jpg', text: 'Item 5' },
    { img: 'slider-emergency.jpg', text: 'Item 6' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [itemWidth, setItemWidth] = useState(0);

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

          <div className="slider-item" key={index}>

            <img src={`/src/assets/${item.img}`} alt={`Slide ${index}`} className="slider-image" />
            
            <div className="slider-content">
              <div className="slider-title">Title {index + 1}</div>
              <div className='slider-insideCard'>
                <span className='slider__hrLine'></span>
                <div className="slider-icon"><FaYoutube /></div>
                <span className='slider__hrLine'></span>
              </div>
              <div className="slider-title">Title {index + 1}</div>
            </div>

          </div>

        ))}
      </div>
      <button className="slider-button next-button" onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default LifeGlaneSlider;
