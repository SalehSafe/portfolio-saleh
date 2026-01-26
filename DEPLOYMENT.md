# 🚀 Deployment Guide - ZERO COST

Deploy your portfolio live for completely FREE using Vercel (Frontend) and Render (Backend).

## 📊 Project Structure

```
portfolio-saleh/
│
├── 📁 frontend/                          # React + Vite Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx & Header.css
│   │   │   ├── Hero.jsx & Hero.css
│   │   │   ├── About.jsx & About.css
│   │   │   ├── Skills.jsx & Skills.css
│   │   │   ├── Projects.jsx & Projects.css
│   │   │   ├── Chatbot.jsx & Chatbot.css
│   │   │   └── Footer.jsx & Footer.css
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── .gitignore
│
├── 📁 backend/                           # Python Flask Backend
│   ├── app/
│   │   └── main.py                       # Flask API with predefined responses
│   ├── venv/                             # Python virtual environment
│   ├── requirements.txt
│   ├── .env                              # API keys (create this locally)
│   ├── .env.example
│   └── .gitignore
│
├── 📁 .github/
│   └── copilot-instructions.md
│
├── README.md                             # Comprehensive documentation
├── QUICKSTART.md                         # Quick setup guide
└── DEPLOYMENT.md                         # This file

```

## 🔄 How It Works

### Architecture:
```
User Browser → Vercel (React Frontend) → Render API (Flask Backend) → Chatbot Responses
```

### Frontend (Vercel):
- Hosts your React portfolio website
- Static files (HTML, CSS, JS)
- Auto-deployed from GitHub

### Backend (Render):
- Hosts your Flask Python API
- Handles `/chat` endpoint
- Returns predefined chatbot responses

---

## 📋 Step-by-Step Deployment (15 minutes)

### PART 1: Prepare Your Code (5 min)

#### Step 1.1: Initialize Git Repository
```bash
cd Portfolio-saleh
git init
git add .
git commit -m "Initial portfolio commit"
```

#### Step 1.2: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `Portfolio-saleh` (or your preferred name)
3. Description: "My portfolio with AI chatbot"
4. Click "Create repository"
5. Follow GitHub's instructions to push your code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/Portfolio-saleh.git
git branch -M main
git push -u origin main
```

### PART 2: Deploy Frontend to Vercel (5 min)

#### Step 2.1: Connect GitHub to Vercel
1. Go to https://vercel.com
2. Click "Sign Up" → Choose "GitHub"
3. Authorize Vercel to access your GitHub account
4. Click "Import Project"
5. Select your `Portfolio-saleh` repository

#### Step 2.2: Configure Vercel
1. **Project Name**: `portfolio-saleh`
2. **Framework Preset**: Select "Vite"
3. **Root Directory**: `./frontend` (IMPORTANT!)
4. **Build Command**: `npm run build`
5. **Output Directory**: `dist`
6. Click "Deploy"

**Wait for deployment to complete (~2-3 minutes)**

#### Result:
- Your site will be live at: `https://portfolio-saleh.vercel.app`
- Auto-deploys whenever you push to GitHub

### PART 3: Deploy Backend to Render (5 min)

#### Step 3.1: Create Render Account
1. Go to https://render.com
2. Click "Get Started" → Sign up with GitHub
3. Authorize Render

#### Step 3.2: Create Web Service
1. Click "New +" → Select "Web Service"
2. Connect your GitHub repository
3. Fill in details:
   - **Name**: `portfolio-chatbot-api`
   - **Environment**: `Python 3`
   - **Region**: Select closest to you
   - **Branch**: `main`
   - **Root Directory**: `backend`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app.main:app`

#### Step 3.3: Add Environment Variables
Click "Environment" in Render dashboard:
- Add any variables from your `.env` file (if needed)
- For now, you don't need any (chatbot uses predefined responses)

#### Step 3.4: Deploy
- Click "Create Web Service"
- Wait for deployment (~5 minutes)
- Your API will be live at: `https://portfolio-chatbot-api.onrender.com`

---

## ⚙️ Configure Frontend to Use Live Backend

After backend is deployed, update your frontend:

#### File: `frontend/vite.config.js`
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://portfolio-chatbot-api.onrender.com',  // Your Render API URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
```

Then:
```bash
git add .
git commit -m "Update backend API URL for production"
git push
```

Vercel will auto-deploy!

---

## ✅ Verify Everything Works

1. **Test Frontend**: Visit `https://portfolio-saleh.vercel.app`
2. **Test Chatbot**: Click 💬 button and test responses
3. **Test API**: Visit `https://portfolio-chatbot-api.onrender.com/health`
   - Should return: `{"status": "ok"}`

---

## 💰 Cost Breakdown

| Service | Cost | Why Free |
|---------|------|----------|
| **Vercel** | FREE | Free tier for static sites + unlimited bandwidth |
| **Render** | FREE | Free tier includes 750 hours/month (enough for 24/7) |
| **GitHub** | FREE | Public repos are free |
| **Domain** | FREE | Uses vercel.app subdomain |
| **Total** | **$0/month** | ✅ Completely FREE! |

---

## 📱 Optional: Custom Domain (Still FREE!)

Want `yourdomain.com` instead of `portfolio-saleh.vercel.app`?

### Option 1: Free Domain (namecheap.com)
1. Go to https://www.namecheap.com/domains/registration/ (.tk, .ml domains are free)
2. Register domain
3. Update DNS in Namecheap to point to Vercel
4. Add custom domain in Vercel settings

### Option 2: Use existing domain
- If you already own a domain, just update DNS records to Vercel

---

## 🔄 How to Update Your Portfolio

### Update Content:
1. Edit files locally (e.g., `frontend/src/components/About.jsx`)
2. Commit and push to GitHub:
```bash
git add .
git commit -m "Update about section"
git push
```
3. Vercel automatically redeploys (~2-3 minutes)

### Update Chatbot Responses:
1. Edit `backend/app/main.py` (CHATBOT_RESPONSES dictionary)
2. Push to GitHub
3. Render automatically redeploys

---

## 🆘 Troubleshooting

### Backend says "Inactive" on Render
- **Solution**: Render puts free tier services to sleep after 15 minutes of inactivity
- **Fix**: Click "Restart Service" to wake it up
- This is normal on free tier

### Chatbot shows error
- Check if Render service is running
- Visit `https://portfolio-chatbot-api.onrender.com/health` to verify

### Vercel says "Root directory not found"
- Make sure you set Root Directory to `./frontend` in Vercel settings

### Frontend can't connect to backend
- Verify backend URL in `vite.config.js`
- Check Render service is running
- Verify CORS is enabled in Flask (it is by default in our code)

---

## 📊 Monitoring Your Site

### Vercel Analytics
- Dashboard at https://vercel.com
- Monitor traffic, errors, build logs

### Render Logs
- Dashboard at https://render.com
- View API logs, errors, deployment history

---

## 🔐 Security Notes

- Don't commit `.env` files with real API keys
- Use Render's Environment Variables for sensitive data
- Frontend is public (that's fine - it's a portfolio)

---

## 🎯 Summary

✅ **Frontend deployed**: https://portfolio-saleh.vercel.app  
✅ **Backend deployed**: https://portfolio-chatbot-api.onrender.com  
✅ **Cost**: $0/month  
✅ **Setup time**: ~15 minutes  
✅ **Auto-deploy**: Yes (on every push to GitHub)

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Render Documentation](https://render.com/docs)
- [GitHub Actions](https://github.com/features/actions) (for advanced CI/CD)

**Your portfolio is now LIVE! 🎉**
