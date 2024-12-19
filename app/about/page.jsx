"use client"
import React, { useRef } from 'react'
import Image from '@node_modules/next/image'
import Footer from '@components/Footer'

const About = () => {
  return (
    <div className="sm:pt-0 pt-[3px]">
      <Image
        src={"/assets/LogoNoBG.png"}
        height={1000}
        width={1000}
        alt="logo"
        className="fixed left-52 rotate-12 z-[-20] opacity-15"
      />
      <div className="relative flex items-center mb-20">
        <h1 className="font-spartan sm:text-9xl text-7xl text-primary absolute_center z-10 stroke">
          ABOUT US
        </h1>
        <div className="flex">
          <Image
            className="blur-[2px] sm:block hidden"
            src={"/assets/client/staff2.jpg"}
            width={506}
            height={100}
            alt="staff"
          />
          <Image
            className="blur-[2px]"
            src={"/assets/client/front1.jpg"}
            width={506}
            height={100}
            alt="staff"
          />
          <Image
            className="blur-[2px] sm:block hidden"
            src={"/assets/client/staff1.jpg"}
            width={506}
            height={100}
            alt="staff"
          />
        </div>
      </div>

      <div className="sm:flex grid mb-20 justify-center gap-28">
        <div className="sm:flex grid gap-11">
          <div className="w-80">
            <h1 className="text_primary text-2xl">
              {" "}
              Caring for Smiles, One Patient at a Time
            </h1>
            <p className="mb-20 font-spartan">
              We pride ourselves on creating a welcoming environment where every
              patient feels valued, combining advanced dental care with a
              personal touch.
            </p>
            <button
              className="text_primary bg-secondary px-5 py-3 rounded-3xl"
            >
              Our Services →
            </button>
          </div>
          <div className="w-80">
            <h1 className="text_primary text-2xl">
              Healthy Smiles for All Ages
            </h1>
            <p className="font-spartan">
              From children to adults, we are dedicated to providing dental care
              that fits your family’s needs at every stage of life. Our
              experienced team uses gentle techniques and modern tools to ensure
              every member of your family enjoys a positive dental experience.
            </p>
          </div>
        </div>

        <div className="">
          <Image
            src={"/assets/client/front2.jpg"}
            className="about-img"
            width={300}
            height={300}
            alt="front"
          />
        </div>
      </div>

      

      <div className="sm:flex items-center grid mb-20 p-10">
        <div className="pr-10 mb-20">
          <h1 className="text_primary text-3xl">
            Where Beautiful Smiles Are Made.
          </h1>
          <p className="font-spartan">
            AG Dental is one of the best and most innovative dental clinics in
            the Philippines, offering quality and top-notch dental experience.
            This is where beautiful smiles are made
          </p>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
          <div className="about-details bg-secondary h-96 py-10 px-10">
            <h1 className="mb-10 text_primary text-2xl">
              Brightening Lives, One Smile at a Time
            </h1>
            <p className="font-spartan">
              At AG Dental Clinic, we believe a healthy smile can transform
              lives. That’s why we combine advanced dental techniques with a
              friendly, patient-focused approach to help you achieve lasting
              oral health and a smile you’ll love to share.
            </p>
          </div>
          <div className="about-details bg-secondary h-96 py-10 px-10">
            <h1 className="mb-10 text_primary text-2xl">
              Empowering Smiles, Enriching Lives
            </h1>
            <p className="font-spartan">
              We believe that a beautiful, healthy smile is a cornerstone of
              confidence and well-being. Our mission is to empower patients of
              all ages with personalized care, tailored solutions, and the
              knowledge needed to maintain excellent oral health for life.
            </p>
          </div>
          <div className="about-details bg-secondary h-96 py-10 px-10">
            <h1 className="mb-10 text_primary text-2xl">
              Creating Smiles That Shine Bright
            </h1>
            <p className="font-spartan">
              At AG Dental Clinic, we’re not just focused on treating
              teeth—we’re focused on improving lives. With a blend of artistry,
              science, and compassionate care, we help you achieve the smile
              you’ve always dreamed of.
            </p>
          </div>
          <div className="about-details bg-secondary h-96 py-10 px-10">
            <h1 className="mb-10 text_primary text-2xl">
              Exceptional Care with a Personal Touch
            </h1>
            <p className="font-spartan">
              At AG Dental Clinic, we know that every smile is unique, and so is
              every patient. Our team takes the time to understand your needs,
              crafting tailored treatment plans that prioritize your comfort,
              health, and happiness.
            </p>
          </div>
        </div>
      </div>

      

      <Footer />
    </div>
  );
}

export default About