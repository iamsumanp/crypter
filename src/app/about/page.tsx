import Image from "next/image";
import Link from "next/link";
import React from "react";
import profile from "../../../public/assets/profile.png";
const About = () => {
  return (
    <div className="items-center justify-center w-full flex flex-col pt-6 pb-10">
      <Image
        src={profile}
        alt="profile"
        className="rounded-full pb-8"
        width={300}
        height={300}
      />
      <div className="bg-dark p-4 rounded-md">
        <span>
          Github Repo:{" "}
          <span className=" hover:text-cyan cursor-pointer">
            <Link href="https://github.com/iamsumanp/crypter" target="_blank">
              https://github.com/iamsumanp/crypter
            </Link>
          </span>
        </span>
      </div>
    </div>
  );
};

export default About;
