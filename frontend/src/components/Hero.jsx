import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-title">Hi, I'm Saleh Saleh</h2>
        <p className="hero-subtitle">Full Stack Web Developer</p>
        <p className="hero-description">
          Building modern web applications with clean code, great performance, and real-world problem solving.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="mailto:salehsafe963@gmail.com" className="btn btn-secondary">Get in Touch</a>
        </div>
      </div>
    </section>
  )
}
