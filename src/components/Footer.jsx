import React from "react";
import { menuLinks } from "./Navbar";

const Footer = () => {
  return (
    <div className=" h-[100vh] mx-20 py-5 flex flex-col gap-8">
      <div className="flex flex-row justify-between items-center py-8">
        <div className="text-5xl font-NeuePlak flex flex-row gap-4">
          <h1 className="text-textPrimary">Let's</h1>
          <h1 className="text-secondary">Connect</h1>
          <h1 className="text-textPrimary">there</h1>
        </div>
        <div className="bg-textPrimary flex flex-row items-center rounded-full gap-3 pl-2">
                        <svg
              className="w-9 h-9 xs:w-12 xs:h-12"
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
          <button className=" xs:text-2xl px-2 xs:px-3 xs:py-2 rounded-full font-equitan font-semibold cursor-pointer bg-primary text-white w-32 xs:w-52 h-12 xs:h-16 flex flex-row items-center justify-center">

            <p className="">Hire Me Now</p>
          </button>
        </div>
      </div>

      <div className="flex flex-row w-full h-[60%] border-t border-b border-textSecondary items-start py-12">
        <div className="bg-white w-[40%]">1</div>
        <div className="bg-white w-[30%] flex flex-col items-center justify-center gap-6">
          <h1 className="font-NeuePlak text-xl text-primary">Navigations</h1>
          <ul className="flex flex-col gap-4">
            {menuLinks.map((item,index)=>(
              <li key={index} className="text-lg text-textSecondary">{item.title}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white w-[30%] flex flex-col items-center justify-center gap-6">
          <h1 className="font-NeuePlak text-xl text-primary">Contacts</h1>
          <ul className="flex flex-col gap-4 text-lg text-textSecondary w-3/4">
            <li className="wrap-break-word">+91 6282717263</li>
            <li className="wrap-break-word">arunakhil978@gmail.com</li>
            <li className="wrap-break-word">https://www.linkedin.com/in/arun-kumar-a-a0483a23a/</li>
            <li className="wrap-break-word">Kochi,Ernakulam,Kerala,India, pincode:682008</li>
          </ul>
        </div>
       
        <div className="bg-white w-[30%] flex flex-col gap-6 items-center">
          <h1 className="font-NeuePlak text-xl text-primary">Get Latest Information</h1>
          <div className="flex flex-row bg-primary w-[80%] items-center gap-5 rounded-lg">
            <input type="text" placeholder="Email" className="bg-gray-100 text-textSecondary border-none outline-none h-12 w-3/4 px-3 rounded-l-md"/>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_17_17308)">
              <path d="M3.4 20.4L20.85 12.92C21.66 12.57 21.66 11.43 20.85 11.08L3.4 3.59999C2.74 3.30999 2.01 3.79999 2.01 4.50999L2 9.11999C2 9.61999 2.37 10.05 2.87 10.11L17 12L2.87 13.88C2.37 13.95 2 14.38 2 14.88L2.01 19.49C2.01 20.2 2.74 20.69 3.4 20.4Z" fill="#ffffff"/>
              </g>
              <defs>
              <clipPath id="clip0_17_17308">
              <rect width="24" height="24" fill="white"/>
              </clipPath>
              </defs>
            </svg>

          </div>
        </div>

      </div>
      <div className="flex flex-row gap-2 text-2xl text-textPrimary">
        <p>Copyright © 2026</p>
        <p className="text-primary">Arun.</p>
        <p>All rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
