import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center p-12 pb-20 bg-Very-dark-black-blue-footer-background flex-col space-y-12 rounded-tr-[100px] mt-20 md:flex-row md:items-start md:justify-start md:space-x-30 lg:px-40 md:pb-0">
      <img src="./logo.svg" alt="logo image" />

      <div className="flex flex-col space-y-5 items-center justify-center lg:items-start">
        <h3 className="text-White-text">Product</h3>
        <ul className="text-Grayish-blue-footer-text flex flex-col items-center justify-center space-y-1 lg:items-start">
          <li>
            {" "}
            <a href="#">Overview</a>
          </li>
          <li>
            {" "}
            <a href="#">Pricing</a>
          </li>
          <li>
            {" "}
            <a href="#">Marketeplace</a>
          </li>
          <li>
            {" "}
            <a href="#">Features</a>
          </li>
          <li>
            {" "}
            <a href="#">Integations</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col space-y-5 items-center justify-center lg:items-start">
        <h3 className="text-White-text">Company</h3>
        <ul className="text-Grayish-blue-footer-text flex flex-col items-center justify-center space-y-1 lg:items-start">
          <li>
            {" "}
            <a href="#">About</a>
          </li>
          <li>
            {" "}
            <a href="#">Team</a>
          </li>
          <li>
            {" "}
            <a href="#">Blog</a>
          </li>
          <li>
            {" "}
            <a href="#">Careers</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col space-y-5 items-center justify-center lg:items-start">
        <h3 className="text-White-text">Product</h3>
        <ul className="text-Grayish-blue-footer-text flex flex-col items-center justify-center space-y-1 lg:items-start">
          <li>
            {" "}
            <a href="#">Contact</a>
          </li>
          <li>
            {" "}
            <a href="#">Newsletterg</a>
          </li>
          <li>
            {" "}
            <a href="#">LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
