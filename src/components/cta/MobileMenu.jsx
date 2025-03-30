import Nav from "./Nav";

const MobileMenu = ({ handleClick }) => {
  return (
    <nav
      id="menu"
      className="md:hidden z-1 text-lg bg-White-text flex flex-col justify-center items-center px-6 py-8 space-y-6 absolute top-15 left-6 right-6 drop-shadow-md rounded-lg"
    >
      <Nav />
      <div className="lg:flex pt-4 flex flex-col border-t-1 w-full border-gray-200 ">
        <button
          onClick={() => handleClick((prev) => !prev)}
          className="btn border-none  text-Very-dark-blue-headings font-medium hover:max-md:text-Very-dark-black-blue-footer-background transition-colors"
        >
          Login
        </button>
        <button
          onClick={() => handleClick((prev) => !prev)}
          className="btn btn-gradient px-8"
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default MobileMenu;
