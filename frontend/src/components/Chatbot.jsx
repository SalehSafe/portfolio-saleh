import { useState, useRef, useEffect } from 'react'
import './Chatbot.css'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! 👋 I'm Saleh's portfolio assistant. How can I help you today?", sender: 'bot', showOptions: true }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const chatOptions = [
    { id: 'about', label: '👨‍💻 About Me', icon: '👨‍💻' },
    { id: 'skills', label: '🛠️ My Skills', icon: '🛠️' },
    { id: 'projects', label: '🚀 My Projects', icon: '🚀' },
    { id: 'contact', label: '📬 Contact Info', icon: '📬' },
    { id: 'experience', label: '💼 Experience', icon: '💼' }
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user'
    }

    setMessages([...messages, userMessage])
    setInputValue('')
    setIsLoading(true)

    // Simulate response for demo purposes
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: "Thanks for your message! Feel free to explore my portfolio or use the quick options above to learn more about me.",
        sender: 'bot',
        showOptions: true
      }
      setMessages(prev => [...prev, botMessage])
      setIsLoading(false)
    }, 500)
  }

  const handleOptionClick = (optionId) => {
    const option = chatOptions.find(opt => opt.id === optionId)
    
    const userMessage = {
      id: messages.length + 1,
      text: option.label,
      sender: 'user'
    }

    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    const responses = {
      about: `Hi! I'm Saleh Saleh, a Full Stack Web Developer with practical experience building and deploying modern web applications.\n\n🎯 I specialize in both frontend and backend development, with a strong focus on clean code, performance, and real-world problem solving.\n\n💡 I'm passionate about creating intuitive user experiences and building scalable solutions.`,
      
      skills: `Here's my tech stack:\n\n🎨 Frontend: HTML, CSS, JavaScript, React.js, TypeScript, Vite, Tailwind CSS\n\n⚙️ Backend: Node.js, Express.js, Python, Flask, RESTful APIs\n\n🗄️ Databases: MongoDB, MySQL\n\n🛠️ Tools: Git, GitHub, VS Code, Linux, Vercel, Render, Railway\n\n💪 Other: API Integration, Authentication, DevOps, Problem Solving`,
      
      projects: `🚀 Featured Projects:\n\n🛠️ Daily Tools Hub - A collection of utility tools (currency converter, weather, games, etc.)\n📋 Task Manager API - RESTful API with JWT authentication\n🌐 Full Stack Applications - React + Node.js projects\n⚙️ Backend Practice - Node.js and Python projects\n\nCheck out my live projects or visit my GitHub for more!`,
      
      contact: `📬 Get in touch:\n\n📧 Email: salehsafe963@gmail.com\n💻 GitHub: github.com/SalehSafe\n💼 LinkedIn: linkedin.com/in/saleh-saleh-42734929b/\n\nI'm always open to new opportunities and collaborations!`,
      
      experience: `💼 My Experience:\n\n✅ Building RESTful APIs with proper authentication\n✅ Frontend development with React and modern tools\n✅ Backend development with Node.js and Python\n✅ Database design and optimization\n✅ Git version control and collaboration\n✅ Deployment to Vercel, Render, Railway\n✅ Problem solving and debugging`
    }

    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: responses[optionId] || "Information not available",
        sender: 'bot',
        showOptions: true
      }

      setMessages(prev => [...prev, botMessage])
      setIsLoading(false)
    }, 300)
  }

  return (
    <div className="chatbot-container">
      <button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        title={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>
              <span className="chatbot-status"></span>
              Portfolio Assistant
            </h3>
            <button
              className="close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id}>
                <div className={`message ${msg.sender}`}>
                  <span className="message-text">{msg.text}</span>
                </div>
                {msg.showOptions && msg.sender === 'bot' && (
                  <div className="message-options">
                    {chatOptions.map(option => (
                      <button
                        key={option.id}
                        className="option-btn"
                        onClick={() => handleOptionClick(option.id)}
                      >
                        {option.icon} {option.label.replace(option.icon + ' ', '')}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="message bot">
                <span className="message-text loading">Typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="chatbot-input-form">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              disabled={isLoading}
              className="chatbot-input"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="send-btn"
            >
              ➤
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
