import "./globals.scss";
import "swiper/css";

import type { Metadata } from "next";

import { Header } from "./components/Header";
import localFont from "next/font/local";
import { Providers } from "./store/provider";
import { Navigation } from "./components";
import { Footer } from "./components/Footer";

const gilroy = localFont({
  src: [
    {
      path: "./src/fonts/Gilroy-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./src/fonts/Gilroy-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    { path: "./src/fonts/Gilroy-Light.woff2", weight: "300", style: "normal" },
    { path: "./src/fonts/Gilroy-Thin.woff2", weight: "200", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Стройград",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <Providers>
        <body className={gilroy.className}>
          <Navigation />
          <Header />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
