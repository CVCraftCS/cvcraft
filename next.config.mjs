/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    // ✅ Valid in Next 14 (keeps these deps from being bundled weirdly in server runtime)
    serverComponentsExternalPackages: ["puppeteer-core", "@sparticuz/chromium"],
  },

  async redirects() {
    return [
      // Old root URLs → new /cv-examples/ URLs (301)
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

      // Safety redirects in case any older links exist (harmless if never used)
      {
        source: "/construction-labourer-cv-example-uk",
        destination: "/cv-examples/construction-labourer-cv-example-uk",
        permanent: true,
      },
      {
        source: "/cleaner-cv-example-uk",
        destination: "/cv-examples/cleaner-cv-example-uk",
        permanent: true,
      },
      {
        source: "/delivery-driver-cv-example-uk",
        destination: "/cv-examples/delivery-driver-cv-example-uk",
        permanent: true,
      },
      {
        source: "/security-guard-cv-example-uk",
        destination: "/cv-examples/security-guard-cv-example-uk",
        permanent: true,
      },
      {
        source: "/sales-assistant-cv-example-uk",
        destination: "/cv-examples/sales-assistant-cv-example-uk",
        permanent: true,
      },
      {
        source: "/admin-assistant-cv-example-uk",
        destination: "/cv-examples/admin-assistant-cv-example-uk",
        permanent: true,
      },
      {
        source: "/care-assistant-cv-example-uk",
        destination: "/cv-examples/care-assistant-cv-example-uk",
        permanent: true,
      },
      {
        source: "/support-worker-cv-example-uk",
        destination: "/cv-examples/support-worker-cv-example-uk",
        permanent: true,
      },
      {
        source: "/teaching-assistant-cv-example-uk",
        destination: "/cv-examples/teaching-assistant-cv-example-uk",
        permanent: true,
      },
      {
        source: "/barista-cv-example-uk",
        destination: "/cv-examples/barista-cv-example-uk",
        permanent: true,
      },
      {
        source: "/receptionist-cv-example-uk",
        destination: "/cv-examples/receptionist-cv-example-uk",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
