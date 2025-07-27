import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import styles from './page'
import Footer from "@/components/layout/Footer";
import Main from "@/components/layout/Main";
import ThemeToggle from "@/components/ui/ThemeToggler";


export const metadata: Metadata = {
  title: "EmadunanHub",
  description: "Emadunan portfolio page and tools hub",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Main>
          {children}
          <ThemeToggle />
        </Main>
        <Footer />
      </body>
    </html>
  );
}
