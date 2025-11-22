import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import ReloadOnHome from "@/components/ReloadOnHome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outFit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"]
})

export const metadata = {
  title: "Data-House | Free High-Quality Datasets for Analysis & Projects",
  description:
    "Find any type of dataset instantly — CSV, JSON, Excel, AI datasets, ML datasets, public data sources, and more. Perfect for students, developers, researchers, and data scientists.",
  keywords: [
    "datasets",
    "free datasets",
    "AI datasets",
    "machine learning datasets",
    "public datasets",
    "csv datasets",
    "data analysis",
    "open data",
  ],
  authors: [{ name: "Data-House" }],
  openGraph: {
    title: "Data-House | Download Free High-Quality Datasets",
    description:
      "Instant access to clean, ready-to-use datasets for AI, ML, analytics, academics, and research.",
    url: "https://data-house.vercel.app",
    siteName: "Data-House",
    images: [
      {
        url: "/white_heart.png",
        width: 1200,
        height: 630,
        alt: "Data-House Datasets Library",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data-House",
    description:
      "Download any type of dataset — fast, free, structured, and ready for analysis.",
    images: ["/white_heart.png"],
  },
  other: {
    "google-site-verification": "_xGghAoUguZ4TpAyDAUabY9DEElaozTuj0U_JluN0IE",
  },
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outFit.variable} antialiased`}
        style={{ fontFamily: "var(--font-outfit)" }}
      >
        <ReloadOnHome />
        {children}
        <meta name="google-site-verification" content="_xGghAoUguZ4TpAyDAUabY9DEElaozTuj0U_JluN0IE" />
      </body>
    </html>
  );
}
