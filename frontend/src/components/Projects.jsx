import './Projects.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Task Manager API',
      description: 'RESTful API for managing tasks with user authentication. Includes CRUD operations, JWT-based authentication, and structured backend architecture. Built to demonstrate backend best practices and real-world API design.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
      link: 'https://github.com/SalehSafe'
    },
    {
      id: 2,
      title: 'Full Stack Web Applications',
      description: 'Collection of full stack projects using React and Node.js to demonstrate frontend-backend integration, API consumption, and deployment workflows.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      link: 'https://github.com/SalehSafe'
    },
    {
      id: 3,
      title: 'Backend Practice Projects',
      description: 'Multiple backend-focused projects built with Node.js and Python to practice API design, database integration, and server-side logic.',
      tech: ['Node.js', 'Python', 'Flask', 'MySQL'],
      link: 'https://github.com/SalehSafe'
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
