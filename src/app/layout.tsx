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
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "Sahil Nayak",
    "Sahil Nayak LinkedIn",
    "sahil-nayak-dev",
    "Sahil Nayak Developer",
    "Sahil Nayak Full Stack Developer",
    "Sahil Nayak AI Engineer",
    "Sahil Nayak Bhubaneswar",
    "Sahil Nayak Odisha",
    "Sahil Nayak BEC",
    "Sahil Nayak BPUT",
    "Sahil Nayak OSP",
    "Sahil Nayak Software Engineer",
    "Sahil Nayak Resume",
    "Full Stack Developer Odisha",
    "AI Developer India",
    "MERN Stack Developer Bhubaneswar",
    "B.Tech Computer Science and Data Science",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.linkedin }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "profile",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: "Sahil Nayak Portfolio & LinkedIn Profile",
    locale: "en_US",
    images: [
      {
        url: `${siteConfig.url}/profile.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Full Stack Developer & AI Engineer (LinkedIn: sahil-nayak-dev)`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/profile.jpg`],
    creator: "@sahilnayakdev",
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
  // Comprehensive Schema.org JSON-LD structured data for Google & LinkedIn Knowledge Graph
  const jsonLdSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      "name": siteConfig.name,
      "alternateName": ["Sahil Nayak Dev", "Sahil Nayak LinkedIn", "Sahil Nayak OSP"],
      "url": siteConfig.url,
      "image": `${siteConfig.url}/profile.jpg`,
      "sameAs": [
        siteConfig.linkedin,
        siteConfig.linkedinClean,
        siteConfig.github,
      ],
      "jobTitle": "Full Stack Developer & AI Engineer",
      "description": siteConfig.description,
      "email": siteConfig.email,
      "telephone": siteConfig.phone,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhubaneswar",
        "addressRegion": "Odisha",
        "addressCountry": "India",
      },
      "knowsAbout": [
        "Full Stack Web Development",
        "AI & Machine Learning",
        "MERN Stack",
        "React.js",
        "Next.js",
        "Node.js",
        "Python",
        "Java",
        "FastAPI",
        "OpenCV",
        "MySQL",
        "SQLite",
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Odisha Service Point (OSP)",
        "url": "https://vercel.com/nayaksahil445-hues-projects/osp24",
      },
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Bhubaneswar Engineering College (BEC)",
        },
        {
          "@type": "EducationalOrganization",
          "name": "Biju Patnaik University of Technology (BPUT)",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#profilepage`,
      "url": siteConfig.url,
      "name": `${siteConfig.name} - LinkedIn & Web Portfolio`,
      "mainEntity": {
        "@id": `${siteConfig.url}/#person`,
      },
      "dateCreated": "2025-01-01T00:00:00Z",
      "dateModified": new Date().toISOString(),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      "url": siteConfig.url,
      "name": "Sahil Nayak Dev Portfolio",
      "publisher": {
        "@id": `${siteConfig.url}/#person`,
      },
    },
  ];

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="me" href={siteConfig.linkedin} />
        <link rel="me" href={siteConfig.linkedinClean} />
        <link rel="me" href={siteConfig.github} />
        {jsonLdSchemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#0A0E1A] text-white min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
