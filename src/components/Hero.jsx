import React from "react";
import logo from "../assets/images/logo.svg";

function Hero() {
  return (
    // Hero Section
    <section id="hero">
      {/* Hero Container */}
      <div className="container  mx-auto px-6 py-12 text-xl">
        {/* Menu and Logo Container */}
        <nav className="flex items-center justify-between font-bold text-white">
          {/* Logo */}
          <img src={logo} alt="logo" />
          {/*Menu*/}
          <div className="hidden h-10 text-bold font-alata md:flex md:space-x-8">
            {/* About */}
            <div className="group">
              <a href="#">About</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            {/* Careers */}
            <div className="group">
              <a href="#">April</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            {/* Events */}
            <div className="group">
              <a href="https://www.youtube.com/">YouTube</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            {/* Products */}
            <div className="group">
              <a href="#">Products</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            {/* Supportout */}
            <div className="group">
              <a href="#">Support</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50 "></div>
            </div>
          </div>
          {/* Hamburger */}
        </nav>
        {/* Mobile Menu */}

        <div className=" max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
          Impressive Experiences That Deliver
        </div>
      </div>
    </section>
  );
}

export default Hero;
