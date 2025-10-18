# ⚡ Quick Start - Perfect Prompt

Get Perfect Prompt running in 5 minutes!

## 🎯 Prerequisites

- Node.js 18+ installed
- OpenAI API key

## 🚀 5-Minute Setup

### 1. Navigate to Project
```bash
cd "perfect pormpt site"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create Environment File

Create `.env.local` in the project root:

```env
OPENAI_API_KEY=sk-your-openai-api-key-here
SITE_URL=http://localhost:3000
```

### 4. Get OpenAI API Key

1. Visit: https://platform.openai.com/api-keys
2. Create account or login
3. Click "Create new secret key"
4. Copy the key (starts with `sk-`)
5. Paste into `.env.local`

### 5. Start Development Server
```bash
npm run dev
```

### 6. Open Browser
```
http://localhost:3000
```

## ✅ Done!

Your Perfect Prompt is now running! 🎉

## 🧪 Test It

1. Enter a topic: "Write a blog post about AI"
2. Click "Generate Perfect Prompt"
3. Copy the generated prompt
4. Switch to Arabic using the language toggle

## 🚀 Deploy to Production

### Vercel (Easiest)

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repo
5. Add `OPENAI_API_KEY` in environment variables
6. Deploy!

Your site will be live in ~2 minutes at `your-project.vercel.app`

## 📚 Next Steps

- **Customize**: Edit `tailwind.config.js` for colors
- **Translate**: Update `lib/translations.ts`
- **Monetize**: Add AdSense codes to `.env.local`
- **Optimize**: See `DEPLOYMENT.md` for production tips

## 🆘 Issues?

### Port 3000 in use?
```bash
npm run dev -- -p 3001
```

### OpenAI API errors?
- Check API key is correct
- Verify you have credits
- Visit: https://status.openai.com

### Module not found?
```bash
rm -rf node_modules
npm install
```

## 📖 Full Documentation

- [README.md](README.md) - Complete overview
- [SETUP.md](SETUP.md) - Detailed setup
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deploy to production
- [FEATURES.md](FEATURES.md) - All features
- [API.md](API.md) - API documentation

---

**That's it!** You're ready to generate perfect prompts. 🚀

