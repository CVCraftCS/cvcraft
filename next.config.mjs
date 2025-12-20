/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 🔑 CRITICAL: allow Puppeteer + Chromium to load at runtime on Vercel
  serverExternalPackages: ["puppeteer-core", "@sparticuz/chromium"],

  experimental: {
    serverComponentsExternalPackages: ["puppeteer-core", "@sparticuz/chromium"],
  },
};

export default nextConfig;
