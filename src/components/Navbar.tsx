import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/logo.png";
const Navbar = () => {
  return (
    <nav className="relative container mx-auto px-4 my-4 border-2 border-gray-400 rounded-md">
      <div className="flex justify-between items-center">
        <div className="p-2">
          <Image src={Logo} alt="logo" height={60}></Image>
        </div>
        <div className="hidden md:flex ">
          <div>Dark mode</div>
          <div className="ml-4">About</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
