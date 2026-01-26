# Portfolio Chatbot Project

A complete full-stack portfolio website with integrated AI chatbot. Everything is free to build, deploy, and run.

## Quick Start

### 1. Get Free Google Gemini API Key
- Visit https://ai.google.dev/
- Click "Get API Key"
- Copy your key

### 2. Setup Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 3. Configure API
- Copy `backend/.env.example` to `backend/.env`
- Paste your Gemini API key into `.env`

### 4. Setup Frontend
```bash
cd frontend
npm install
```

### 5. Run Both Servers
```bash
# Terminal 1 - Backend (from backend folder)
python app/main.py

# Terminal 2 - Frontend (from frontend folder)
npm run dev
```

Open http://localhost:5173 in your browser!

## Features
- 🎨 Modern portfolio with dark/light theme
- 🤖 AI chatbot using Google Gemini (free)
- 📱 Fully responsive design
- ⚡ Built with React + Vite
- 🚀 Ready to deploy (free hosting options)

## File Structure
```
portfolio-project/
├── frontend/          # React website
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── backend/           # Python API
│   ├── app/
│   │   └── main.py
│   ├── requirements.txt
│   └── .env.example
└── README.md         # Full documentation
```

## Deployment (Free)
- **Frontend**: Vercel (https://vercel.com)
- **Backend**: Render (https://render.com) or Railway (https://railway.app)
- **API**: Google Gemini (free tier)

See README.md for detailed deployment instructions!
