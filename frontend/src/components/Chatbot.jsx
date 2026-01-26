import { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import './Chatbot.css'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm Saleh's portfolio assistant. What would you like to know?", sender: 'bot', showOptions: true }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const chatOptions = [
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'My Skills' },
    { id: 'projects', label: 'My Projects' },
    { id: 'contact', label: 'Contact Info' },
    { id: 'experience', label: 'My Experience' }
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

    try {
      const response = await axios.post('/api/chat', {
        message: inputValue
      })

      const botMessage = {
        id: messages.length + 2,
        text: response.data.response,
        sender: 'bot',
        showOptions: !inputValue.toLowerCase().includes('contact') && 
                     !inputValue.toLowerCase().includes('about') &&
                     !inputValue.toLowerCase().includes('skill') &&
                     !inputValue.toLowerCase().includes('project') &&
                     !inputValue.toLowerCase().includes('experience')
      }
      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      const errorMessage = {
        id: messages.length + 2,
        text: 'Sorry, I encountered an error. Please try again.',
        sender: 'bot'
      }
      setMessages(prev => [...prev, errorMessage])
    }

    setIsLoading(false)
  }

  const handleOptionClick = (optionId) => {
    const optionLabel = chatOptions.find(opt => opt.id === optionId)?.label
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: optionLabel,
      sender: 'user'
    }

    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    // Simulate API response with predefined content
    setTimeout(() => {
      const responses = {
        about: "I'm Saleh Saleh, a Full Stack Web Developer with practical experience building and deploying modern web applications. I specialize in both frontend and backend development, with a strong focus on clean code, performance, and real-world problem solving. I'm experienced in building REST APIs, working with databases, and integrating third-party services.",
        skills: "Frontend: HTML, CSS, JavaScript, React.js, Vite, Responsive Design\n\nBackend: Node.js, Express.js, Python, Flask, RESTful APIs\n\nDatabases: MongoDB, MySQL\n\nTools & Platforms: Git & GitHub, Postman, VS Code, Linux Basics, Vercel, Render, Railway\n\nOther: API Integration, Authentication & Authorization, DevOps & Deployment, Problem Solving & Debugging",
        projects: "1. Task Manager API - RESTful API for managing tasks with user authentication\n\n2. Full Stack Web Applications - Collection of projects using React and Node.js\n\n3. Backend Practice Projects - Multiple backend projects with Node.js and Python\n\nCheck my GitHub: github.com/SalehSafe",
        contact: "Email: salehsafe963@gmail.com\n\nGitHub: https://github.com/SalehSafe\n\nLinkedIn: https://www.linkedin.com/in/saleh-saleh-42734929b/\n\nFeel free to reach out!",
        experience: "• Building RESTful APIs with proper authentication\n• Frontend development with React\n• Backend development with Node.js and Python\n• Database design and optimization\n• Git version control and collaboration\n• Deployment to Vercel, Render, Railway\n• Problem solving and debugging"
      }

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
        💬
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Chat with me</h3>
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
                        {option.label}
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
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
