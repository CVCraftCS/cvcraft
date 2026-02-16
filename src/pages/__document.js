import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* PWA / App icons */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#020617" />

        {/* Optional: nicer Windows tiles */}
        <meta name="msapplication-TileColor" content="#020617" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
