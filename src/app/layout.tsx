import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { ABOUT_ME } from "@/components/constants/data";
import PageLoader from "@/components/ui/page-loader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "abhinesh",
  description: ABOUT_ME.description[0],
  keywords: [
    ABOUT_ME.name,
    "Software Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Java",
    "Spring Boot",
    "Backend Developer",
    "Open Source",
  ],
  authors: [{ name: ABOUT_ME.name }],
  creator: ABOUT_ME.name,
  publisher: ABOUT_ME.name,
  metadataBase: new URL("https://abhineshhh.me"), // Assuming this is the domain based on resume link
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhineshhh.me",
    title: `${ABOUT_ME.name} - ${ABOUT_ME.title}`,
    description: ABOUT_ME.description[0],
    siteName: `${ABOUT_ME.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${ABOUT_ME.name} - ${ABOUT_ME.title}`,
    description: ABOUT_ME.description[0],
    creator: ABOUT_ME.username,
  },
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
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />

        {/* Font Preloading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* JSON-LD structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: ABOUT_ME.name,
              url: "https://abhineshhh.me",
              jobTitle: ABOUT_ME.title,
              description: ABOUT_ME.description[0],
              knowsAbout: [
                "Java",
                "Spring Boot",
                "React",
                "Next.js",
                "TypeScript",
                "System Design",
                "Open Source",
              ],
              sameAs: [
                "https://github.com/Abhineshhh",
                "https://linkedin.com/in/abhineshjha",
                "https://twitter.com/Abhineshhh",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} ${sourceSerif.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <PageLoader />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
