import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://strahinjakovic.dev',
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://strahinjakovic.dev/web-development',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
