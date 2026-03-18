import React from 'react'
import ArrowButton from './ArrowButton'

const projects = [
  {
    id: 1,
    tags: ['React', 'Node.js', 'MongoDB'],
    title: 'Full-stack E-commerce Platform',
    description:
      'A complete e-commerce solution with authentication, payment integration, product management, and real-time inventory tracking.',
    imageLeft: true,
  },
  {
    id: 2,
    tags: ['Next.js', 'Tailwind CSS', 'REST API'],
    title: 'Portfolio & Blog Platform',
    description:
      'A modern portfolio and blog platform with CMS integration, SEO optimization, and dynamic content management system.',
    imageLeft: false,
  },
  {
    id: 3,
    tags: ['React', 'Firebase', 'Figma'],
    title: 'Real-time Chat Application',
    description:
      'A full-featured chat app with real-time messaging, file sharing, user presence indicators, and end-to-end encryption.',
    imageLeft: true,
  },
]

const ProjectCard = ({ project }) => (
  <div
    className={`bg-white/10 rounded-2xl p-6 flex flex-col gap-6 items-center
      ${project.imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
  >
    {/* Image placeholder */}
    <div className="w-full lg:w-1/2 bg-white/10 rounded-xl aspect-video flex items-center justify-center min-h-[220px]">
      <span className="text-white/40 font-equitan text-sm">Project Screenshot</span>
    </div>

    {/* Text content */}
    <div className="w-full lg:w-1/2 lg:px-4">
      <div className="flex gap-3 flex-wrap mb-5">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-secondary text-textPrimary font-equitan font-semibold text-sm px-4 py-1.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-2xl font-NeuePlak font-bold text-white mb-3 leading-snug">
        {project.title}
      </h3>
      <p className="text-white/70 font-equitan mb-8 leading-relaxed">{project.description}</p>

      <ArrowButton title="View Details" bg="bg-secondary" text="text-textPrimary" />
    </div>
  </div>
)

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 lg:px-28 bg-primary relative overflow-hidden">
      {/* Background ghost text */}
      <span className="absolute left-0 top-6 text-[80px] lg:text-[130px] font-NeuePlak font-bold text-white/5 select-none pointer-events-none whitespace-nowrap">
        Latest Projects
      </span>

      {/* Header row */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6 relative z-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-0.5 bg-secondary inline-block"></span>
            <span className="text-white/70 font-equitan text-sm">Projects</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-NeuePlak font-bold text-white leading-tight">
            My <span className="text-secondary">Latest Projects</span>
          </h2>
        </div>

        <div className="hidden lg:block">
          <ArrowButton title="View All Projects" bg="bg-secondary" text="text-textPrimary" />
        </div>
      </div>

      {/* Project cards */}
      <div className="flex flex-col gap-6 relative z-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
