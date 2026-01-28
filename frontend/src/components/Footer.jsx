import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' }
  ]

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/SalehSafe', icon: '💻' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/saleh-saleh-42734929b/', icon: '💼' },
    { name: 'Email', href: 'mailto:salehsafe963@gmail.com', icon: '📧' }
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <h3>Saleh Saleh</h3>
            <p>
              Full Stack Web Developer passionate about building modern, 
              performant, and user-friendly web applications.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Projects</h4>
            <ul>
              <li><a href="https://daily-tools-hub-3o1b.vercel.app/" target="_blank" rel="noopener noreferrer">Daily Tools Hub</a></li>
              <li><a href="https://github.com/SalehSafe" target="_blank" rel="noopener noreferrer">Task Manager API</a></li>
              <li><a href="https://github.com/SalehSafe" target="_blank" rel="noopener noreferrer">Full Stack Apps</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:salehsafe963@gmail.com">salehsafe963@gmail.com</a></li>
              <li><a href="https://github.com/SalehSafe" target="_blank" rel="noopener noreferrer">GitHub Profile</a></li>
              <li><a href="https://www.linkedin.com/in/saleh-saleh-42734929d/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Saleh Saleh. All rights reserved.</p>
          <div className="made-with-love">
            Made with <span className="heart">❤</span> and lots of coffee ☕
          </div>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
