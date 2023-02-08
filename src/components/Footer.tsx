import React from "react";
import logo from "../../public/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="container mx-auto p-8 my-4 rounded-md bg-dark flex flex-col md:flex-row items-center justify-between">
      <span className=" text-gray-200">Created by Suman Pokharel.</span>
      <Image src={logo} alt="logo" height={60} />
    </div>
  );
};

export default Footer;
