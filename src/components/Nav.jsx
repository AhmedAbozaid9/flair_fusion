import React from 'react';
import Link from "next/link";
const Nav = () => {
  return (
    <nav className="flex justify-between flex-col">
      <div className="flex justify-between items-center px-6 sm:px-16">
        <div>
          <p className="font-semibold">Flair <span className="text-pastel_red">Fusion</span></p>
        </div>
        <input type="text" className="search_input" placeholder="Search for any Product you desire"/>
        <div className="flex gap-5">
          <span>Cart</span>
          <span>Fav</span>
          <span>Sign In</span>
        </div>
      </div>
      <div className="my-4 w-full h-[0.5px] bg-gray-400"/>
      <div className="flex justify-between px-6 sm:px-16">
        <div className="flex gap-5">
          <Link href="/">Home</Link>
          <Link href="/new-arrivals">New Arrivals</Link>
          <Link href="trending">Trending</Link>

        </div>
        <Link href="hot-deals" className="font-semibold text-wild_red underline underline-offset-2">Hot Deals</Link>

      </div>
    </nav>
  );
};

export default Nav;