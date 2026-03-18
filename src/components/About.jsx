import React from 'react'
import ArrowButton from './ArrowButton'

const About = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-28 bg-background relative overflow-hidden">
      {/* Background ghost text */}
      <span className="absolute right-0 top-8 text-[100px] lg:text-[160px] font-NeuePlak font-bold text-textPrimary/5 select-none pointer-events-none whitespace-nowrap leading-none">
        About Me
      </span>

      <div className="flex flex-col lg:flex-row gap-10 items-center relative z-10">

        {/* ── LEFT: Experience Card ── */}
        <div className="w-full lg:w-[42%] flex-shrink-0">
          <div className="bg-primary rounded-2xl relative overflow-hidden" style={{ minHeight: '440px' }}>

            {/* Vertical name strip on the left */}
            <div className="absolute left-0 top-0 bottom-0 w-10 flex items-center justify-center">
              <span
                className="font-NeuePlak font-bold text-white tracking-[0.25em] uppercase whitespace-nowrap select-none"
                style={{
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                  fontSize: '13px',
                  letterSpacing: '0.3em',
                }}
              >
                ARUN AKHIL
              </span>
            </div>

            {/* Giant number — fills the card */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ paddingLeft: '40px', paddingBottom: '64px' }}
            >
              <span
                className="font-NeuePlak font-bold text-white leading-none select-none"
                style={{ fontSize: 'clamp(160px, 22vw, 280px)' }}
              >
                3
              </span>
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-0 left-10 right-0 flex items-center justify-center py-5">
              <span className="text-white font-equitan font-semibold text-lg lg:text-xl">
                Years of Experience
              </span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: About text ── */}
        <div className="w-full lg:w-[58%]">

          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-0.5 bg-primary inline-block"></span>
            <span className="text-textSecondary font-equitan text-sm">About Me</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-NeuePlak font-bold text-textPrimary mb-5 leading-tight">
            Who is{' '}
            <span className="text-primary">Arun Akhil?</span>
          </h2>

          <p className="text-textSecondary font-equitan leading-relaxed mb-8 max-w-lg">
            I'm a passionate Full-stack Developer based in Kochi, Kerala, specializing in
            building high-performance web applications. With expertise in React, Node.js,
            and modern web technologies, I craft seamless digital experiences from concept
            to deployment.
          </p>

          {/* Stats */}
          <div className="flex gap-12 mb-10">
            <div>
              <div className="text-4xl font-NeuePlak font-bold text-textPrimary">20+</div>
              <div className="text-textSecondary font-equitan text-sm mt-1">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-NeuePlak font-bold text-textPrimary">10+</div>
              <div className="text-textSecondary font-equitan text-sm mt-1">Technologies Mastered</div>
            </div>
          </div>

          {/* ── Download CV button + signature ── */}
          <div className="flex items-center gap-6 flex-wrap">
            <ArrowButton title="Download CV" href="/Arun_Akhil_CV.pdf" download />
            <span className="font-radhiumz text-2xl text-textPrimary">Arun Akhil</span>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
