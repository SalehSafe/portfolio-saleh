import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">
        Get to know me better and discover what drives my passion for development
      </p>
      
      <div className="about-content">
        <div className="about-image-container">
          <div className="about-image-wrapper">
            <div className="about-image-placeholder">👨‍💻</div>
          </div>
          <div className="about-image-decoration"></div>
        </div>

        <div className="about-text">
          <h3>Who I Am</h3>
          <h4>A passionate developer crafting digital experiences</h4>
          
          <p>
            I'm a Full Stack Web Developer with hands-on experience building and deploying 
            modern web applications. My passion lies in creating clean, efficient code that 
            solves real-world problems and delivers exceptional user experiences.
          </p>
          
          <p>
            I specialize in both frontend and backend development, with a strong focus on 
            performance, scalability, and best practices. I love working with cutting-edge 
            technologies to build applications that make a difference.
          </p>

          <div className="about-highlights">
            <div className="about-highlight">
              <div className="highlight-icon">🎯</div>
              <span className="highlight-text">Problem Solver</span>
            </div>
            <div className="about-highlight">
              <div className="highlight-icon">🚀</div>
              <span className="highlight-text">Fast Learner</span>
            </div>
            <div className="about-highlight">
              <div className="highlight-icon">💡</div>
              <span className="highlight-text">Creative Thinker</span>
            </div>
            <div className="about-highlight">
              <div className="highlight-icon">🤝</div>
              <span className="highlight-text">Team Player</span>
            </div>
          </div>

          <div className="social-links">
            <a href="mailto:salehsafe963@gmail.com" target="_blank" rel="noopener noreferrer">
              <span>📧</span> Email
            </a>
            <a href="https://github.com/SalehSafe" target="_blank" rel="noopener noreferrer">
              <span>💻</span> GitHub
            </a>
            <a href="https://www.linkedin.com/in/saleh-saleh-42734929b/" target="_blank" rel="noopener noreferrer">
              <span>💼</span> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
