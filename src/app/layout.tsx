import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FA Medya - Web Sitesi",
  description: "FA Medya fotoğraf ve video çekim hizmetleri, etkinlik, reklam ve kişisel fotoğrafçılık hizmetleri.",
  keywords: ["medya", "ajans", "fotoğraf", "video", "kurgu", "fotoğrafçılık", "reklam", "sosyal medya", "etkinlik", "düğün", "cemiyet"],
  authors: [{ name: "Fatih Kurt", url: "https://fatihkurt.web.tr/" }],
  openGraph: {
    title: "FA Medya - Web Sitesi",
    description: "FA Medya fotoğraf ve video çekim hizmetleri, etkinlik, reklam ve kişisel fotoğrafçılık hizmetleri.",
    url: "https://FAmedya.com",
    siteName: "FA Medya",
    images: [
      {
        url: "https://myawesomeapp.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "FA Medya OG Image",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FA Medya - Web Sitesi",
    description: "FA Medya fotoğraf ve video çekim hizmetleri, etkinlik, reklam ve kişisel fotoğrafçılık hizmetleri.",
    images: ["https://myawesomeapp.com/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-50`}
      >
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
      <GoogleAnalytics gaId="G-XYZ" />
    </html>
  );
}
