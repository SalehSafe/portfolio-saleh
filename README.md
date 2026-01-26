# Saleh's Portfolio with AI Chatbot

A modern, fully responsive portfolio website featuring an integrated AI chatbot built with React, Node.js, and Google Gemini API.

## Features

- ✨ **Modern Portfolio Design** - Clean, professional layout with dark/light theme support
- 🤖 **AI Chatbot** - Integrated chatbot powered by Google Gemini API to answer questions about Saleh's skills and projects
- ⚡ **Fast Performance** - Built with Vite for rapid development and optimized builds
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Dark/Light Theme** - Easy theme switching for user preference
- 🚀 **Ready to Deploy** - Configured for free deployment on Vercel (frontend) and Render/Railway (backend)

## Tech Stack

### Frontend
- React 18
- Vite
- CSS3 with variables for theming
- Axios for API communication

### Backend
- Python 3
- Flask with CORS support
- Google Generative AI (Gemini API)
- Environment variable management with python-dotenv

## Project Structure

```
portfolio-project/
├── frontend/                 # React + Vite frontend
│   ├── src/
│   │   ├── components/       # React components (Header, Hero, About, Skills, Projects, Chatbot, Footer)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── App.css
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── .gitignore
│
├── backend/                  # Python Flask backend
│   ├── app/
│   │   └── main.py          # Flask app with AI chatbot API
│   ├── requirements.txt       # Python dependencies
│   ├── .env.example          # Example environment variables
│   └── .gitignore
│
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 16+ and npm
- Python 3.8+
- Google Gemini API key (free from https://ai.google.dev/)

### Setup

1. **Clone/Open the project**
   ```bash
   cd portfolio-project
   ```

2. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   ```

3. **Setup Backend**
   ```bash
   cd backend
   python -m venv venv
   # On Windows
   venv\Scripts\activate
   # On macOS/Linux
   source venv/bin/activate
   
   pip install -r requirements.txt
   ```

4. **Configure API Key**
   - Get your free Google Gemini API key from https://ai.google.dev/
   - Copy `backend/.env.example` to `backend/.env`
   - Add your API key to `backend/.env`:
     ```
     GEMINI_API_KEY=your_actual_api_key_here
     ```

## Development

### Run Backend (from backend directory)
```bash
python app/main.py
```
The API will run on `http://localhost:5000`

### Run Frontend (from frontend directory, in a new terminal)
```bash
npm run dev
```
The frontend will run on `http://localhost:5173`

Visit `http://localhost:5173` in your browser to see your portfolio!

## Building for Production

### Frontend Build
```bash
cd frontend
npm run build
```
The built files will be in `frontend/dist/`

### Backend Deployment
The Flask app is ready to deploy to services like:
- Render (https://render.com/) - FREE tier available
- Railway (https://railway.app/) - FREE tier with $5 credit
- Heroku (https://www.heroku.com/) - Paid plans

## Deployment

### Deploy Frontend to Vercel (FREE)
1. Push your code to GitHub
2. Go to https://vercel.com and sign in with GitHub
3. Click "Add New" → "Project"
4. Select your repository
5. Set Environment: Frontend
6. Click Deploy

### Deploy Backend to Render (FREE)
1. Push your code to GitHub
2. Go to https://render.com
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Set Runtime to "Python 3"
6. Set Build Command: `pip install -r requirements.txt`
7. Set Start Command: `python app/main.py`
8. Add Environment Variable: `GEMINI_API_KEY` with your API key
9. Click Deploy

### Update Frontend API URL
After deploying the backend, update the Vite proxy in `frontend/vite.config.js`:
```javascript
target: 'https://your-render-app.onrender.com'
```

Or in production, update the Chatbot component API calls.

## Free API Keys & Services

- **Google Gemini API**: Free tier available at https://ai.google.dev/
- **Vercel**: Free tier for static sites
- **Render**: Free tier for backend apps
- **Railway**: Free $5 monthly credit
- **GitHub**: Free for public/private repos

## Customization

### Update Portfolio Content
Edit the portfolio data in each component:
- `frontend/src/components/Hero.jsx` - Hero section
- `frontend/src/components/About.jsx` - About section with contact info
- `frontend/src/components/Skills.jsx` - Skills list
- `frontend/src/components/Projects.jsx` - Project cards

### Update Chatbot Context
Edit `backend/app/main.py` - Update the `PORTFOLIO_CONTEXT` variable to customize what the chatbot knows about you.

### Change Theme Colors
Update CSS variables in `frontend/src/index.css`:
```css
:root {
  --primary-color: #0070f3;
  --bg-color: #ffffff;
  --text-color: #333333;
  /* ... etc */
}
```

## Troubleshooting

### Chatbot not responding?
- Check that `GEMINI_API_KEY` is set correctly in `backend/.env`
- Ensure backend is running on `http://localhost:5000`
- Check browser console for any CORS errors

### Frontend won't connect to backend?
- Make sure backend is running first
- Check that proxy in `frontend/vite.config.js` points to correct backend URL
- In production, update API calls in `Chatbot.jsx` to use absolute URLs

### Module not found errors?
- Run `npm install` in frontend directory
- Run `pip install -r requirements.txt` in backend directory

## License

This project is open source and available for personal and professional use.

## Support

For issues or questions, reach out to:
- Email: salehsafe963@gmail.com
- GitHub: https://github.com/SalehSafe
- LinkedIn: https://www.linkedin.com/in/saleh-saleh-42734929b/
