"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import SearchField from "@components/SearchField";
import { Divide as Hamburger } from "hamburger-react";

const dancing_script = Dancing_Script({ weight: "400", subsets: ["latin"] });

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;

      setScrollingUp(st < lastScrollTop);
      setIsOpen(false);
      lastScrollTop = st <= 115 ? 115 : st;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: scrollingUp ? 0 : -145 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 right-0 left-0 z-[999] border-b-1 bg-white"
    >
      {/*desktop nav*/}
      <div className="w-full bg-white py-4 z-50 hidden md:flex justify-between flex-col sticky top-0 right-0 left-0">
        <div className="flex justify-between items-center">
          <Link href="/" className="pr-4">
            <h1
              className={`whitespace-nowrap text-2xl ${dancing_script.className}`}
            >
              Flair Fusion
            </h1>
          </Link>
          <SearchField />
          <div className="flex gap-5 items-center pl-4">
            <Link href="/cart">
              <AiOutlineShoppingCart size={22} />
            </Link>
            <Link href="/favourties">
              <AiOutlineHeart size={22} />
            </Link>
            <Link href="/login">
              <FaUserCircle size={22} />
            </Link>
          </div>
        </div>
        <div className="my-4 w-full h-[0.5px] bg-gray-300" />
        <div className="flex justify-between">
          <div className="flex gap-5">
            <Link href="/" className="desktop_nav_link">
              All Fashion
            </Link>
            <Link href="/new-arrivals" className="desktop_nav_link">
              New Arrivals
            </Link>
            <Link href="trending" className="desktop_nav_link">
              Trending
            </Link>
          </div>
          <Link
            href="hot-deals"
            className="font-semibold text-wild_red underline underline-offset-2"
          >
            Hot Deals
          </Link>
        </div>
      </div>
      {/*mobile navigation*/}
      <div className=" max-md:flex hidden w-full relative ">
        <div className="flex items-center justify-between w-full py-1 sm:mx-2 z-50 bg-white">
          <span className="flex-1">
            <Hamburger toggled={isOpen} toggle={setIsOpen} color={"#E47676"} />
          </span>
          <h1
            className={`w-full text-center flex-1 text-xl ${dancing_script.className}`}
          >
            Flair Fusion
          </h1>
          <div className="flex gap-3 items-center justify-end pr-2 flex-1">
            <Link href="/cart">
              <AiOutlineShoppingCart size={22} />
            </Link>
            <Link href="/favourties">
              <AiOutlineHeart size={22} />
            </Link>
            <Link href="/login">
              <FaUserCircle size={22} />
            </Link>
          </div>
        </div>
        <motion.div
          className="absolute w-full"
          initial={{
            y: -320,
            maxHeight: 0,
            opacity: 0,
            paddingBottom: 0,
            marginTop: 0,
          }}
          animate={{
            y: isOpen ? 0 : -320,
            maxHeight: isOpen ? "100%" : 0,
            opacity: isOpen ? 1 : 0,
            marginTop: isOpen ? 50 : 0,
            paddingBottom: isOpen ? 16 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          <div className={"mobile_menu"}>
            <Link
              href="/all-products"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              All Products
            </Link>
            <Link
              href="/new-arrivals"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              New Arrivals
            </Link>
            <Link
              href="trending"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Trending
            </Link>
            <Link
              href="hot-deals"
              className="font-semibold text-wild_red underline underline-offset-2"
              onClick={() => setIsOpen(false)}
            >
              Hot Deals
            </Link>
            <SearchField />
          </div>
        </motion.div>
        {isOpen && (
          <div
            className="absolute w-screen h-screen z-10 top-0 right-0 left-0"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </motion.nav>
  );
};

export default Nav;
