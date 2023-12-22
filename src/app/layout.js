import "./globals.css";
import Nav from "@/components/Nav";
import React from "react";
import { Rubik } from "next/font/google";

import Provider from "@components/Provider";

export const metadata = {
  title: "Flair Fusion",
  description: "The best fashion website",
};

const rubik = Rubik({ weight: "400", subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Provider>
          <main className="main">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
