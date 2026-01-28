import './Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      name: 'Frontend',
      icon: '🎨',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'TypeScript', 'Tailwind CSS', 'Vite']
    },
    {
      name: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Express.js', 'Python', 'Flask', 'RESTful APIs', 'JWT Auth']
    },
    {
      name: 'Databases',
      icon: '🗄️',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL']
    },
    {
      name: 'Tools & Platforms',
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'Render', 'Railway']
    },
    {
      name: 'Other Skills',
      icon: '💡',
      skills: ['API Integration', 'Authentication', 'DevOps', 'Linux', 'Problem Solving', 'Debugging']
    }
  ]

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills & Technologies</h2>
      <p className="section-subtitle">
        A comprehensive toolkit I use to bring ideas to life
      </p>
      
      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category">
            <div className="skill-category-header">
              <div className="skill-category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
            </div>
            <div className="skill-list">
              {category.skills.map((skill, skillIdx) => (
                <span key={skillIdx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
