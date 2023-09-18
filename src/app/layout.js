import "./globals.css";
import Nav from "@/components/Nav";
import React from "react";

export const metadata = {
  title: "Flair Fusion",
  description: "The best shopping website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="main">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
