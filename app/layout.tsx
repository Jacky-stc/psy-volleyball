import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import HamburgerMenu from "@/components/HamburgerMenu";
import React from "react";

export const metadata: Metadata = {
  title: "政治大學心理系排",
  description: "政治大學心理學系排球隊",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header></Header>
        <HamburgerMenu></HamburgerMenu>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
