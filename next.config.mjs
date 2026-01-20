/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    // ✅ Valid in Next 14 (keeps these deps from being bundled weirdly in server runtime)
    serverComponentsExternalPackages: ["puppeteer-core", "@sparticuz/chromium"],
  },
};

export default nextConfig;

