export default async function sitemap() {
  const base = "https://www.level2b.com"
  
  return [
    { 
      url: `${base}/`, 
      lastModified: new Date(), 
      changeFrequency: 'weekly' as const, 
      priority: 1 
    },
    { 
      url: `${base}/product`, 
      lastModified: new Date(), 
      changeFrequency: 'monthly' as const, 
      priority: 0.8 
    },
    { 
      url: `${base}/how-it-works`, 
      lastModified: new Date(), 
      changeFrequency: 'monthly' as const, 
      priority: 0.8 
    },
    { 
      url: `${base}/pricing`, 
      lastModified: new Date(), 
      changeFrequency: 'monthly' as const, 
      priority: 0.9 
    },
    { 
      url: `${base}/case-studies`, 
      lastModified: new Date(), 
      changeFrequency: 'monthly' as const, 
      priority: 0.7 
    },
    { 
      url: `${base}/security`, 
      lastModified: new Date(), 
      changeFrequency: 'monthly' as const, 
      priority: 0.7 
    },
    { 
      url: `${base}/about`, 
      lastModified: new Date(), 
      changeFrequency: 'monthly' as const, 
      priority: 0.6 
    },
    { 
      url: `${base}/contact`, 
      lastModified: new Date(), 
      changeFrequency: 'monthly' as const, 
      priority: 0.8 
    },
    { 
      url: `${base}/privacy`, 
      lastModified: new Date(), 
      changeFrequency: 'yearly' as const, 
      priority: 0.3 
    },
    { 
      url: `${base}/terms`, 
      lastModified: new Date(), 
      changeFrequency: 'yearly' as const, 
      priority: 0.3 
    },
    { 
      url: `${base}/cookies`, 
      lastModified: new Date(), 
      changeFrequency: 'yearly' as const, 
      priority: 0.3 
    },
  ]
}
