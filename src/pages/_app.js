// src/pages/_app.js
import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  // ✅ Default SEO (can be overridden per-page later via <Head> in that page)
  const defaultTitle = "CVCraft Classroom — Recruiter-ready CVs in minutes";
  const defaultDescription =
    "Create a clean, recruiter-ready CV in minutes. Classroom-safe mode for teachers. UK, US and AU formats. Free cover letter generator included.";
  const siteUrl = "https://www.cvcraftclassroom.com";

  // Optional: allow pages to pass meta via pageProps.meta if you ever want that pattern
  const title =
    (pageProps && pageProps.meta && pageProps.meta.title) || defaultTitle;
  const description =
    (pageProps && pageProps.meta && pageProps.meta.description) ||
    defaultDescription;
  const canonical =
    (pageProps && pageProps.meta && pageProps.meta.canonical) || siteUrl;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <title>{title}</title>
        <meta name="description" content={description} />

        {/* ✅ Canonical (prevents duplicate host/path issues) */}
        <link rel="canonical" href={canonical} />

        {/* ✅ Indexing defaults */}
        <meta name="robots" content="index,follow" />

        {/* ✅ Open Graph (sharing previews) */}
        <meta property="og:site_name" content="CVCraft Classroom" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        {/* Optional: nice-to-have */}
        <meta name="theme-color" content="#0f172a" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
