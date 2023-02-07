import React from "react";
import Link from "next/link";
const SideBar = () => {
  return (
    <div className=" rounded-md flex flex-col w-64 shrink-0 p-6  min-h-full bg-dark">
      <ul className="list-none space-y-4 cursor-pointer ">
        <Link href="/">
          <li className="hover:bg-bg_dark pl-2 py-4">Home</li>
        </Link>
        <Link href="/news">
          <li className="hover:bg-bg_dark pl-2 py-4">News</li>
        </Link>
        <Link href="/">
          <li className="hover:bg-bg_dark pl-2 py-4">Exchange</li>
        </Link>
        <Link href="/">
          <li className="hover:bg-bg_dark pl-2 py-4">Market</li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
