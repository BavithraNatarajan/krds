import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://krds-assignment.github.io/aoc/api-assets/data.json')
      .then(response => response.json())
      .then(data => setData(data.features))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    adaptiveHeight: true, 
  };

  return (
    <div className="container-fluid">
        <div className='main-logo-holder'>       
        <img src="https://krds-assignment.github.io/aoc/api-assets/logo-aoc.png" alt="Main Logo" className="main-logo" />
        </div>

      <div className="desktop-view">
        {data.map((feature, index) => (
          <div key={index} className={`feature-block feature-block-${index}`}>
            <div className="feature-text">
              <img src={feature.logo} alt="logo" className="feature-logo" />
              <h2>{feature.title}</h2>
              <p>{feature.desc}</p>
            </div>
            <div className='main-pic-holder'>
              <img className='main-pic' src={feature.image} alt={feature.title} />
            </div>
          </div>
        ))}
      </div>
      <div className="mobile-view">
        <Slider {...settings}>
          {data.map((feature, index) => (
            <div key={index} className={`feature-block feature-block-${index}`}>
              <div className="feature-text">
              <img src={feature.logo} alt="logo" className="feature-logo" />
                <h2>{feature.title}</h2>
                <p>{feature.desc}</p>
              </div>
              <div className='main-pic-holder'>
                <img className='main-pic-mobile' src={feature.image} alt={feature.title} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default App;
