"use client";
import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false);


  return (
    <div className="h-16 w-full flex items-center px-4 justify-between bg-secondary">
      <Link href="/" className="flex items-center">
        <img
          className="h-14 rounded-full "
          src="/assets/LogoNoBG.png"
          alt="logo"
        />
        <span className="text-primary font-bold text-2xl font-spartan sm:block hidden pt-2 text-shine">
          AG Dental
        </span>
        <span className="text-primary font-bold text-2xl font-spartan sm:hidden block pt-2 text-shine">
          AG
        </span>
      </Link>

      {/* MOBILE NAV */}
      <div className="font-spartan sm:hidden flex text-primary font-semibold gap-6 pt-2">
        <div id="menuToggle">
          <input
            checked={toggleNav}
            id="checkbox"
            type="checkbox"
            onChange={() => setToggleNav((prev) => !prev)}
          />
          <label
            className="toggle"
            htmlFor="checkbox"
          >
            <div className="bar bar--top"></div>
            <div className="bar bar--middle"></div>
            <div className="bar bar--bottom"></div>
          </label>
        </div>

        <div
          className={`fixed ${toggleNav ? "h-full" : "h-0"} ${
            toggleNav ? "py-20" : "py-0"
          } w-full overflow-hidden left-0 top-16 text-center bg-secondary transition-all duration-1000 z-20 sm:hidden grid`}
        >
          <Link
            onClick={() => setToggleNav(false)}
            href="/"
            className="text-3xl"
          >
            Home
          </Link>
          <Link
            onClick={() => setToggleNav(false)}
            href="/about"
            className="text-3xl"
          >
            About
          </Link>
          <Link
            onClick={() => setToggleNav(false)}
            href="/clients"
            className="text-3xl"
          >
            Clients
          </Link>
          <Link
            onClick={() => setToggleNav(false)}
            href="/contact"
            className="text-3xl"
          >
            Contacts
          </Link>
        </div>
      </div>

      {/* DESKTOP NAV */}
      <div className="font-spartan text-primary font-semibold sm:flex hidden gap-6 pt-2">
        <Link href="/about" className="text-lg">
          About
        </Link>
        <Link href="/clients" className="text-lg">
          Clients
        </Link>
        <Link href="/contact" className="text-lg">
          Contacts
        </Link>
      </div>
    </div>
  );
};

export default Nav;
