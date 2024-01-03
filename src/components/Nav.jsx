"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import SearchField from "@components/SearchField";
import { Divide as Hamburger } from "hamburger-react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const dancing_script = Dancing_Script({ weight: "400", subsets: ["latin"] });

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  //animate the navigation bar
  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;

      setScrollingUp(st < lastScrollTop);
      setIsOpen(false);
      lastScrollTop = st <= 125 ? 125 : st;
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
      className="sticky shadow-sm top-0 right-0 left-0 z-[999] border-b-1 bg-white"
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
              <AiOutlineShoppingCart size={26} />
            </Link>
            <Link href="/products/wishlist">
              <AiOutlineHeart size={26} />
            </Link>
            {/*Login button*/}
            {session?.user ? (
              <Image
                src={session.user.image}
                alt="profile"
                width={26}
                height={26}
                className="rounded-full cursor-pointer min-w-[26px]"
                onClick={() => {
                  signOut();
                }}
              />
            ) : (
              <>
                {providers ? (
                  Object.values(providers).map((provider) => (
                    <button
                      key={provider.name}
                      onClick={() => signIn(provider.id)}
                    >
                      <FaUserCircle size={22} />
                    </button>
                  ))
                ) : (
                  <FaUserCircle size={22} />
                )}
              </>
            )}
          </div>
        </div>
        <div className="my-4 w-full h-[0.5px] bg-gray-300" />
        <div className="flex justify-between">
          <div className="flex gap-5">
            <Link href="/products/all" className="desktop_nav_link">
              All Fashion
            </Link>
            <Link href="/products/new" className="desktop_nav_link">
              New Arrivals
            </Link>
            <Link href="/products/trending" className="desktop_nav_link">
              Trending
            </Link>
          </div>
          <Link
            href="/products/hot"
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
          <Link href="/" onClick={() => setIsOpen(false)}>
            <h1
              className={`w-full text-center flex-1 text-xl ${dancing_script.className}`}
            >
              Flair Fusion
            </h1>
          </Link>
          <div className="flex gap-3 items-center justify-end pr-2 flex-1">
            <Link href="/cart">
              <AiOutlineShoppingCart size={22} />
            </Link>
            <Link href="/products/wishlist">
              <AiOutlineHeart size={22} />
            </Link>
            {/*Login button*/}
            {session?.user ? (
              <Image
                src={session.user.image}
                alt="profile"
                width={22}
                height={22}
                className="rounded-full cursor-pointer min-w-[22px]"
                onClick={() => {
                  signOut();
                }}
              />
            ) : (
              <>
                {providers ? (
                  Object.values(providers).map((provider) => (
                    <button
                      key={provider.name}
                      onClick={() => signIn(provider.id)}
                    >
                      <FaUserCircle size={22} />
                    </button>
                  ))
                ) : (
                  <FaUserCircle size={22} />
                )}
              </>
            )}
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
              href="/products/all"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              All Products
            </Link>
            <Link
              href="/products/new"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              New Arrivals
            </Link>
            <Link
              href="/products/trending"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Trending
            </Link>
            <Link
              href="/products/hot"
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
