import Carousel from '@components/Carousel'
import Footer from '@components/Footer';
import React from 'react'

const Home = () => {
  const slides = [
     "/assets/client/img-1.jpg",
     "/assets/client/img-2.jpg",
     "/assets/client/img-3.jpg",
     "/assets/client/img-4.png",
  ];

  return (
    <div>
      <div className="w-full relative">
        <img className='absolute z-10 h-[20%]' src="/assets/HeaderNoBG.png" alt="header" />
        <Carousel autoSlide={false}>
          {slides.map((slide, i) => (
            <img key={slide} src={slide}></img>
          ))}
        </Carousel>
      </div>
      <Footer/>
    </div>
  );
}

export default Home