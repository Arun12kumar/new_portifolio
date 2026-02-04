import React, { useRef } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Service from './components/Service'
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';

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
    <div ref={wrapperRef} className='min-h-screen'>
      <div ref={contentRef}>
        <Navbar/>
        <Hero/>
        <Service/>
      </div>
    </div>
  )
}

export default App