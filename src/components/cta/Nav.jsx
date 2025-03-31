import { useState } from "react";

const Nav = () => {
  const [isProductShown, setIsProductShown] = useState(false);
  const [isCompanyShown, setIsCompanyShown] = useState(false);
  const [isConnectShown, setIsConnectShown] = useState(false);

  return (
    <ul className="container font-medium flex space-x-6 max-md:text-Very-dark-blue-headings items-center justify-center max-md:space-y-5 max-md:flex-col ">
      <li
        className={`relative max-lg:flex max-lg:flex-col max-lg:w-full max-lg:items-center max-lg:ml-5  max-md:space-y-5`}
      >
        <a
          className={`flex md:w-full space-x-2 cursor-pointer ${
            isProductShown ? "justify-center pl-0" : ""
          }`}
          onClick={() => setIsProductShown((prev) => !prev)}
        >
          <span className="hover:max-md:text-Very-dark-black-blue-footer-background transition-colors">
            Product
          </span>
          <button className="cursor-pointer" aria-label="drop-down-button">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="./icon-arrow-light.svg"
              />
              <img
                className={`${isProductShown ? "transform rotate-180" : ""}`}
                src="./icon-arrow-dark.svg"
                alt="Drop down Arrow"
              />
            </picture>
          </button>
        </a>
        {isProductShown ? (
          <ul
            className={`connect bg-White-text z-1 items-center text-Very-dark-grayish-blue-body-copy lg:absolute top-8  ${
              isCompanyShown ? "-left-14" : ""
            } p-4 pr-6 flex flex-col space-y-2 rounded-lg lg:drop-shadow-xl max-lg:bg-gray-menu max-lg:w-[100%]`}
          >
            <li className="hover:text-Very-dark-black-blue-footer-background transition-colors">
              Overview
            </li>
            <li className="hover:text-Very-dark-black-blue-footer-background transition-colors">
              Pricing
            </li>
            <li className="hover:text-Very-dark-black-blue-footer-background transition-colors">
              Markeetplace
            </li>
            <li className="hover:text-Very-dark-black-blue-footer-background transition-colors">
              Features
            </li>
            <li className="hover:text-Very-dark-black-blue-footer-background transition-colors">
              Integrations
            </li>
          </ul>
        ) : null}
      </li>
      <li
        className={`relative max-lg:flex max-lg:flex-col max-lg:w-full max-lg:items-center max-lg:ml-5 max-md:space-y-5`}
      >
        <a
          className={`flex md:w-full space-x-2 cursor-pointer ${
            isCompanyShown ? "justify-center pl-0" : ""
          }`}
          onClick={() => setIsCompanyShown((prev) => !prev)}
        >
          <span className="hover:max-md:text-Very-dark-black-blue-footer-background transition-colors">
            Company
          </span>
          <button className="cursor-pointer" aria-label="drop-down-button">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="./icon-arrow-light.svg"
              />
              <img
                className={`${isCompanyShown ? "transform rotate-180" : ""}`}
                src="./icon-arrow-dark.svg"
                alt="Drop down Arrow"
              />
            </picture>
          </button>
        </a>
        {isCompanyShown ? (
          <ul className="connect bg-White-text z-1 items-center text-Very-dark-grayish-blue-body-copy lg:absolute top-8 p-4 pr-6 flex flex-col space-y-2 rounded-lg lg:drop-shadow-xl max-lg:bg-gray-menu max-lg:w-[100%]">
            <li className="hover:text-Very-dark-black-blue-footer-background transition-colors">
              About
            </li>
            <li className="hover:text-Very-dark-black-blue-footer-background transition-colors">
              Team
            </li>
            <li className="hover:text-Very-dark-black-blue-footer-background transition-colors">
              Blog
            </li>
            <li className="hover:text-Very-dark-black-blue-footer-background transition-colors">
              Careers
            </li>
          </ul>
        ) : null}
      </li>
      <li
        className={`relative max-lg:flex max-lg:flex-col max-lg:w-full max-lg:items-center max-md:space-y-5`}
      >
        <a
          className={`flex md:w-full space-x-2 cursor-pointer ${
            isConnectShown ? "justify-center pl-0" : ""
          }`}
          onClick={() => setIsConnectShown((prev) => !prev)}
        >
          <span className="hover:max-md:text-Very-dark-black-blue-footer-background transition-colors">
            Connect
          </span>
          <button className="cursor-pointer" aria-label="drop-down-button">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="./icon-arrow-light.svg"
              />
              <img
                className={`${isConnectShown ? "transform rotate-180" : ""}`}
                src="./icon-arrow-dark.svg"
                alt="Drop down Arrow"
              />
            </picture>
          </button>
        </a>
        {isConnectShown ? (
          <ul className="connect bg-White-text z-1 items-center text-Very-dark-grayish-blue-body-copy lg:absolute top-8 p-4 pr-6 flex flex-col space-y-2 rounded-lg lg:drop-shadow-xl max-lg:bg-gray-menu max-lg:w-[100%]">
            <li className="hover:text-Very-dark-black-blue-footer-background transition-colors">
              Contanct
            </li>
            <li className="hover:text-Very-dark-black-blue-footer-background transition-colors">
              Newsletter
            </li>
            <li className="hover:text-Very-dark-black-blue-footer-background transition-colors">
              LinkedIn
            </li>
          </ul>
        ) : null}
      </li>
    </ul>
  );
};

export default Nav;
