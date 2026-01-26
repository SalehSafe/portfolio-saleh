import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Saleh Saleh. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/SalehSafe" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/saleh-saleh-42734929b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:salehsafe963@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
