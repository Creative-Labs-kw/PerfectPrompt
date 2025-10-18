/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://perfectprompt.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: '/api/',
      },
    ],
    additionalSitemaps: [],
  },
  exclude: ['/api/*'],
  alternateRefs: [
    {
      href: 'https://perfectprompt.vercel.app',
      hreflang: 'en',
    },
    {
      href: 'https://perfectprompt.vercel.app/ar',
      hreflang: 'ar',
    },
  ],
}

