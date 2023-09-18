"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import SearchField from "@components/SearchField";
import { Squash as Hamburger } from "hamburger-react";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;

      setScrollingUp(st < lastScrollTop);
      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: scrollingUp ? 0 : -370 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 right-0 left-0 z-[999]"
    >
      {/*desktop nav*/}
      <div className="w-full bg-white py-4 z-50 hidden md:flex justify-between flex-col sticky top-0 right-0 left-0">
        <div className="flex justify-between items-center">
          <Link href="/" className="pr-4">
            <Image
              src={"assets/logo.svg"}
              alt="logo_image"
              width={80}
              height={50}
              className="mr-2"
              draggable={"false"}
            />
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
        <div className="my-4 w-full h-[0.5px] bg-gray-400" />
        <div className="flex justify-between">
          <div className="flex gap-5">
            <Link href="/" className="desktop_nav_link">
              Home
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
      <div className="bg-white max-md:flex hidden w-full relative py-1 z-[999]">
        <div className="flex items-center justify-between w-full sm:mx-2">
          <Link href="/" className="pr-4 z-30">
            <Image
              src={"assets/logo.svg"}
              alt="logo_image"
              width={65}
              height={0}
              className="max-sm:mx-6"
              draggable={"false"}
            />
          </Link>
          <span className="z-30">
            <Hamburger toggled={isOpen} toggle={setIsOpen} color={"#E47676"} />
          </span>
        </div>
        <motion.div
          className="absolute w-full"
          initial={{
            maxHeight: 0,
            opacity: 0,
            paddingBottom: 0,
            marginTop: 0,
          }}
          animate={{
            maxHeight: isOpen ? "100%" : 0,
            opacity: isOpen ? 1 : 0,
            marginTop: isOpen ? 50 : 0,
            paddingBottom: isOpen ? 16 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="mobile_menu">
            <Link href="/login">Log In</Link>
            <Link href="/cart">Shopping cart</Link>
            <Link href="/favourties">Favourites</Link>
            <Link href="/new-arrivals">New Arrivals</Link>
            <Link href="trending">Trending</Link>
            <Link
              href="hot-deals"
              className="font-semibold text-wild_red underline underline-offset-2"
            >
              Hot Deals
            </Link>
            <SearchField />
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Nav;
