import React, { memo } from "react";
import { FlipWords } from "./ui/flip-words";

export const Header = memo(function Header() {
  const words = ["Full Stack Dev", "DSA & Leetcode" , "Web3 Enthusiast"];

  return (
    <div className="flex justify-center items-center pr- pl-0">
      <div className="text-6xl pt-28 mx-auto font-bold">
        <span className="inline-block text-6xl font-bold text-white">
          Hi! I&apos;m Wali
        </span>
        <br />
        <span className="flex justify-center items-center text-6xl font-bold text-white p-6 mt-6">
          <FlipWords words={words} />
        </span>
        <br />
      </div>
    </div>
  );
});
