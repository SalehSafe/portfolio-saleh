import './Projects.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Daily Tools Hub',
      description: 'A free, open-source collection of daily utility tools built with React, Vite, and Tailwind CSS. Features converters, utilities, health calculators, and fun games - all in one place with a beautiful, intuitive interface.',
      features: [
        'Currency & Unit Converters',
        'Weather Check & Timezone Tools',
        'BMI Calculator',
        'Interactive Games (Snake, Minesweeper, etc.)',
        'Encrypt & Decrypt Tools'
      ],
      tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Free APIs'],
      icon: '🛠️',
      liveLink: 'https://daily-tools-hub-3o1b.vercel.app/',
      githubLink: 'https://github.com/SalehSafe',
      featured: true,
      status: 'live'
    },
    {
      id: 2,
      title: 'Task Manager API',
      description: 'RESTful API for managing tasks with user authentication. Includes CRUD operations, JWT-based authentication, and structured backend architecture demonstrating real-world API design patterns.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
      icon: '📋',
      githubLink: 'https://github.com/SalehSafe',
      status: 'development'
    },
    {
      id: 3,
      title: 'Full Stack Web Apps',
      description: 'Collection of full stack projects using React and Node.js to demonstrate frontend-backend integration, API consumption, and modern deployment workflows.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      icon: '🌐',
      githubLink: 'https://github.com/SalehSafe',
      status: 'development'
    },
    {
      id: 4,
      title: 'Backend Practice Projects',
      description: 'Multiple backend-focused projects built with Node.js and Python to practice API design, database integration, and server-side logic implementation.',
      tech: ['Node.js', 'Python', 'Flask', 'MySQL'],
      icon: '⚙️',
      githubLink: 'https://github.com/SalehSafe',
      status: 'development'
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">
        A showcase of my work, from utility tools to full-stack applications
      </p>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
            <div className="project-image">
              <span className="project-image-icon">{project.icon}</span>
              {project.liveLink && (
                <div className="project-image-overlay">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-preview-btn">
                    View Live Demo
                  </a>
                </div>
              )}
            </div>
            
            <div className="project-content">
              <span className={`project-badge ${project.status}`}>
                {project.status === 'live' ? '🟢 Live' : '🔨 In Development'}
              </span>
              
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              {project.features && (
                <div className="project-features">
                  {project.features.map((feature, idx) => (
                    <span key={idx} className="project-feature">
                      <span className="project-feature-icon">✓</span>
                      {feature}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link project-link-primary">
                    <span>🚀</span> Live Demo
                  </a>
                )}
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link project-link-secondary">
                  <span>💻</span> View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
