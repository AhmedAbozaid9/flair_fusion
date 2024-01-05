import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";

const dancing_script = Dancing_Script({ weight: "400", subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 bg-white border-t border-t-gray-300 p-2 sm:p-4">
      <div className="flex gap-5 sm:flex-row flex-col items-center justify-around">
        <h1
          className={`whitespace-nowrap text-2xl ${dancing_script.className}`}
        >
          Flair Fusion
        </h1>
        <div className="flex items-center justify-center gap-5">
          <Link href="/">About</Link>
          <Link href="/">Careers</Link>
          <Link href="/">Our Team</Link>
          <Link href="/">Integratoins</Link>
        </div>
        <Link href="/" className="bg-blue-950 py-3 px-6 font-medium text-white">
          Contact Us
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5 my-5">
        <FaFacebook size={25} className="cursor-pointer" />
        <AiFillTwitterCircle size={25} className="cursor-pointer" />
        <RiInstagramFill size={25} className="cursor-pointer" />
        <FaTelegram size={25} className="cursor-pointer" />
      </div>
    </footer>
  );
};

export default Footer;
