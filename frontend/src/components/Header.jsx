import './Header.css'

export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Saleh Saleh</h1>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  )
}
