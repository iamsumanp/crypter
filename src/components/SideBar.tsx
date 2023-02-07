import React from "react";
import Link from "next/link";
const SideBar = () => {
  return (
    <div className=" rounded-md flex flex-col w-64 shrink-0 p-6  min-h-full bg-dark">
      <ul className="list-none space-y-4 cursor-pointer ">
        <li className="hover:bg-bg_dark pl-2 py-2">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:bg-bg_dark pl-2 py-2">
          <Link href="/news"> News</Link>
        </li>
        <li className="hover:bg-bg_dark pl-2 py-2">
          <Link href="/"> Exchange</Link>
        </li>
        <li className="hover:bg-bg_dark pl-2 py-2">
          <Link href="/"> MArket</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
