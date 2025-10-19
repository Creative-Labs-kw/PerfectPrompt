# 🎬 Video Ads Implementation Guide
## Professional Ad Layout Like SimpleImageResizer

---

## ✅ What's Implemented

Your Perfect Prompt website now has a **clean, professional ad-supported layout** with:

### **Ad Placements:**
1. ✅ **Top Banner** (728x90 or 970x90) - Above main content
2. ✅ **Left Sidebar** (300x250) - Sticky, desktop only
3. ✅ **Right Sidebar** (300x250) - Sticky, desktop only  
4. ✅ **Inline Ad** (Responsive) - After generated prompt result
5. ✅ **Bottom Banner** (728x90 or 970x90) - Below content

### **Features:**
- ✅ Responsive (sidebars hidden on mobile)
- ✅ Sticky sidebars (stay visible when scrolling)
- ✅ Smooth animations & transitions
- ✅ Click tracking ready
- ✅ Video/Image support
- ✅ Professional placeholders
- ✅ Performance optimized (lazy loading)
- ✅ SEO safe

---

## 🎯 How to Add Your Video Ads

### **Step 1: Prepare Your Video Files**

1. **Export your video ads** from your video editor
2. **Recommended formats:**
   - Format: **MP4** (H.264 codec)
   - Sizes:
     - Top/Bottom banners: **1280x200px** (or 728x90)
     - Sidebar ads: **600x500px** (or 300x250)
     - Inline ads: **1920x1080px** (or 16:9 ratio)
   - File size: **< 2MB per video** (for fast loading)
   - Duration: **10-30 seconds** (looping)

3. **Name your video files:**
   ```
   top-banner.mp4
   sidebar-left.mp4
   sidebar-right.mp4
   inline-ad.mp4
   bottom-banner.mp4
   ```

### **Step 2: Upload Videos to Your Project**

**Option A: Local Files (for testing)**
1. Create a `public/ads/` folder in your project root
2. Copy your video files there:
   ```
   public/
   └── ads/
       ├── top-banner.mp4
       ├── sidebar-left.mp4
       ├── sidebar-right.mp4
       ├── inline-ad.mp4
       └── bottom-banner.mp4
   ```

**Option B: CDN/Cloud Storage (recommended for production)**
1. Upload to:
   - **Vercel Blob Storage** (easiest, integrated with Vercel)
   - **Cloudinary** (free tier, video optimizations)
   - **AWS S3** (scalable)
   - **Google Cloud Storage**

2. Get the public URLs for each video

### **Step 3: Update Video URLs in `app/page.tsx`**

Open `app/page.tsx` and update the `videoUrl` properties:

#### **Top Banner Ad (Line ~54)**
```typescript
<AdBanner
  slot="top-banner"
  videoUrl="/ads/top-banner.mp4"  // ← Update this
  clickUrl="https://your-product-page.com"  // ← Your landing page
  title="Special Offer"
/>
```

#### **Left Sidebar Ad (Line ~68)**
```typescript
<AdBanner
  slot="sidebar-left"
  videoUrl="/ads/sidebar-left.mp4"  // ← Update this
  clickUrl="https://your-product-page.com"
  title="Premium Features"
/>
```

#### **Inline Ad - After Result (Line ~116)**
```typescript
<AdBanner
  slot="inline"
  videoUrl="/ads/inline-ad.mp4"  // ← Update this
  clickUrl="https://your-product-page.com"
  title="🎉 Special Promotion - Limited Time!"
/>
```

#### **Right Sidebar Ad (Line ~218)**
```typescript
<AdBanner
  slot="sidebar-right"
  videoUrl="/ads/sidebar-right.mp4"  // ← Update this
  clickUrl="https://your-product-page.com"
  title="Exclusive Offer"
/>
```

#### **Bottom Banner Ad (Line ~231)**
```typescript
<AdBanner
  slot="bottom-banner"
  videoUrl="/ads/bottom-banner.mp4"  // ← Update this
  clickUrl="https://your-product-page.com"
  title="Don't Miss Out"
/>
```

### **Step 4: Test Your Ads Locally**

```bash
# In your terminal
npm run dev
```

Visit `http://localhost:3000` and check:
- ✅ Videos load and play automatically
- ✅ Videos loop continuously
- ✅ Ads are muted (required for autoplay)
- ✅ Click URLs work correctly
- ✅ Sidebars are sticky (scroll to test)
- ✅ Mobile: sidebars hidden, only top/bottom/inline ads show

---

## 📊 Ad Strategy & Best Practices

### **Ad Placement Performance (Best to Worst):**

1. **Inline Ad (After Result)** 🏆
   - **Highest engagement** - Users just got value from your tool
   - Place after the generated prompt
   - Best for conversions

2. **Right Sidebar** 🥈
   - **Always visible** (sticky)
   - Catches attention while reading
   - Good for branding

3. **Top Banner** 🥉
   - **First impression** - seen by everyone
   - Good for awareness
   - Lower click-through rate

4. **Left Sidebar**
   - Similar to right sidebar
   - Less attention (people read left-to-right)

5. **Bottom Banner**
   - **Lowest engagement** - seen only after scrolling
   - Still valuable for brand awareness

### **Video Ad Best Practices:**

✅ **DO:**
- Keep videos **10-30 seconds** long
- Use **bright, contrasting colors**
- Add **clear CTA** (Call-To-Action) in the video
- Show **product benefits** quickly (first 3 seconds!)
- Use **text overlays** (some users have sound off)
- Test **different versions** (A/B testing)
- Track **click-through rates**

❌ **DON'T:**
- Don't use sound (autoplay requires muted)
- Don't make videos too long (>30s)
- Don't be too "salesy" (provide value first)
- Don't use low-quality videos (reflects on brand)
- Don't change ads too frequently (confuses users)

---

## 🎨 Customizing Ad Appearance

### **Change Ad Colors/Style**

Edit `components/AdBanner.tsx`:

#### **Change Background Gradient:**
```typescript
// Find this line (around line 32, 66, 105):
bg-gradient-to-br from-primary-light/20 to-primary/20

// Change to:
bg-gradient-to-br from-purple-500/20 to-blue-500/20
```

#### **Change Border Color:**
```typescript
// Find:
border border-white/10

// Change to:
border border-secondary/30  // Use your brand color
```

#### **Change Hover Effect:**
```typescript
// Find:
hover:border-secondary/40 hover:shadow-secondary/10

// Customize the glow color and intensity
```

### **Change Ad Sizes**

#### **Make Sidebar Taller:**
```typescript
// In AdBanner.tsx, find (line ~66):
min-h-[250px] h-[250px]

// Change to:
min-h-[600px] h-[600px]  // For 300x600 "skyscraper" ads
```

#### **Make Banners Taller:**
```typescript
// Find (line ~32):
h-[90px] md:h-[100px]

// Change to:
h-[120px] md:h-[150px]
```

---

## 📈 Tracking Ad Performance

### **Option 1: Add Google Analytics Click Tracking**

Update `components/AdBanner.tsx`:

```typescript
const handleClick = () => {
  // Track click event
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'ad_click', {
      ad_slot: slot,
      ad_url: clickUrl,
    });
  }

  if (clickUrl) {
    window.open(clickUrl, '_blank', 'noopener,noreferrer');
  }
};
```

### **Option 2: Track Impressions (Views)**

Add this to `AdBanner.tsx` inside the `useEffect`:

```typescript
useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoaded(true);
    
    // Track impression
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'ad_impression', {
        ad_slot: slot,
      });
    }
  }, 300);
  
  return () => clearTimeout(timer);
}, [slot]);
```

---

## 🚀 Advanced: Multiple Ad Campaigns

If you want to **rotate different ads** (A/B testing):

### **Create Multiple Videos**

```
public/ads/
├── campaign-1/
│   ├── top-banner.mp4
│   ├── sidebar-left.mp4
│   └── inline-ad.mp4
└── campaign-2/
    ├── top-banner.mp4
    ├── sidebar-left.mp4
    └── inline-ad.mp4
```

### **Randomly Select Campaign**

Update `app/page.tsx`:

```typescript
const [adCampaign] = useState(() => {
  // Randomly select campaign
  return Math.random() > 0.5 ? 'campaign-1' : 'campaign-2';
});

// Then use in AdBanner:
<AdBanner
  slot="top-banner"
  videoUrl={`/ads/${adCampaign}/top-banner.mp4`}
  clickUrl="https://your-product-page.com"
  title="Special Offer"
/>
```

---

## 💰 Monetization Strategies

### **Option 1: Direct Sponsor Ads (Your Videos)**
- **Highest revenue** potential
- Full control
- Requires finding sponsors
- **Pricing:** $5-50 CPM (cost per 1000 impressions)

### **Option 2: Affiliate Marketing**
- Promote products you use
- Earn commission on sales (5-30%)
- Replace `clickUrl` with your affiliate link
- **Example:** Promote AI tools, hosting, etc.

### **Option 3: Your Own Products/Services**
- **Best long-term** strategy
- 100% revenue
- Build trust with your audience
- **Example:** Premium features, courses, tools

### **Option 4: Google AdSense (Auto Ads)**
- **Easiest** to set up
- Lower revenue ($1-5 CPM)
- Let Google handle ads
- Can run **alongside** your video ads!

### **Recommended Strategy:**
1. Start with **your own product** ads (highest value)
2. Add **affiliate ads** for secondary spots
3. Enable **Google AdSense** for remaining space
4. As traffic grows, approach **direct sponsors**

---

## 📊 Expected Revenue (with 10,000 monthly visitors)

### **Scenario 1: Direct Sponsor Ads**
- **CPM:** $20
- **Ad impressions:** ~50,000/month (5 ads per visit)
- **Revenue:** $1,000/month

### **Scenario 2: Affiliate Marketing**
- **Conversion rate:** 2%
- **Commission:** $50/sale
- **Conversions:** 200 clicks → 4 sales
- **Revenue:** $200/month

### **Scenario 3: Your Own Product ($29)**
- **Conversion rate:** 1%
- **Sales:** 100
- **Revenue:** $2,900/month

### **Combined Strategy:**
- **Direct ads:** $400/month
- **Affiliate:** $200/month
- **Your product:** $2,900/month
- **AdSense:** $150/month
- **TOTAL:** ~$3,650/month

---

## 🎯 Next Steps

### **Immediate (Today):**
1. ✅ Create your video ads
2. ✅ Upload to `/public/ads/` folder
3. ✅ Update URLs in `app/page.tsx`
4. ✅ Test locally (`npm run dev`)
5. ✅ Deploy to Vercel (`git push`)

### **This Week:**
1. Track clicks & impressions (Google Analytics)
2. Create 2-3 variations for A/B testing
3. Optimize video length (test 10s vs 20s vs 30s)
4. Add affiliate links
5. Launch your first campaign!

### **This Month:**
1. Analyze performance data
2. Create better-performing videos
3. Reach out to potential sponsors
4. Build your own product to promote
5. Scale with paid traffic

---

## 🛠️ Troubleshooting

### **Videos Not Playing?**
- ✅ Check file format (must be MP4, H.264 codec)
- ✅ Check file size (< 5MB recommended)
- ✅ Ensure videos are in `/public/ads/` folder
- ✅ Clear browser cache (Ctrl+Shift+R)

### **Ads Not Visible on Mobile?**
- ✅ Sidebars are **intentionally hidden** on mobile
- ✅ Only top, inline, and bottom ads show on mobile
- ✅ This is best practice for mobile UX

### **Videos Loading Slowly?**
- ✅ Compress videos (use Handbrake or similar)
- ✅ Use a CDN (Cloudinary, Vercel Blob)
- ✅ Lower video quality (720p is enough)
- ✅ Shorten video duration

### **Click URLs Not Working?**
- ✅ Ensure `clickUrl` starts with `https://`
- ✅ Check for typos in URLs
- ✅ Test in incognito mode

---

## 🎉 You're All Set!

Your website now has a **professional, ad-supported layout** just like SimpleImageResizer! 

**Questions or need help?** 
- Check the troubleshooting section above
- Review the code in `components/AdBanner.tsx`
- Test with different video files
- Monitor performance with Google Analytics

**Good luck with your monetization! 💰**

