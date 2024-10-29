import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";

const pixellari = localFont({
  src: "./fonts/Pixellari.ttf",
  variable: "--font-pixellari",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Twench",
  description: "Make it out the twench.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pixellari.className} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
