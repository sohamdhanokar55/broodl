import { Fugaz_One, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "@/context/AuthContext";
import Head from "./head";
import Logout from "@/components/Logout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const Fugaz_Onec = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Broodl",
  description: "Track your daily mood everyday of the year",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <Link href="/">
        <h1
          className={
            "text-base sm:text-lg textGradient " + Fugaz_Onec.className
          }
        >
          Broodl
        </h1>
      </Link>
      <Logout />
    </header>
  );
  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className={"text-indigo-600 text-center " + Fugaz_Onec.className}>
        Created with 💗<br></br> By Soham Dhanokar
      </p>
    </footer>
  );

  return (
    <html lang="en">
      <Head />
      <body
        className={
          `${geistSans.variable} ${geistMono.variable} antialiased` +
          " w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 "
        }
      >
        <AuthProvider>
          {header}
          {children}
          {footer}
        </AuthProvider>
      </body>
    </html>
  );
}
