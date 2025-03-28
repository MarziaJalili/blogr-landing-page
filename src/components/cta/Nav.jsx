import { useState } from "react";

const Nav = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <ul className="container font-medium flex space-x-6 max-md:text-Very-dark-blue-headings items-center justify-center max-md:space-y-5 max-md:flex-col ">
      <li>
        <a className="flex max-lg:ml-5 space-x-2 justify-center cursor-pointer md:w-full ">
          <span className="hover:max-md:text-Very-dark-black-blue-footer-background transition-colors">
            Product
          </span>
          <button className="cursor-pointer" aria-label="drop-down-button">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="./icon-arrow-light.svg"
              />
              <img src="./icon-arrow-dark.svg" alt="Drop down Arrow" />
            </picture>
          </button>
        </a>
      </li>

      <li>
        <a className="flex max-lg:ml-5 space-x-2 justify-center cursor-pointer md:w-full">
          <span className="hover:max-md:text-Very-dark-black-blue-footer-background transition-colors">
            Company
          </span>
          <button className="cursor-pointer" aria-label="drop-down-button">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="./icon-arrow-light.svg"
              />
              <img src="./icon-arrow-dark.svg" alt="Drop down Arrow" />
            </picture>
          </button>
        </a>
      </li>
      <li
        className={`relative max-lg:flex max-lg:flex-col max-lg:w-full max-lg:items-center max-md:space-y-5`}
      >
        <a
          className={`flex md:w-full space-x-2 cursor-pointer ${
            isMenuShown ? "justify-center pl-0" : ""
          }`}
          onClick={() => setIsMenuShown((prev) => !prev)}
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
                className={`${isMenuShown ? "transform rotate-180" : ""}`}
                src="./icon-arrow-dark.svg"
                alt="Drop down Arrow"
              />
            </picture>
          </button>
        </a>
        {isMenuShown ? (
          <ul className="connect bg-White-text items-center text-Very-dark-grayish-blue-body-copy lg:absolute top-8 p-4 pr-6 flex flex-col space-y-2 rounded-lg lg:drop-shadow-xl max-lg:bg-gray-menu max-lg:w-[100%]">
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
