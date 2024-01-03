import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@components/Footer";
import React from "react";
import { Rubik } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
            <ToastContainer
              limit={2}
              position="top-center"
              autoClose={2000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
