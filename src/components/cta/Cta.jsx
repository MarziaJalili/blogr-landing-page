import MobileMenu from "./MobileMenu";
import Nav from "./Nav";

import { useState, useEffect } from "react";

const Cta = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const heading = "A modern publishing platform".split("");
  const headingSpans = heading.map((span, index) => {
    const nums = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    return (
      <span
        style={{ "--i": index + 1, "--j": nums[index] }}
        className={`transform inline-block ${span === " " ? "w-[9px]" : ""}`}
      >
        {span}
      </span>
    );
  });

  // toggle the menu button
  const handleClick = () => {
    const btn = document.getElementById("menu-btn");
    // toggle and animate the nav
    if (isMenuShown) {
      document.querySelector("#menu").classList.add("fade-nav");
      setTimeout(() => {
        setIsMenuShown(false);
        btn.classList.remove("open");
      }, 1000);
    } else {
      setIsMenuShown(true);
      btn.classList.add("open");
    }
  };

  useEffect(() => {
    const handleWindowClick = (event) => {
      const isMenuClicked =
        event.target.id === "menu" || event.target.closest("#menu");

      if (!isMenuClicked) {
        console.log("Window clicked; not on menu.");
      }
    };

    window.addEventListener("click", handleWindowClick);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    <section
      id="cta"
      className="cta flex  flex-col space-y-12 rounded-bl-[80px] bg-[length:300%] bg-[position:left_50%_top_45%] bg-no-repeat lg:bg-[length:135%] lg:bg-[position:top_50%] text-White-text
       "
    >
      {/* header */}
      <div className="relative container flex items-center justify-between mx-auto px-5 mt-10 space-x-12  xl:px-20">
        <div className="max-lg:flex max-lg:container max-lg:mx-auto max-lg:items-center max-lg:justify-between">
          <img src="./logo.svg" className="max-lg:max-w-16" alt="logo" />

          {/* Hamburger Icon */}
          <button
            aria-label="Toggles the Navigation Menu"
            id="menu-btn"
            className="hamburger absolute right-6 transition-all w-[24px] h-[24px] cursor-pointer md:hidden focus:outline-none"
            onClick={handleClick}
          >
            <span className="hamburger-top absolute top-0 left-0 w-[24px] h-[2px]   bg-White-text"></span>

            <span className="hamburger-middle translate-y-[7px] absolute top-0 left-0 w-[24px] h-[2px]   bg-White-text"></span>

            <span className="hamburger-bottom  absolute top-0 left-0 w-[24px] h-[2px]   bg-White-text"></span>
          </button>
        </div>

        <nav className="max-lg:hidden">
          <Nav />
        </nav>

        <div className="hidden md:flex space-x-4 ml-auto">
          <button className="btn border-none font-medium">Login</button>
          <button className="btn bg-White-text text-Light-red px-8 min-w-[130px] transition-colors duration-600 hover:bg-Very-light-red-CTA-hover-background hover:border-Very-light-red-CTA-hover-background hover:text-White-text">
            Sign Up
          </button>
        </div>
        {isMenuShown ? <MobileMenu handleClick={handleClick} /> : null}
      </div>

      {/* heading content */}
      <div className="container mx-auto items-center flex flex-col px-8 pb-30 pt-10 space-y-3 text-White-text lg:my-4">
        <h1 className="relative max-md:hidden text-4xl font-medium text-center px-6 md:text-4xl lg:text-5xl">
          {headingSpans}
        </h1>
        <h1 className="text-3xl md:hidden font-medium text-center md:text-4xl lg:text-5xl">
          A modern publishing platform
        </h1>
        <p className="text-center px-5 lg:text-lg">
          Grow your audience and build your online brand
        </p>

        {/* buttons */}
        <div className="flex space-x-5 mt-6">
          <a
            href="#"
            className="btn text-Light-red bg-White-text transition-colors duration-600 hover:bg-Very-light-red-CTA-hover-background hover:border-Very-light-red-CTA-hover-background hover:text-White-text"
          >
            Start for Free
          </a>
          <a
            href="#"
            className="btn  transition-colors duration-600 hover:bg-White-text hover:text-Light-red"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
