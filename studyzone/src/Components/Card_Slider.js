import Card from './Card';
import React from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';

const handleDragStart = (e) => e.preventDefault();

const CardSlider = () => {
  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
    1200: { items: 4 }
  };

  const items = [
    <div className='m-auto w-100 d-flex justify-content-center' onDragStart={handleDragStart}>
      <Card width="300px" />
    </div>,
    <div className='m-auto w-100 d-flex justify-content-center' onDragStart={handleDragStart}>
      <Card width="300px" />
    </div>,
    <div className='m-auto w-100 d-flex justify-content-center' onDragStart={handleDragStart}>
      <Card width="300px" />
    </div>,
    <div className='m-auto w-100 d-flex justify-content-center' onDragStart={handleDragStart}>
      <Card width="300px" />
    </div>,
        <div className='m-auto w-100 d-flex justify-content-center' onDragStart={handleDragStart}>
        <Card width="300px" />
      </div>
      ,
      <div className='m-auto w-100 d-flex justify-content-center' onDragStart={handleDragStart}>
      <Card width="300px" />
    </div>
    ,
    <div className='m-auto w-100 d-flex justify-content-center' onDragStart={handleDragStart}>
    <Card width="300px" />
  </div>
  ];


  const nextButton = ({ isDisabled }) => (
    <button style={{border: "50%"}}
      className="next-btn"
      disabled={isDisabled}
      aria-label="Next Slide">
      <img width={"25px"} height={"25px"} src="../Images/next.svg" alt="next" />
    </button>
  );

  const prevButton = ({ isDisabled }) => (
    <button
      className="prev-btn"
      disabled={isDisabled}
      aria-label="Next Slide"
    >
      <img width={"25px"} height={"25px"} src="../Images/prev.svg" alt="prev" />
    </button>
  );

  return (
    <AliceCarousel
      disableDotsControls={true}
      infinite={true}
      items={items}
      responsive={responsive}
      buttonsDisabled={true} // Enable navigation buttons
      renderNextButton={nextButton}
      renderPrevButton={prevButton}
    />
  );
}

export default CardSlider;
