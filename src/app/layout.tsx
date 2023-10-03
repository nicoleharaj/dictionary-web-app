import "./globals.css";
import type { Metadata } from "next";
import { Inter, Inconsolata, Lora } from "next/font/google";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto_mono = Inconsolata({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Dictionary web app",
  description: "Coding challenge from Frontend Mentor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto_mono.variable} ${lora.variable}`}
    >
      <body className="text-body-md flex w-screen flex-col items-center overflow-x-hidden text-neutral-600">
        <main className="flex w-full max-w-[737px] flex-col gap-11 pb-[124px]">
          <Navbar />
          <SearchBox />
          {children}
        </main>
      </body>
    </html>
  );
}
