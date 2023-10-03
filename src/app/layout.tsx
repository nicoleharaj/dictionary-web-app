import "./globals.css";
import type { Metadata } from "next";
import { Inter, Inconsolata, Lora } from "next/font/google";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import { ThemeProvider } from "./providers/ThemeProvider";

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
      <body className="flex w-screen flex-col items-center overflow-x-hidden px-[24px] text-body-md text-neutral-600 dark:text-white md:px-[39px]">
        <main className="flex w-full max-w-[737px] flex-col gap-[23px] pb-[85px] md:gap-[41px] md:pb-[124px] lg:gap-[43px]">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            <SearchBox />
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
