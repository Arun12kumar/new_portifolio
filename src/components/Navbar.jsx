import React from "react";
import ButtonV1 from "./ButtonV1";

const Navbar = () => {
  return (
    <>
      <div className="sm:flex w-full h-[12vh] font-semibold items-center justify-between px-10 lg:px-20 py-2 fixed top-2 z-50 bg-white hidden">
        <div>
          <img src="./icons/LOGO.png" alt="logo" className="hidden lg:block" />
          <img src="./icons/LOGO2.png" alt="logo" className="lg:hidden w-20 h-20 object-scale-down" />
        </div>
        <ul className="flex flex-row gap-5 lg:gap-10 text-textSecondary lg:text-lg">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Projects</li>
          <li>Testimonials</li>
        </ul>
        <ButtonV1 title="Contact me" bgcolor="bg-primary" textColour="text-white" />
      </div>

      <div className="flex flex-row items-center justify-between px-5 xs:hidden">
        <img src="./icons/LOGO2.png" alt="logo" className="lg:hidden w-20 h-20 object-scale-down" />
        <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
          <svg className="w-8 h-10" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_17_18053)">
              <path
                d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"
                fill="#ffffff"
              />
            </g>
            <defs>
              <clipPath id="clip0_17_18053">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Navbar;
