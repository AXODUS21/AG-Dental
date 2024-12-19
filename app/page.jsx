import Carousel from '@components/Carousel'
import React from 'react'
import Image from '@node_modules/next/image';
import Footer from '@components/Footer';
const Home = () => {
  const slides = [
     "/assets/client/img-1.jpg",
     "/assets/client/img-2.jpg",
     "/assets/client/img-3.jpg",
     "/assets/client/img-4.png",
  ];

  return (
    <div>
      <div className="w-full relative mb-20">
        <Image
                src={"/assets/LogoNoBG.png"}
                height={1000}
                width={1000}
                alt="logo"
                className="fixed left-52 rotate-12 z-[-20] opacity-15"
      />
        <img
          className="absolute z-10 h-[20%]"
          src="/assets/HeaderNoBG.png"
          alt="header"
        />
        <Carousel autoSlide={true}>
          {slides.map((slide, i) => (
            <img key={slide} src={slide}></img>
          ))}
        </Carousel>
      </div>

      <div>
        <h1 className="text-center text_primary text-4xl">
          We Offer A Wide Range Of Dental Services
        </h1>
        <div className="grid sm:grid-cols-3 grid-cols-1 p-20 font-spartan">
          <div className="grid">
            <div className="mb-5">
              <h1 className="text_primary text-2xl">General Services:</h1>
              <ul className="list-disc pl-5">
                <li>Dental Consultation</li>
                <li>Oral Prophylaxis {"(Cleaning)"}</li>
                <li>Cosmetic Restoration</li>
                <li>Tooth Filling</li>
                <li>Tooth Extraction</li>
                <li>Root Canal Therapy</li>
              </ul>
            </div>
            <div className="mb-5">
              <h1 className="text_primary text-2xl">Oral Surgery:</h1>
              <ul className="list-disc pl-5">
                <li>Wisdom Tooth Removal</li>
                <li>Apicoectomy</li>
                <li>Gingivectomy</li>
              </ul>
            </div>
          </div>
          <div className="grid">
            <div className="mb-5">
              <h1 className="text_primary text-2xl">Cosmetic Dentistry:</h1>
              <ul className="list-disc pl-5">
                <li>Teeth Whitening</li>
                <li>Veneers</li>
                <li>Gum Recontouring</li>
              </ul>
            </div>
            <div className="mb-5">
              <h1 className="text_primary text-2xl">Orthodontics:</h1>
              <ul className="list-disc pl-5">
                <li>Orthodontic Treatment {"(Braces)"}</li>
                <li>Retainers</li>
              </ul>
            </div>
            <div className="mb-5">
              <h1 className="text_primary text-2xl">Prosthodontics:</h1>
              <ul className="list-disc pl-5">
                <li>Removable Partial Dentures</li>
                <li>Complete Dentures</li>
                <li>Jacket Crowns & Fixed Bridge</li>
              </ul>
            </div>
          </div>
          <div className="grid">
            <div className="mb-5">
              <h1 className="text_primary text-2xl">Pediatric Dentistry:</h1>
              <ul className="list-disc pl-5">
                <li>Flouride Treatment</li>
                <li>Pit & Fissure Sealant</li>
                <li>Space Maintainers</li>
                <li>Dental Extractions</li>
                <li>Strip Off Crown</li>
                <li>Dental Dentures</li>
              </ul>
            </div>
            <div className="mb-5">
              <h1 className="text_primary text-2xl">Other Services:</h1>
              <ul className="list-disc pl-5">
                <li>Mothguard / Nightguard</li>
                <li>Periapical Xray</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home