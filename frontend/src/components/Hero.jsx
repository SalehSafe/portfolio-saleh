import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Available for opportunities
        </div>
        
        <h2 className="hero-title">
          Hi, I'm <span className="hero-title-highlight">Saleh Saleh</span>
        </h2>
        
        <p className="hero-subtitle">Full Stack Web Developer</p>
        
        <p className="hero-description">
          I craft modern web applications with clean code, exceptional performance, 
          and intuitive user experiences. Passionate about turning ideas into reality.
        </p>
        
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            <span>🚀</span> View My Work
          </a>
          <a href="mailto:salehsafe963@gmail.com" className="btn btn-secondary">
            <span>✉️</span> Get in Touch
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">5+</div>
            <div className="hero-stat-label">Projects Completed</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">10+</div>
            <div className="hero-stat-label">Technologies</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">100%</div>
            <div className="hero-stat-label">Dedication</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-indicator-icon"></div>
        <span>Scroll down</span>
      </div>
    </section>
  )
}
