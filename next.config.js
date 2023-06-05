/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.redd.it", "www.reddit.com"],
  },
};

module.exports = nextConfig;
