export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/onboarding/', '/api/'],
    },
    sitemap: 'https://www.level2b.com/sitemap.xml',
  }
}
