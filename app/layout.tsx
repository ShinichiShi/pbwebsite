import "./css/style.css";
import { Inter } from "next/font/google";
import Header from "@/components/ui/header";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { Viewport } from "next";
import Link from "next/link";

config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Point Blank",
  description: "A group of developers who love to code.",
  keywords: ["developers", "coding", "programming", "software"],
  author: "Point Blank Team",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <meta name="google-site-verification" content="zWannxDP9lamkzRzClm_XzptP358-K_1YHVz6adUrnQ" />
      <body
        className={`${inter.variable} font-inter antialiased bg-black text-white tracking-tight`}
      >
        <NextThemesProvider>
          <Link href="/pbctf" className="flex w-full bg-yellow-500 text-black p-2 justify-center items-center text-center z-50 fixed top-0 left-0">
            🚨 PBCTF Registration is LIVE! 🚨
          </Link>
          <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip pt-10">
            <Header />
            {children}
          </div>
        </NextThemesProvider>
      </body>
    </html>
  );
}
