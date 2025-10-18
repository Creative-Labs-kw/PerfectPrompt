# 🔧 Technical Specifications - Perfect Prompt

Complete technical documentation for developers.

## 📊 Technology Stack

### Frontend Framework
- **Next.js**: 14.2.3 (latest stable)
- **React**: 18.3.1
- **TypeScript**: 5.4.5

### Styling
- **Tailwind CSS**: 3.4.3
- **PostCSS**: 8.4.38
- **Autoprefixer**: 10.4.19

### Backend/API
- **OpenAI SDK**: 4.47.1
- **Next.js API Routes**: Serverless functions
- **Runtime**: Node.js (for OpenAI SDK compatibility)

### Build Tools
- **TypeScript Compiler**: 5.4.5
- **ESLint**: 8.57.0
- **next-sitemap**: 4.2.3

### Fonts
- **Inter**: Google Fonts (English)
- **Cairo**: Google Fonts (Arabic)

## 🏗️ Architecture

### Pattern
- **Server Components**: Default for static content
- **Client Components**: Interactive UI ('use client')
- **API Routes**: Serverless Edge/Node functions
- **Hybrid Rendering**: SSR + Static Generation

### State Management
- **React Hooks**: useState, useEffect
- **Local Storage**: Language preference
- **No external state library**: Keep it simple

### Data Flow
```
User Input → PromptForm
    ↓
API Call → /api/generate
    ↓
OpenAI GPT-3.5-turbo
    ↓
Response → PromptResult
    ↓
Display + Copy
```

## 📁 Directory Structure

```
perfect-prompt/
│
├── app/                        # Next.js 14 App Router
│   ├── api/                    # API routes
│   │   └── generate/
│   │       └── route.ts        # POST endpoint for AI generation
│   ├── layout.tsx              # Root layout (meta, analytics)
│   ├── page.tsx                # Homepage (client component)
│   ├── loading.tsx             # Loading UI
│   ├── error.tsx               # Error UI
│   └── not-found.tsx           # 404 page
│
├── components/                 # React components
│   ├── AdSense.tsx             # Google AdSense integration
│   ├── GoogleAnalytics.tsx     # GA4 tracking script
│   ├── LangSwitch.tsx          # Language toggle button
│   ├── PromptForm.tsx          # Input form with validation
│   ├── PromptResult.tsx        # Result display with copy
│   ├── ErrorBoundary.tsx       # React error boundary
│   └── Loading.tsx             # Loading spinner
│
├── lib/                        # Utility libraries
│   ├── openai.ts               # OpenAI client & helper function
│   ├── translations.ts         # Bilingual content (EN/AR)
│   ├── utils.ts                # Utility functions
│   └── constants.ts            # App constants
│
├── public/                     # Static assets
│   ├── robots.txt              # SEO robots file
│   ├── sitemap.xml             # SEO sitemap
│   └── manifest.json           # PWA manifest
│
├── styles/
│   └── globals.css             # Global styles + Tailwind directives
│
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions CI/CD
│
├── Configuration Files
│   ├── package.json            # Dependencies & scripts
│   ├── tsconfig.json           # TypeScript configuration
│   ├── tailwind.config.js      # Tailwind customization
│   ├── postcss.config.js       # PostCSS setup
│   ├── next.config.js          # Next.js configuration
│   ├── next-sitemap.config.js  # Sitemap generation
│   ├── vercel.json             # Vercel deployment
│   ├── .eslintrc.json          # ESLint rules
│   ├── .nvmrc                  # Node version (18.17.0)
│   ├── .npmrc                  # npm configuration
│   └── .gitignore              # Git ignore rules
│
└── Documentation (11 files)
```

## 🔌 API Specification

### Endpoint: POST /api/generate

**Request:**
```typescript
interface GenerateRequest {
  topic: string;      // 3-500 characters
  language: 'en' | 'ar';
}
```

**Response (Success):**
```typescript
interface GenerateResponse {
  prompt: string;     // Generated AI prompt
}
```

**Response (Error):**
```typescript
interface ErrorResponse {
  error: string;      // Error message
}
```

**Status Codes:**
- `200`: Success
- `400`: Bad request (invalid input)
- `500`: Server error (OpenAI API failure)

## 🎨 Styling Architecture

### Tailwind Configuration
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#1e3a8a',  // dark blue
        dark: '#0f172a',     // slate-900
      },
      secondary: {
        DEFAULT: '#dc2626',  // red
        hover: '#b91c1c',    // darker red
      },
    },
    fontFamily: {
      sans: ['Inter', 'system-ui'],
      arabic: ['Cairo', 'system-ui'],
    },
  },
}
```

### Custom CSS Classes
- `.btn-primary`: Primary button style
- `.btn-secondary`: Secondary button style
- `.input-field`: Input/textarea style
- `.card`: Card container style
- `.container-custom`: Max-width container
- `.gradient-text`: Gradient text effect
- `.ad-container`: Ad placeholder style

## 🔒 Security Implementation

### Environment Variables
```env
# Server-side only (not exposed to client)
OPENAI_API_KEY=sk-...

# Client-side (NEXT_PUBLIC_ prefix)
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-...
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-...

# Build-time
SITE_URL=https://...
```

### Security Headers (Vercel)
```json
{
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin"
}
```

### Input Validation
- Topic: Required, string, 3-500 chars
- Language: Required, enum ['en', 'ar']
- Sanitization on server-side

## 📊 Performance Optimizations

### Next.js Features
- **Automatic Code Splitting**: Per-page bundles
- **Image Optimization**: next/image (when added)
- **Font Optimization**: next/font with Google Fonts
- **Script Optimization**: next/script with strategies

### Loading Strategies
- **Analytics**: `strategy="afterInteractive"`
- **AdSense**: `strategy="afterInteractive"`
- **Fonts**: `display=swap`

### Bundle Optimization
- Tree shaking enabled
- Minification in production
- Compression enabled
- No unused dependencies

## 🌍 Internationalization (i18n)

### Supported Languages
```typescript
type Language = 'en' | 'ar';
```

### Implementation
- Language toggle in header
- Stored in localStorage
- Affects:
  - UI direction (LTR/RTL)
  - HTML lang attribute
  - All text content
  - OpenAI prompt generation

### RTL Support
```css
html[lang='ar'] body {
  direction: rtl;
  font-family: 'Cairo', system-ui;
}
```

## 🔍 SEO Implementation

### Meta Tags (layout.tsx)
```typescript
export const metadata: Metadata = {
  title: '...',
  description: '...',
  keywords: [...],
  openGraph: {...},
  twitter: {...},
  robots: {...},
  alternates: {
    canonical: '...',
    languages: {'en-US': '...', 'ar-KW': '...'}
  }
}
```

### JSON-LD Schema
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Perfect Prompt",
  "description": "...",
  "url": "...",
  "author": {
    "@type": "Organization",
    "address": {
      "addressCountry": "Kuwait"
    }
  }
}
```

### Sitemap Generation
- Auto-generated on build via `next-sitemap`
- Includes language alternates
- Updates automatically

## 📱 Responsive Breakpoints

```css
/* Tailwind default breakpoints */
sm: 640px   // Small devices
md: 768px   // Medium devices (tablets)
lg: 1024px  // Large devices (desktops)
xl: 1280px  // Extra large devices
2xl: 1536px // 2X large devices
```

### Testing Viewports
- Mobile: 375px (iPhone SE)
- Tablet: 768px (iPad)
- Desktop: 1920px (Full HD)

## 🧪 Testing Strategy

### Type Checking
```bash
npx tsc --noEmit
```

### Linting
```bash
npm run lint
```

### Build Test
```bash
npm run build
```

### Manual Testing Checklist
- [ ] English UI works
- [ ] Arabic UI works (RTL)
- [ ] Prompt generation works
- [ ] Copy to clipboard works
- [ ] Language toggle works
- [ ] Mobile responsive
- [ ] Error handling
- [ ] Loading states
- [ ] 404 page

## 🚀 Deployment Configuration

### Vercel (vercel.json)
```json
{
  "framework": "nextjs",
  "regions": ["iad1"],
  "headers": [...]
}
```

### Build Command
```bash
npm run build
```

### Output Directory
```
.next/
```

### Environment Variables Required
- `OPENAI_API_KEY` (required)
- `SITE_URL` (required for production)
- Others optional

## 📈 Analytics Events

### Google Analytics 4
- Page views (automatic)
- Language changes (potential)
- Prompt generations (potential)
- Copy actions (potential)

### Custom Events (Future)
```javascript
gtag('event', 'generate_prompt', {
  'language': 'en',
  'topic_length': 50
});
```

## 🔮 Extensibility

### Adding New Languages
1. Update `Language` type in `translations.ts`
2. Add translation object
3. Update `LangSwitch` component
4. Test RTL if needed

### Adding New AI Models
1. Update `openai.ts` with new model logic
2. Add model selection UI
3. Update API route
4. Test thoroughly

### Adding Authentication
1. Install auth library (NextAuth.js)
2. Create auth routes
3. Protect API routes
4. Add user context

## 📦 Dependencies

### Production
```json
{
  "next": "14.2.3",
  "react": "18.3.1",
  "react-dom": "18.3.1",
  "openai": "4.47.1",
  "clsx": "2.1.1"
}
```

### Development
```json
{
  "@types/node": "20.12.12",
  "@types/react": "18.3.2",
  "@types/react-dom": "18.3.0",
  "typescript": "5.4.5",
  "tailwindcss": "3.4.3",
  "eslint": "8.57.0",
  "next-sitemap": "4.2.3"
}
```

## 🎯 Performance Targets

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Bundle Sizes
- **First Load JS**: < 200KB
- **Total Bundle**: < 500KB

## 🔧 Development Tools

### VS Code Extensions (Recommended)
- ESLint
- Tailwind CSS IntelliSense
- TypeScript and JavaScript
- Prettier

### Browser DevTools
- React Developer Tools
- Lighthouse
- Network tab for API debugging

## 📝 Code Standards

### TypeScript
- Strict mode enabled
- No `any` types (use `unknown`)
- Interfaces for objects
- Types for primitives

### React
- Functional components only
- Hooks for state management
- Props interface for each component
- 'use client' directive when needed

### CSS
- Tailwind utility classes preferred
- Custom CSS in globals.css only
- Mobile-first approach
- RTL support for Arabic

### Naming Conventions
- Components: PascalCase (e.g., `PromptForm`)
- Functions: camelCase (e.g., `generatePrompt`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_KEY`)
- Files: PascalCase for components, camelCase for utils

---

**Perfect Prompt** - Built with modern best practices and scalable architecture.

