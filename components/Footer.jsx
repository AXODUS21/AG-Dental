import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-stone-950 text-white h-fit p-12">
      <div className="border-b-2 border-b-zinc-800 sm:flex grid sm:gap-20 gap-0 justify-between">
        <div className="">
          <div className="border-b-2 sm:w-fit w-full text-center pb-5">
            <div className="flex justify-center w-full">
              <img
                src="/assets/HeaderNoBG.png"
                alt="header"
                className="h-32 flex justify-center"
              />
            </div>
            <div className="font-bold font-spartan">AG DENTAL</div>
            <div className="font-spartan">
              MON-SAT 9:00 AM - 5:00 PM SUNDAY 1:00 PM - 5:00 PM
            </div>
          </div>
          <div className="pt-5 mb-10">
            <div className="socials mb-10">
              <Link href="https://www.facebook.com/profile.php?id=61563081832171" target='_blank'>
                <img src="/assets/icons/facebook.png" alt="facebook" />
              </Link>
            </div>
            <p className="font-spartan sm:w-[18svw] w-auto">
              Purok 4 Brgy. Mangilag Sur, Candelaria, Philippines, 4323
            </p>
          </div>
        </div>

        <div className="pt-7 w-9/12 grid grid-cols-2 font-spartan h-fit sm:gap-60 gap-10">
          <div className="grid">
            <h1 className="text-xl mb-2 font-bold">Services</h1>
            <div className="grid sm:grid-cols-2 grid-cols-1 pb-10 sm:w-[35vw] w-full">
              <p>Dental Consultation</p>
              <p>Oral Prophylaxis {"(Cleaning)"}</p>
              <p>Cosmetic Restoration</p>
              <p>Tooth Filling</p>
              <p>Tooth Extraction</p>
              <p>Root Canal Therapy</p>
              <p>Wisdom Tooth Removal</p>
              <p>Apicoectomy</p>
              <p>Gingivectomy</p>
              <p>Teeth Whitening</p>
              <p>Veneers</p>
              <p>Gum Recontouring</p>
              <p>Orthodontic Treatment {"(Braces)"}</p>
              <p>Retainers</p>
              <p>Removable Partial Dentures</p>
              <p>Complete Dentures</p>
              <p>Jacket Crowns & Fixed Bridge</p>
              <p>Flouride Treatment</p>
              <p>Pit & Fissure Sealant</p>
              <p>Space Maintainers</p>
              <p>Strip Off Crown</p>
              <p>Mothguard / Nightguard</p>
              <p>Periapical Xray</p>
            </div>
          </div>

          <div className="grid h-fit">
            <h1 className="text-xl font-bold mb-2">Quick Links</h1>
            <div className="grid">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/appointment">Appointment</Link>
              <Link href="/contact">Contacts</Link>
            </div>
          </div>
        </div>
      </div>
      <p className="font-spartan pt-3 inline-block mr-4 opacity-70">
        @ 2024 All Rights Reserved.
      </p>
      <a
        href="https://axelleroshportfolio.netlify.app/"
        target="_blank"
        className="font-spartan inline-block opacity-70"
      >
        XellTech
      </a>
    </div>
  );
}

export default Footer