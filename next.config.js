/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["help.twitter.com", "pic.onlinewebfonts.com", "lh3.googleusercontent.com"]
  },
  swcMinify: true,
}

module.exports = nextConfig
