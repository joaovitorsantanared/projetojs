import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CheckTime",
  description: "Sistema de registro e gerenciamento de ponto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Script
          src="https://js-cdn.dynatrace.com/jstag/176fb25782e/bf84867vgb/c6dcaeb5d8926c95_complete.js"
          strategy="beforeInteractive"
          crossOrigin="anonymous"
        />
        {children}
      </body>
    </html>
  );
}