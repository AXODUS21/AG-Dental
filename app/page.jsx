import Carousel from '@components/Carousel'
import Footer from '@components/Footer';
import React from 'react'

const Home = () => {
  const slides = [
    "/assets/client/img-3.jpg",
    "/assets/client/img-2.jpg",
    "/assets/client/img-1.jpg",
    "/assets/client/img-4.jpg",
    "/assets/client/img-5.jpg",
  ]

  return (
    <div>
      <div className="w-full">
        <Carousel autoSlide={true}>
          {slides.map((slide) => (
            <img key={slide} src={slide} alt="slide" />
          ))}
        </Carousel>
      </div>
      
      <Footer/>
    </div>
  );
}

export default Home