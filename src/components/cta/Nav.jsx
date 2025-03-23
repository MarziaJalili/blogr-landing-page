import { useState } from "react";

const Nav = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <nav className="max-lg:hidden">
      <ul className="container font-medium flex space-x-6">
        <li>
          <a className="flex space-x-2 cursor-pointer">
            <span>Product</span>
            <button>
              <img src="./icon-arrow-light.svg" alt="down-arrow" />
            </button>
          </a>
        </li>
        <li>
          <a className="flex space-x-2 cursor-pointer">
            <span>Company</span>
            <button>
              <img src="./icon-arrow-light.svg" alt="down-arrow" />
            </button>
          </a>
        </li>
        <li className="relative">
          <a
            className="flex space-x-2 cursor-pointer"
            onClick={() => setIsMenuShown((prev) => !prev)}
          >
            <span>Connect</span>
            <button>
              <img src="./icon-arrow-light.svg" alt="down-arrow" />
            </button>
          </a>
          {isMenuShown ? (
            <ul className="bg-White-text text-Very-dark-grayish-blue-body-copy absolute top-8 p-4 pr-6 flex flex-col space-y-2 rounded-lg drop-shadow-xl">
              <li>Contanct</li>
              <li>Newsletter</li>
              <li>LinkedIn</li>
            </ul>
          ) : null}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
