# 🛠️ Setup Guide - Perfect Prompt

Quick setup guide to get your Perfect Prompt website running locally.

## 📦 Prerequisites

Before you begin, make sure you have:

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **npm, yarn, or pnpm** - Comes with Node.js
- **OpenAI API Key** - [Get it here](https://platform.openai.com/api-keys)
- **Code Editor** - VS Code recommended
- **Git** - [Download here](https://git-scm.com/)

## 🚀 Installation Steps

### Step 1: Navigate to Project Directory

```bash
cd "perfect pormpt site"
```

### Step 2: Install Dependencies

Choose one:

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

This will install all required packages:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- OpenAI SDK
- And more...

### Step 3: Set Up Environment Variables

1. **Copy the example file** (if it exists):
   ```bash
   cp .env.local.example .env.local
   ```

2. **Or create `.env.local` manually** in the project root:
   ```bash
   # On Windows (PowerShell)
   New-Item .env.local

   # On Mac/Linux
   touch .env.local
   ```

3. **Add your environment variables** to `.env.local`:

   ```env
   # ============================================
   # REQUIRED: OpenAI API Key
   # ============================================
   # Get your key from: https://platform.openai.com/api-keys
   OPENAI_API_KEY=sk-your-actual-openai-api-key-here

   # ============================================
   # OPTIONAL: Google AdSense (for monetization)
   # ============================================
   # Get from: https://www.google.com/adsense/
   NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-xxxxxxxxxxxx
   NEXT_PUBLIC_ADSENSE_SLOT_TOP=xxxxxxxxx
   NEXT_PUBLIC_ADSENSE_SLOT_MID=xxxxxxxxx
   NEXT_PUBLIC_ADSENSE_SLOT_BOTTOM=xxxxxxxxx

   # ============================================
   # OPTIONAL: Google Analytics (for tracking)
   # ============================================
   # Get from: https://analytics.google.com/
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

   # ============================================
   # REQUIRED for Production: Site URL
   # ============================================
   # For local dev, this can be http://localhost:3000
   SITE_URL=http://localhost:3000
   ```

### Step 4: Get Your OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in
3. Go to [API Keys](https://platform.openai.com/api-keys)
4. Click "Create new secret key"
5. Copy the key (starts with `sk-`)
6. Paste it into `.env.local` as `OPENAI_API_KEY`

⚠️ **Important**: Keep your API key secret! Never commit it to Git.

### Step 5: Run Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

You should see:
```
✓ Ready on http://localhost:3000
```

### Step 6: Open in Browser

Open your browser and navigate to:

```
http://localhost:3000
```

You should see the Perfect Prompt homepage! 🎉

## ✅ Verify Everything Works

### Test 1: Language Toggle
- Click the language switch button (top right)
- Page should reload in Arabic
- Click again to return to English

### Test 2: Generate a Prompt
1. Enter a topic in the text area (e.g., "Write a blog post about AI")
2. Click "Generate Perfect Prompt"
3. Wait a few seconds
4. You should see a detailed AI prompt appear

### Test 3: Copy Function
- Click the "Copy to Clipboard" button on the result
- Button should change to "Copied!"
- Try pasting (Ctrl+V / Cmd+V) - your prompt should paste

## 🎨 Optional: Google AdSense Setup

If you want to add ads (optional for development):

1. Sign up at [Google AdSense](https://www.google.com/adsense/)
2. Get approved (can take 1-2 weeks)
3. Get your Publisher ID (ca-pub-xxxxxxxxx)
4. Create 3 ad units and get slot IDs
5. Add them to `.env.local`
6. Restart dev server

Placeholder ads will show if not configured.

## 📊 Optional: Google Analytics Setup

If you want to track visitors:

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property
3. Get your Measurement ID (G-XXXXXXXXXX)
4. Add it to `.env.local` as `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`
5. Restart dev server

## 🔧 Development Tips

### Hot Reload
Next.js automatically reloads when you save files. Just edit and see changes!

### Clear Cache
If things seem broken:
```bash
# Delete .next directory
rm -rf .next
# Or on Windows
rmdir /s .next

# Restart dev server
npm run dev
```

### Check for Errors
```bash
# Run TypeScript check
npx tsc --noEmit

# Run linter
npm run lint
```

### Build for Production (Test)
```bash
npm run build
npm run start
```

## 📁 Project Structure Overview

```
perfect-prompt/
├── app/                    # Next.js 14 App Router
│   ├── api/generate/       # API endpoint for OpenAI
│   ├── layout.tsx          # Root layout (SEO, meta tags)
│   └── page.tsx            # Homepage
├── components/             # React components
│   ├── AdSense.tsx         # Ad component
│   ├── GoogleAnalytics.tsx # GA tracking
│   ├── LangSwitch.tsx      # Language toggle
│   ├── PromptForm.tsx      # Input form
│   └── PromptResult.tsx    # Result display
├── lib/                    # Utilities
│   ├── openai.ts           # OpenAI integration
│   └── translations.ts     # Bilingual text
├── public/                 # Static files
├── styles/                 # Global CSS
└── .env.local              # Your secrets (not in Git)
```

## 🐛 Troubleshooting

### Issue: Port 3000 already in use
```bash
# Find and kill the process (Mac/Linux)
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Issue: Module not found
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### Issue: OpenAI API Error
- Check your API key is correct (starts with `sk-`)
- Verify you have credits in OpenAI account
- Check [OpenAI Status](https://status.openai.com/)

### Issue: Environment variables not working
- Make sure `.env.local` is in the project root
- Restart the dev server after changing `.env.local`
- Check there are no typos in variable names

### Issue: Build fails
```bash
# Clear everything and start fresh
rm -rf .next node_modules
npm install
npm run build
```

## 📚 Next Steps

Once everything is working:

1. **Customize the design** - Edit `tailwind.config.js` and components
2. **Update translations** - Edit `lib/translations.ts`
3. **Add more features** - Check the TODO in code
4. **Test thoroughly** - Try different prompts
5. **Prepare for deployment** - See `DEPLOYMENT.md`

## 🆘 Need Help?

- Check the main `README.md` for more info
- Review Next.js documentation
- Check OpenAI API documentation
- Open an issue on GitHub

## ✅ You're Ready!

Your development environment is set up! Start building and customizing Perfect Prompt. 🚀

Happy coding! 💻

