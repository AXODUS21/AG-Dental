"use client"
import Footer from '@components/Footer'
import Link from '@node_modules/next/link';
import {useEffect, useRef} from 'react'
import Image from '@node_modules/next/image';

const Clients = () => {
   const scrollContainerRef = useRef(null);

     useEffect(() => {
       const container = scrollContainerRef.current;

       if (container) {
         const scrollSpeed = 1; // Adjust scrolling speed (pixels per frame)
         let animationFrame;

         // Duplicate the content to make the scrolling seamless
         const originalContent = container.innerHTML;
         container.innerHTML += originalContent;

         const autoScroll = () => {
           container.scrollLeft += scrollSpeed;
           // Reset scroll to the start when reaching the midpoint
           if (container.scrollLeft >= container.scrollWidth / 2) {
             container.scrollLeft = 0;
           }
           animationFrame = requestAnimationFrame(autoScroll);
         };

         animationFrame = requestAnimationFrame(autoScroll);

         // Cleanup on component unmount
         return () => cancelAnimationFrame(animationFrame);
       }
     }, []);

  return (
    <div>
      <Image src={"/assets/LogoNoBG.png"} height={1000} width={1000} alt="logo" className='fixed left-52 rotate-12 z-[-20] opacity-15'/>
      <h1 className="text-center font-spartan text-5xl pt-10 text-primary mb-20">
        Our Clients
      </h1>

      <div className="mb-20">
        <p className="text-center text_primary opacity-80">
          Service With A Smile
        </p>
        <h1 className="text-center text_primary text-2xl font-semibold mb-2">
          Thank You For Trusting Us
        </h1>
        <div className="flex justify-center select-none mb-20">
          <div
            ref={scrollContainerRef}
            className="flex justify-center overflow-x-hidden gap-5"
            style={{ scrollBehavior: "smooth" }}
          >
            <img
              className="h-[400px]"
              src="/assets/client/client1.png"
              alt="client"
            />
            <img
              className="h-[400px]"
              src="/assets/client/client8.png"
              alt="client"
            />
            <img
              className="h-[400px]"
              src="/assets/client/client3.png"
              alt="client"
            />
            <img
              className="h-[400px]"
              src="/assets/client/client4.png"
              alt="client"
            />
            <img
              className="h-[400px]"
              src="/assets/client/client2.png"
              alt="client"
            />
            <img
              className="h-[400px]"
              src="/assets/client/client6.png"
              alt="client"
            />
            <img
              className="h-[400px]"
              src="/assets/client/client7.png"
              alt="client"
            />
            <img
              className="h-[400px]"
              src="/assets/client/client8.png"
              alt="client"
            />
          </div>
        </div>

        <div className="sm:flex grid justify-center gap-20">
          <div className="">
            <img className='rounded-xl h-96' src="/assets/client/client5.png" alt="teeth" />
          </div>
          <div className="w-80">
            <p className='text_primary mb-5'>Quality And Top-Notch Dental Experience</p>
            <h2 className='text-3xl font-spartan mb-3 text-zinc-800'>Where Beautiful Smiles Are Made</h2>
            <p className='mb-10 font-spartan'>
              At AG Dental Clinic, we are committed to providing
              comprehensive dental care to our patients. We specialize in a wide
              range of dental treatments, from routine check-ups to complex
              procedures, using state of the art technology to ensure your
              safety and comfort at all times.
            </p>
            <Link href="/contact" className='rounded-full bg-secondary px-5 py-3'>Contact Us →</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Clients