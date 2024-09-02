import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './slider.css';

import slider1 from '../../assets/slider1.jpg';
import slider2 from '../../assets/slider2.jpg'

const images = [
  {
    src: slider1,
    alt: 'Slide 1',
    heading: 'Welcome to Slide 1',
    text: 'This is the first slide of the carousel.',
    buttonText: 'Learn More',
    buttonLink: '#'
  },
  {
    src: slider2,
    alt: 'Slide 2',
    heading: 'Discover Slide 2',
    text: 'This is the second slide with more information.',
    buttonText: 'Explore',
    buttonLink: '#'
  },
  {
    src: slider1,
    alt: 'Slide 1',
    heading: 'Experience Slide 3',
    text: 'This is the third slide with exciting content.',
    buttonText: 'Get Started',
    buttonLink: '#'
  },
];

function Slider() {
  return (
    <Carousel fade controls indicators interval={2000}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <div
            className="d-block w-100"
            style={{
              backgroundImage: `url(${image.src})`,
              height: '82vh',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'relative',
            }}
          >
            <div className="carousel-content">
              <h2>{image.heading}</h2>
              <p>{image.text}</p>
              <a href={image.buttonLink} className="btn btn-primary">
                {image.buttonText}
              </a>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
