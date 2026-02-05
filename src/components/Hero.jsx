import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[88vh] relative overflow-hidden flex flex-col gap-2 xs:gap-3 items-center xs:pt-10 mt-10 sm:mt-20">
      <div className="text-lg xs:text-xl lg:text-3xl mb-3 xs:mb-6 flex flex-row items-center gap-3">
        <div className="w-6 h-1 bg-primary"></div> <p>Hello</p>
      </div>
      <div className="font-radhiumz text-5xl xs:text-4xl sm:text-5xl lg:text-7xl xl:text-8xl flex flex-row gap-6 xs:gap-13">
        <p>I'm</p> <p className="text-primary underline">Arun,</p>
      </div>
      <h1 className="font-radhiumz text-4xl xs:text-4xl sm:text-5xl lg:text-7xl xl:text-8xl hidden xs:block">Full-stack Developer</h1>
      <h1 className="font-radhiumz text-5xl xs:text-4xl sm:text-5xl lg:text-7xl xl:text-8xl xs:hidden">Full-stack</h1>
      <h1 className="font-radhiumz text-5xl xs:text-4xl sm:text-5xl lg:text-7xl xl:text-8xl xs:hidden">Developer</h1>
      <svg
        className="absolute -bottom-1 xs:-bottom-[35%] left-[45%] -translate-x-1/2 object-contain w-[80%] h-[80%]"
        width="374"
        height="400"
        viewBox="0 0 374 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.85904 41.5003C-5.4135 21.2988 9.55587 0 31.0266 0H218.284C231.281 0 242.898 8.10746 247.382 20.3067L371.597 358.307C379.033 378.541 364.057 400 342.499 400H152.707C139.634 400 127.967 391.8 123.539 379.5L1.85904 41.5003Z"
          fill="#4C2FAD"
        />
      </svg>
      <img
        src="./images/arun_photo.png"
        alt="person_img"
        className="object-contain w-[90%] h-[90%] absolute -bottom-8 xs:-bottom-38 left-1/2 -translate-x-1/2"
      />
      <div className="absolute bottom-20 bg-white rounded-full py-1 px-1 flex flex-row gap-4 items-center">
        <button className=" xs:text-3xl px-2 xs:px-3 xs:py-2 rounded-full font-equitan font-semibold cursor-pointer bg-primary text-white w-32 xs:w-52 h-12 xs:h-16 flex flex-row items-center justify-between">
           <p className="pl-2 xs:pl-4">Portfolio</p>
          <svg className="w-9 h-9 xs:w-12 xs:h-12" width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24.5" cy="24.5" r="24.5" fill="#9FD966" />
            <g clipPath="url(#clip0_189_90)">
              <path
                d="M27.75 16.25L25.9875 18.0125L31.7125 23.75H11.5V26.25H31.7125L25.975 31.9875L27.75 33.75L36.5 25L27.75 16.25Z"
                fill="#323232"
              />
            </g>
            <defs>
              <clipPath id="clip0_189_90">
                <rect width="30" height="30" fill="white" transform="translate(9 10)" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button className="xs:text-3xl px-4 py-2 rounded-full font-equitan font-semibold cursor-pointer border-3 border-black text-black w-32 xs:w-44 h-12 xs:h-16">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Hero;
