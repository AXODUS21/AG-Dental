import Footer from '@components/Footer';
import React from 'react'
import Image from '@node_modules/next/image';
const Contact = () => {
  return (
    <div>
      <Image src={"/assets/LogoNoBG.png"} height={1000} width={1000} alt="logo" className='fixed left-52 rotate-12 z-[-20] opacity-15'/>
      <h1 className="text-center font-spartan text-7xl text-primary p-10">
        Let's Meet!
      </h1>
      <div className="sm:grid-cols-3 grid w-full sm:px-20 px-2 gap-20 mb-20">
        <div className="h-full w-full rounded-lg bg-secondary px-20 py-20">
          <div className="flex justify-center mb-14 relative">
            <img src="/assets/icons/phone.png" className="z-10" alt="phone" />
            <svg
              className="absolute top-[-50px] left-[50px] rotate-180 w-40 h-40"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#F2F4F8"
                d="M45.3,-39.8C58.4,-32.3,68.5,-16.1,63.8,-4.7C59,6.7,39.5,13.3,26.4,18.3C13.3,23.3,6.7,26.5,-1.5,28C-9.7,29.6,-19.5,29.4,-25.4,24.4C-31.4,19.5,-33.5,9.7,-37.3,-3.7C-41,-17.2,-46.4,-34.5,-40.4,-42C-34.5,-49.5,-17.2,-47.3,-0.6,-46.8C16.1,-46.2,32.3,-47.3,45.3,-39.8Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="text-center z-10">
            <h2 className="text-2xl text-primary z-10">Give Us A Call</h2>
            <p className="z-10">0966 997 4595</p>
          </div>
        </div>

        <div className="h-full w-full rounded-lg bg-secondary px-20 py-20">
          <div className="flex justify-center mb-14 relative">
            <img
              src="/assets/icons/location.png"
              className="z-10"
              alt="location"
            />
            <svg
              className="absolute top-[-50px] left-[50px] rotate-180  w-40 h-40"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#F2F4F8"
                d="M45.3,-39.8C58.4,-32.3,68.5,-16.1,63.8,-4.7C59,6.7,39.5,13.3,26.4,18.3C13.3,23.3,6.7,26.5,-1.5,28C-9.7,29.6,-19.5,29.4,-25.4,24.4C-31.4,19.5,-33.5,9.7,-37.3,-3.7C-41,-17.2,-46.4,-34.5,-40.4,-42C-34.5,-49.5,-17.2,-47.3,-0.6,-46.8C16.1,-46.2,32.3,-47.3,45.3,-39.8Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="text-center z-10">
            <h2 className="text-2xl text-primary z-10">We're On The Map</h2>
            <p className="z-10">Purok 4 Brgy. Mangilag Sur Candelaria</p>
          </div>
        </div>

        <div className="h-full w-full rounded-lg bg-secondary px-20 py-20">
          <div className="flex justify-center mb-14 relative">
            <img src="/assets/icons/email.png" className="z-10" alt="phone" />
            <svg
              className="absolute top-[-50px] left-[50px] rotate-180 w-40 h-40"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#F2F4F8"
                d="M45.3,-39.8C58.4,-32.3,68.5,-16.1,63.8,-4.7C59,6.7,39.5,13.3,26.4,18.3C13.3,23.3,6.7,26.5,-1.5,28C-9.7,29.6,-19.5,29.4,-25.4,24.4C-31.4,19.5,-33.5,9.7,-37.3,-3.7C-41,-17.2,-46.4,-34.5,-40.4,-42C-34.5,-49.5,-17.2,-47.3,-0.6,-46.8C16.1,-46.2,32.3,-47.3,45.3,-39.8Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="text-center z-10">
            <h2 className="text-2xl text-primary z-10">Write Us</h2>
            <p className="z-10">example@gmail.com</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact