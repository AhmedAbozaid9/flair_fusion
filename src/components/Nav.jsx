"use client";
import React, { useState } from "react";
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

  return (
    <nav>
      {/*desktop nav*/}
      <div className="hidden md:flex justify-between flex-col">
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
      <div className="max-md:flex hidden w-full">
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
          className="mobile_menu"
          initial={{
            maxHeight: 0,
            opacity: 0,
            paddingTop: 0,
            paddingBottom: 0,
          }}
          animate={{
            maxHeight: isOpen ? "100%" : 0,
            opacity: isOpen ? 1 : 0,
            paddingTop: isOpen ? 65 : 0,
            paddingBottom: isOpen ? 16 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
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
        </motion.div>
      </div>
    </nav>
  );
};

export default Nav;
