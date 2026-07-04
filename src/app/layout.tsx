import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site-config";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "Sahil Nayak",
    "Sahil Nayak Developer",
    "Full Stack Developer Odisha",
    "AI Developer",
    "Data Science Student",
    "Bhubaneswar Developer",
    "B.Tech Computer Science and Data Science",
    "OSP Founder",
    "Odisha Service Point",
  ],
  authors: [{ name: siteConfig.name }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/profile.jpg`,
        width: 800,
        height: 800,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/profile.jpg`],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Person schema LD-JSON
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "image": `${siteConfig.url}/profile.jpg`,
    "sameAs": [siteConfig.linkedin, siteConfig.github],
    "jobTitle": "Full Stack Developer & AI Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Odisha Service Point (OSP)",
    },
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Biju Patnaik University of Technology",
      },
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#050816] text-white min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
