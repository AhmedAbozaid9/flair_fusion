import "./globals.css";
import Nav from "@/components/Nav";
import React from "react";
import {Montserrat} from "next/font/google"

export const metadata = {
  title: "Flair Fusion",
  description: "The best fashion website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{fontFamily:'Montserrat'}}>
        <main className="main">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
