import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

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
        <Header />
        {children}
        <Footer />
        <ToastContainer className={"text-shadow-none w-[320px] text-[8px]"} />
      </body>
    </html>
  );
}
