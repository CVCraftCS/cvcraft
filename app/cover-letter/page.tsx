import CoverLetterClient from "./CoverLetterClient";

const canonical = "https://www.cvcraftclassroom.com/cover-letter";
const ogImage = "https://www.cvcraftclassroom.com/og/cover-letter.png";

export const metadata = {
  title: "Free Cover Letter Generator UK (2026) | No Signup | CVCraft",
  description:
    "Generate a professional UK cover letter in minutes. Free cover letter generator for students and job seekers — no sign-up, no subscriptions.",
  robots: { index: true, follow: true },
  alternates: { canonical },
  openGraph: {
    title: "Free Cover Letter Generator UK (2026) | No Signup | CVCraft",
    description:
      "Generate a professional UK cover letter in minutes. Free cover letter generator for students and job seekers — no sign-up, no subscriptions.",
    url: canonical,
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Free UK Cover Letter Generator – No Signup Required",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Cover Letter Generator UK (2026) | No Signup | CVCraft",
    description:
      "Generate a professional UK cover letter in minutes. Free cover letter generator for students and job seekers — no sign-up, no subscriptions.",
    images: [ogImage],
  },
};

export default function CoverLetterPage() {
  return <CoverLetterClient />;
}
