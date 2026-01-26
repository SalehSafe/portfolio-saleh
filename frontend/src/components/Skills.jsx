import './Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Vite', 'Responsive Design']
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Express.js', 'Python', 'Flask', 'RESTful APIs']
    },
    {
      name: 'Databases',
      skills: ['MongoDB', 'MySQL']
    },
    {
      name: 'Tools & Platforms',
      skills: ['Git & GitHub', 'Postman', 'VS Code', 'Linux Basics', 'Vercel', 'Render', 'Railway']
    },
    {
      name: 'Other',
      skills: ['API Integration', 'Authentication & Authorization', 'DevOps & Deployment', 'Problem Solving & Debugging']
    }
  ]

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category">
            <h3>{category.name}</h3>
            <div className="skill-list">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
