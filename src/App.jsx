import React, { useRef } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Service from './components/Service'
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import About from './components/About';
import Footer from './components/Footer';

gsap.registerPlugin(useGSAP,ScrollTrigger, ScrollSmoother);

const App = () => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);


  useGSAP(()=>{
    ScrollSmoother.create({
      wrapper:wrapperRef.current,
      content:contentRef.current,
      smooth:1.2,
      effects:true
    })

  },[])

  return (
    <>
    <Navbar/>

    <div ref={wrapperRef} className='overflow-hidden'>
      <div ref={contentRef} className='min-h-screen'>
        <Hero/>
        <Service/>
        <About/>
        <Footer/>
        <div className='h-15'></div>
      </div>
    </div>
    </>
  )
}

export default App