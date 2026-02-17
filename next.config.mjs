/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    // ✅ Valid in Next 14 (keeps these deps from being bundled weirdly in server runtime)
    serverComponentsExternalPackages: ["puppeteer-core", "@sparticuz/chromium"],
  },

  async redirects() {
    return [
      {
        source: "/warehouse-cv-example-uk",
        destination: "/cv-examples/warehouse-cv-example-uk",
        permanent: true,
      },
      {
        source: "/retail-cv-example-uk",
        destination: "/cv-examples/retail-cv-example-uk",
        permanent: true,
      },
      {
        source: "/customer-service-cv-example-uk",
        destination: "/cv-examples/customer-service-cv-example-uk",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
