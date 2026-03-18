import React from 'react'

const education = [
  { school: 'Your University', degree: 'B.Tech in Computer Science', period: '2019 – 2023' },
  { school: 'Your College', degree: 'Higher Secondary (Science)', period: '2017 – 2019' },
  { school: 'Your School', degree: 'High School', period: '2007 – 2017' },
]

const work = [
  { company: 'Company Name', role: 'Full-stack Developer', period: '2023 – Present' },
  { company: 'Freelance', role: 'Web Developer', period: '2022 – 2023' },
  { company: 'Internship', role: 'Frontend Developer', period: '2022' },
]

const GradIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
    <path d="M20 6h-2.18c.07-.44.18-.88.18-1.36C18 2.99 16.66 2 15 2H9C7.34 2 6 2.99 6 4.64c0 .48.11.92.18 1.36H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM9 4.64C9 4.29 9.44 4 10 4h4c.56 0 1 .29 1 .64 0 .36-.44.64-1 .64H10C9.44 5.28 9 5 9 4.64zM20 20H4V8h16v12z" />
  </svg>
)

const Card = ({ icon, title, items }) => (
  <div className="flex-1 bg-[#f3f3f6] rounded-2xl p-8">
    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
      <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shrink-0">
        {icon}
      </div>
      <span className="text-primary font-NeuePlak font-bold text-xl">{title}</span>
    </div>
    <div className="flex flex-col gap-0">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-start justify-between py-5 border-b border-gray-200 last:border-b-0"
        >
          <div>
            <div className="font-equitan font-bold text-textPrimary text-base lg:text-lg">
              {item.school || item.company}
            </div>
            <div className="text-textSecondary font-equitan text-sm mt-0.5">
              {item.degree || item.role}
            </div>
          </div>
          <span className="bg-white rounded-lg px-4 py-2 text-textSecondary font-equitan text-sm whitespace-nowrap ml-4 shrink-0">
            {item.period}
          </span>
        </div>
      ))}
    </div>
  </div>
)

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 lg:px-28 bg-background relative overflow-hidden">
      {/* Background ghost text */}
      <span className="absolute left-0 top-6 text-[80px] lg:text-[130px] font-NeuePlak font-bold text-textPrimary/5 select-none pointer-events-none whitespace-nowrap">
        Education Work Ex...
      </span>

      {/* Heading */}
      <div className="text-center mb-12 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="w-6 h-0.5 bg-primary inline-block"></span>
          <span className="text-textSecondary font-equitan text-sm">Education &amp; Work</span>
        </div>
        <h2 className="text-3xl lg:text-5xl font-NeuePlak font-bold text-textPrimary leading-tight">
          My <span className="text-primary">Education &amp; Work</span> Experience
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row gap-6 relative z-10">
        <Card icon={<GradIcon />} title="Education" items={education} />
        <Card icon={<BriefcaseIcon />} title="Work Experience" items={work} />
      </div>
    </section>
  )
}

export default Experience
