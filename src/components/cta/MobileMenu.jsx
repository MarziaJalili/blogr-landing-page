import Nav from "./Nav";
import { useState } from "react";

const MobileMenu = () => {
  return (
    <nav
      id="menu"
      className="md:hidden text-lg bg-White-text flex flex-col justify-center items-center px-6 py-8 space-y-6 absolute top-15 left-6 right-6 drop-shadow-md rounded-lg"
    >
      <Nav />
      <div className="lg:flex pt-4 flex flex-col border-t-1 w-full border-gray-200 ">
        <button className="btn border-none  text-Very-dark-blue-headings font-medium hover:max-md:text-Very-dark-black-blue-footer-background transition-colors">
          Login
        </button>
        <button className="btn btn-gradient px-8">Sign Up</button>
      </div>
    </nav>
  );
};

export default MobileMenu;
