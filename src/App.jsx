import React, { useRef } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import About from "./components/About";
import Footer from "./components/Footer";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const labels = [
  { id: 1, title: "Web design" },
  { id: 2, title: "App design" },
  { id: 3, title: "Figma design" },
  { id: 4, title: "Nextjs" },
  { id: 5, title: "Nodejs " },
  { id: 6, title: "React" },
];

const App = () => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1.2,
      effects: true,
    });
  }, []);

  return (
    <>
      <Navbar />

      <div ref={wrapperRef} className="overflow-hidden">
        <div ref={contentRef} className="min-h-screen">
          <Hero />
          <div className="h-14 bg-secondary overflow-hidden flex items-center">
            <div className="flex flex-row gap-5 animate-marquee whitespace-nowrap">
              {[...labels, ...labels].map((item, index) => (
                <div key={index} className="flex flex-row items-center gap-5 h-full">
                  <h1 className="text-3xl font-radhiumz">{item.title}</h1>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 12C15.7048 8.29516 18 0 18 0C18 0 20.2952 8.29516 24 12C27.7048 15.7048 36 18 36 18C36 18 27.7048 20.2952 24 24C20.2952 27.7048 18 36 18 36C18 36 15.7048 27.7048 12 24C8.29516 20.2952 0 18 0 18C0 18 8.29516 15.7048 12 12Z"
                      fill="#1E1E1E"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
          <Service />
          <About />
          <div className="h-14 bg-secondary overflow-hidden flex items-center">
            <div className="flex flex-row gap-5 animate-marquee whitespace-nowrap">
              {[...labels, ...labels].map((item, index) => (
                <div key={index} className="flex flex-row items-center gap-5 h-full">
                  <h1 className="text-3xl font-radhiumz">{item.title}</h1>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 12C15.7048 8.29516 18 0 18 0C18 0 20.2952 8.29516 24 12C27.7048 15.7048 36 18 36 18C36 18 27.7048 20.2952 24 24C20.2952 27.7048 18 36 18 36C18 36 15.7048 27.7048 12 24C8.29516 20.2952 0 18 0 18C0 18 8.29516 15.7048 12 12Z"
                      fill="#1E1E1E"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
          <Footer />
          <div className="h-15"></div>
        </div>
      </div>
    </>
  );
};

export default App;
