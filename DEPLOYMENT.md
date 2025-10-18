# 🚀 Deployment Guide - Perfect Prompt

Complete guide to deploying your Perfect Prompt website to production.

## 📋 Pre-Deployment Checklist

- [ ] OpenAI API key configured in `.env.local`
- [ ] Site URL updated in environment variables
- [ ] Google AdSense codes added (optional)
- [ ] Google Analytics ID added (optional)
- [ ] All dependencies installed (`npm install`)
- [ ] Build succeeds locally (`npm run build`)
- [ ] No TypeScript or linting errors

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

Vercel is made by the creators of Next.js and offers the best performance and developer experience.

#### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Perfect Prompt"
   git branch -M main
   git remote add origin https://github.com/yourusername/perfect-prompt.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js

3. **Add Environment Variables**
   
   In Vercel Dashboard → Settings → Environment Variables, add:
   ```
   OPENAI_API_KEY=sk-your-key-here
   NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-xxxxxxxxxxxx
   NEXT_PUBLIC_ADSENSE_SLOT_TOP=xxxxxxxxx
   NEXT_PUBLIC_ADSENSE_SLOT_MID=xxxxxxxxx
   NEXT_PUBLIC_ADSENSE_SLOT_BOTTOM=xxxxxxxxx
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
   SITE_URL=https://your-domain.vercel.app
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes
   - Your site is live! 🎉

#### Custom Domain (Optional)

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS records as shown
4. Update `SITE_URL` environment variable

---

### Option 2: Firebase Hosting

Firebase offers free hosting with SSL and CDN.

#### Steps:

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```
   - Choose "Use an existing project" or create new
   - Set public directory: `out`
   - Configure as single-page app: Yes
   - Set up GitHub Actions: Optional

4. **Update next.config.js**
   
   Add export configuration:
   ```js
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
     // ... rest of config
   }
   ```

5. **Build and Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

**Note**: Firebase Hosting doesn't support Edge Runtime. You'll need to modify the API route or use Firebase Cloud Functions.

---

### Option 3: Netlify

Netlify offers excellent Next.js support with Edge Functions.

#### Steps:

1. **Push to GitHub** (same as Vercel)

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository

3. **Configure Build Settings**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

4. **Add Environment Variables**
   
   Settings → Environment Variables → Add variables (same as Vercel)

5. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete

---

### Option 4: Railway

Railway offers backend hosting with automatic SSL.

#### Steps:

1. **Push to GitHub** (same as Vercel)

2. **Deploy to Railway**
   - Go to [railway.app](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository

3. **Add Environment Variables**
   
   Variables tab → Add all required env vars

4. **Deploy**
   - Railway will auto-detect and deploy
   - Get your public URL

---

### Option 5: Docker + Any Cloud Provider

Deploy using Docker to AWS, GCP, Azure, DigitalOcean, etc.

#### Steps:

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine AS base
   
   FROM base AS deps
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   
   FROM base AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   RUN npm run build
   
   FROM base AS runner
   WORKDIR /app
   ENV NODE_ENV production
   
   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs
   
   COPY --from=builder /app/public ./public
   COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
   COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
   
   USER nextjs
   EXPOSE 3000
   ENV PORT 3000
   
   CMD ["node", "server.js"]
   ```

2. **Update next.config.js**
   ```js
   output: 'standalone',
   ```

3. **Build and Deploy**
   ```bash
   docker build -t perfect-prompt .
   docker run -p 3000:3000 perfect-prompt
   ```

4. **Push to Cloud Provider** (AWS ECR, GCP Container Registry, etc.)

---

## 🔒 Security Best Practices

1. **Never commit `.env.local`** - It's in `.gitignore` by default
2. **Use environment variables** for all secrets
3. **Rotate API keys** regularly
4. **Enable rate limiting** on your API routes
5. **Use HTTPS only** in production
6. **Set up monitoring** (Sentry, LogRocket, etc.)

---

## 📊 Post-Deployment

### 1. Verify SEO

- Check meta tags: View page source
- Test with [Google Rich Results Test](https://search.google.com/test/rich-results)
- Verify sitemap: `yourdomain.com/sitemap.xml`
- Check robots.txt: `yourdomain.com/robots.txt`

### 2. Submit to Search Engines

- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)
- Submit sitemap to both

### 3. Test Performance

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- Target: Lighthouse score 90+

### 4. Monitor

- Set up Google Analytics
- Monitor API usage in OpenAI dashboard
- Check AdSense earnings (if enabled)

---

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### API Route Errors

- Verify OpenAI API key is correct
- Check API key has credits
- Review Next.js logs for errors

### AdSense Not Showing

- Allow 24-48 hours for approval
- Check ad codes are correct
- Verify site has enough content

### Slow Performance

- Enable image optimization
- Check bundle size: `npm run build`
- Use CDN for static assets
- Enable caching headers

---

## 📈 Optimization Tips

1. **Enable Analytics** - Track user behavior
2. **A/B Testing** - Test different prompts
3. **Cache API Responses** - Reduce OpenAI costs
4. **Add Service Worker** - Offline support
5. **Optimize Images** - Use WebP format
6. **Minify Assets** - Already done by Next.js
7. **Use CDN** - Serve static files faster

---

## 🆘 Need Help?

- Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- Open an issue on GitHub
- Review error logs in deployment platform

---

## ✅ Success!

Your Perfect Prompt site should now be live and generating amazing AI prompts! 🎉

Remember to:
- Monitor your OpenAI API usage
- Keep your API keys secure
- Update dependencies regularly
- Back up your data

Happy prompting! 🚀

