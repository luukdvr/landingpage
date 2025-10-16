/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/trial',
        destination: '/start-trial',
        permanent: true,
      },
      {
        source: '/demo',
        destination: '/contact',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
