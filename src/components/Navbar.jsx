import React, { useEffect, useRef, useState } from "react";
import ButtonV1 from "./ButtonV1";
import ButtonV2 from "./ButtonV2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";
import { useMediaQuery } from 'react-responsive'

export const menuLinks = [
  { id: 1, title: "Home", path: "#home" },
  { id: 2, title: "Services", path: "#services" },
  { id: 3, title: "About", path: "#about" },
  { id: 4, title: "Projects", path: "#projects" },

];

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navRef = useRef(null);
  const tl = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
  const [active, setActive] = useState(null);

  const handleMobileClick = (to) => {
    setActive(to);
    setMenu(false);
  };

  const handleActive = (to) => {
    setActive(to);
  };

  useGSAP(() => {
    if (!navRef.current) return;

    tl.current = gsap.timeline({ paused: true });

    tl.current
      .fromTo(navRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" })
      .from(
        navRef.current.querySelectorAll(".menu-item"),
        {
          x: -60,
          opacity: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.15"
      )
      .from(
        "#menuBtn",
        {
          x: -40,
          opacity: 0,
          duration: 0.3,
          ease: "power3.out",
        },
        "-=0.2"
      );
  }, []);

  useEffect(() => {
    if (!tl.current) return;

    if (menu) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [menu]);

  useEffect(() => {
    if (!isMobile) {
      setMenu(false); 
    }
  }, [isMobile]);

  return (
    <>
      <div className="sm:flex w-full h-[12vh] font-semibold items-center justify-between px-10 lg:px-20 py-2 fixed top-0 z-50 bg-white hidden">
        <div>
          <img src="./icons/LOGO.png" alt="logo" className="hidden lg:block" />
          <img src="./icons/LOGO2.png" alt="logo" className="lg:hidden w-20 h-20 object-scale-down" />
        </div>
        <ul className="flex flex-row gap-5 lg:gap-10 lg:text-lg">
          {menuLinks.map((items, index) => {
            const isActive = active === items.path.replace("#", "");

            return(
              <Link
                className={`${isActive ? "text-primary":"text-textSecondary"} cursor-pointer hover:text-primary`}
                spy={true}
                smooth={true}
                duration={500}
                       
                key={index}
                to={items.path.replace("#", "")}
                onClick={() => handleActive(items.path.replace("#", ""))}
              >
                {items.title}
              </Link>
            )

          })}
        </ul>

        <ButtonV1 title="Contact me" bgcolor="bg-primary" textColour="text-white" />
      </div>

      <div className="flex flex-row items-center justify-between px-5 sm:hidden w-full fixed top-0 bg-white z-50">
        <img src="./icons/LOGO2.png" alt="logo" className="lg:hidden w-20 h-20 object-scale-down" />
        <div
          className="w-10 h-10 bg-primary rounded-md flex items-center justify-center"
          onClick={() => setMenu(!menu)}
        >
          {menu ? (
            <svg
              className="w-8 h-10"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_17_18087)">
                <path
                  d="M18.3002 5.70997C17.9102 5.31997 17.2802 5.31997 16.8902 5.70997L12.0002 10.59L7.11022 5.69997C6.72022 5.30997 6.09021 5.30997 5.70021 5.69997C5.31021 6.08997 5.31021 6.71997 5.70021 7.10997L10.5902 12L5.70021 16.89C5.31021 17.28 5.31021 17.91 5.70021 18.3C6.09021 18.69 6.72022 18.69 7.11022 18.3L12.0002 13.41L16.8902 18.3C17.2802 18.69 17.9102 18.69 18.3002 18.3C18.6902 17.91 18.6902 17.28 18.3002 16.89L13.4102 12L18.3002 7.10997C18.6802 6.72997 18.6802 6.08997 18.3002 5.70997Z"
                  fill="#ffffff"
                />
              </g>
              <defs>
                <clipPath id="clip0_17_18087">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <svg
              className="w-8 h-10"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_17_18053)">
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
          )}
        </div>

        <div
          ref={navRef}
          className={`sm:hidden absolute left-0 top-20 w-full z-50 ${
            menu ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          {menuLinks.map((item, index) => {
            const isActive = active === item.path.replace("#", "");

            return(
               <Link
              key={index}
              to={item.path.replace("#", "")}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className={`menu-item py-2 bg-primary px-4 text-2xl border-b flex items-center justify-between ${isActive ? "text-secondary":"text-white"}`}
              onClick={() => handleMobileClick(item.path.replace("#", ""))}
            >
              {item.title}
              <svg
                className="w-9 h-9 xs:w-12 xs:h-12"
                width="49"
                height="49"
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24.5" cy="24.5" r="24.5" fill={`${isActive ?"#9FD966" :"#ffffff"}`} />
                <g clipPath="url(#clip0_189_90)">
                  <path
                    d="M27.75 16.25L25.9875 18.0125L31.7125 23.75H11.5V26.25H31.7125L25.975 31.9875L27.75 33.75L36.5 25L27.75 16.25Z"
                    fill="#4C2FAD"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_189_90">
                    <rect width="30" height="30" fill="white" transform="translate(9 10)" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            )
           
          })}

          <div id="menuBtn" className="py-2 h-20 flex items-center bg-primary px-4">
            <ButtonV2 title="Contact me" bgcolor="bg-secondary" textColour="text-textPrimary" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
