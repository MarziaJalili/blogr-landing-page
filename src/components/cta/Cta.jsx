import Nav from "./Nav";

import { useState } from "react";

const Cta = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  // toggle the menu button
  const handleClick = () => {
    const btn = document.getElementById("menu-btn");
    btn.classList.toggle("open");

    // toggle and animate the nav
    if (isMenuShown) {
      document.querySelector("#menu").classList.add("fade-nav");
      setTimeout(() => {
        setIsMenuShown(false);
      }, 1000);
    } else {
      setIsMenuShown(true);
    }
  };
  return (
    <section
      id="cta"
      className="cta flex  flex-col space-y-12 rounded-bl-[80px] bg-[length:300%] bg-[position:left_50%_top_45%] bg-no-repeat lg:bg-[length:135%] lg:bg-[position:top_50%] text-White-text
       "
    >
      {/* header */}
      <div className="container mx-auto flex items-center px-5 mt-10 space-x-12 max-lg:justify-between lg:px-20">
        <div className="max-lg:flex max-lg:container max-lg:mx-auto max-lg:items-center max-lg:justify-between">
          <img src="./logo.svg" className="max-lg:max-w-16" alt="logo" />

          {/* Hamburger Icon */}
          <button
            aria-label="Toggles the Navigation Menu"
            id="menu-btn"
            className="hamburger absolute right-6 transition-all w-[24px] h-[24px] cursor-pointer lg:hidden focus:outline-none"
            onClick={handleClick}
          >
            <span className="hamburger-top absolute top-0 left-0 w-[24px] h-[2px]   bg-White-text"></span>

            <span className="hamburger-middle translate-y-[7px] absolute top-0 left-0 w-[24px] h-[2px]   bg-White-text"></span>

            <span className="hamburger-bottom  absolute top-0 left-0 w-[24px] h-[2px]   bg-White-text"></span>
          </button>
        </div>

        <Nav />

        <div className="hidden lg:flex space-x-4 ml-auto">
          <button className="btn border-none font-medium">Login</button>
          <button className="btn bg-White-text text-Light-red px-8">
            Sign Up
          </button>
        </div>
      </div>

      {/* heading content */}
      <div className="container mx-auto items-center flex flex-col px-8 pb-30 pt-10 space-y-3 text-White-text lg:my-4">
        <h1 className="text-3xl font-medium text-center px-5 md:text-4xl lg:text-5xl">
          A modern publishing platform
        </h1>
        <p className="text-center px-5 lg:text-lg">
          Grow your audience and build your online brand
        </p>

        {/* buttons */}
        <div className="flex space-x-5 mt-6">
          <a href="#" className="btn text-Light-red bg-White-text">
            Start for Free
          </a>
          <a href="#" className="btn">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
