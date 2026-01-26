"""
Portfolio Chatbot Backend API
A Flask REST API that serves predefined responses about Saleh's portfolio
Features: No external API calls, no rate limiting, instant responses
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin requests for frontend

# Predefined chatbot responses - no external API needed
CHATBOT_RESPONSES = {
    "about": {
        "title": "About Me",
        "content": "I'm Saleh Saleh, a Full Stack Web Developer with practical experience building and deploying modern web applications. I specialize in both frontend and backend development, with a strong focus on clean code, performance, and real-world problem solving. I'm experienced in building REST APIs, working with databases, and integrating third-party services. When I'm not coding, you'll find me learning new technologies and improving my skills."
    },
    "skills": {
        "title": "My Skills",
        "content": "Frontend: HTML, CSS, JavaScript, React.js, Vite, Responsive Design\n\nBackend: Node.js, Express.js, Python, Flask, RESTful APIs\n\nDatabases: MongoDB, MySQL\n\nTools & Platforms: Git & GitHub, Postman, VS Code, Linux Basics, Vercel, Render, Railway\n\nOther: API Integration, Authentication & Authorization, DevOps & Deployment, Problem Solving & Debugging"
    },
    "projects": {
        "title": "My Projects",
        "content": "1. Task Manager API - RESTful API for managing tasks with user authentication, CRUD operations, and JWT-based auth.\n\n2. Full Stack Web Applications - Collection of projects using React and Node.js demonstrating frontend-backend integration.\n\n3. Backend Practice Projects - Multiple backend projects with Node.js and Python focusing on API design and database integration.\n\nCheck out my GitHub for more: github.com/SalehSafe"
    },
    "contact": {
        "title": "Contact Me",
        "content": "Email: salehsafe963@gmail.com\n\nGitHub: https://github.com/SalehSafe\n\nLinkedIn: https://www.linkedin.com/in/saleh-saleh-42734929b/\n\nFeel free to reach out! I'm always interested in interesting projects and opportunities."
    },
    "experience": {
        "title": "My Experience",
        "content": "I have practical experience building and deploying modern web applications. My background includes:\n\n• Building RESTful APIs with proper authentication\n• Frontend development with React and modern UI frameworks\n• Backend development with Node.js and Python\n• Database design and optimization\n• Git version control and collaboration\n• Deployment to platforms like Vercel, Render, and Railway\n• Problem solving and debugging complex issues"
    }
}

@app.route('/chat', methods=['POST'])
def chat():
    """
    Chat endpoint - Processes user messages and returns predefined responses
    Request: { "message": "user input" }
    Response: { "response": "predefined answer", "options": ["about", "skills", ...] }
    """
    try:
        data = request.json
        user_message = data.get('message', '').strip().lower()
        
        if not user_message:
            return jsonify({'error': 'Message cannot be empty'}), 400
        
        response_text = None
        
        # Match keywords in user message to predefined responses
        if any(word in user_message for word in ['about', 'who are you', 'tell me about', 'yourself']):
            response_text = CHATBOT_RESPONSES["about"]["content"]
        elif any(word in user_message for word in ['skill', 'expertise', 'technology', 'tech']):
            response_text = CHATBOT_RESPONSES["skills"]["content"]
        elif any(word in user_message for word in ['project', 'work', 'portfolio']):
            response_text = CHATBOT_RESPONSES["projects"]["content"]
        elif any(word in user_message for word in ['contact', 'email', 'reach', 'phone', 'linkedin', 'github']):
            response_text = CHATBOT_RESPONSES["contact"]["content"]
        elif any(word in user_message for word in ['experience', 'background', 'history']):
            response_text = CHATBOT_RESPONSES["experience"]["content"]
        else:
            # Default response with available options
            response_text = "Hi! I'm Saleh's portfolio assistant. Here are some things you can ask about:\n\n• About Me\n• My Skills\n• My Projects\n• Contact Info\n• My Experience\n\nJust type any of these to learn more!"
        
        return jsonify({
            'response': response_text,
            'options': list(CHATBOT_RESPONSES.keys())
        })
    except Exception as e:
        print(f"Error in chat endpoint: {e}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/health', methods=['GET'])
def health():
    """Health check endpoint - Returns server status"""
    return jsonify({'status': 'ok'})

if __name__ == '__main__':
    print("=" * 50)
    print("✓ Chatbot configured with predefined responses")
    print("✓ No external API calls - works offline!")
    print("✓ No rate limiting")
    print("=" * 50)
    print("Starting Flask server on http://localhost:5000")
    print("=" * 50)
    app.run(debug=True, port=5000)
