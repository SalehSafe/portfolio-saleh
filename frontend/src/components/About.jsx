import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a Full Stack Web Developer with practical experience building and deploying modern web applications. 
            My passion is creating clean, efficient code that solves real-world problems.
          </p>
          <p>
            I specialize in both frontend and backend development, with a strong focus on performance, user experience, 
            and best practices. I love working with technologies like React, Node.js, and Python to build scalable applications.
          </p>
          <p>
            When I'm not coding, you'll find me learning new technologies, contributing to projects, and continuously improving my skills.
          </p>
          <div className="social-links">
            <a href="mailto:salehsafe963@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            <a href="https://github.com/SalehSafe" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/saleh-saleh-42734929b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}
