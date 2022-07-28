/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["help.twitter.com", "pic.onlinewebfonts.com"]
  },
  swcMinify: true,
}

module.exports = nextConfig
