"use client";

import React from "react";
import { useGlobalContext } from "../Context/store";

const Page = () => {
  const { coinId } = useGlobalContext();
  return (
    <div>
      <button onClick={() => console.log(coinId)}>Click me</button>
    </div>
  );
};

export default Page;
