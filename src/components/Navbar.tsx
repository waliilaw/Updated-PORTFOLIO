"use client";
import Link from "next/link";

import { Github, Instagram } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-sm border-b border-transparent">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link 
            href="/"
            className="relative group"
          >
            <h1 className="text-white text-2xl font-bold bg-clip-text bg-gradient-to-b from-white to-gray-300 text-transparent hover:text-orange-500 transition-all duration-300 hover:scale-110">
              &lt;Waliilaww /&gt;
            </h1>
            <span className="absolute -inset-2 hover:text-orange-500 bg-orange-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <div className="flex gap-10 ">
            <Link
              href="https://github.com/waliilaw"
              target="_blank"
              className="text-white hover:text-orange-500 transition-all duration-300 hover:scale-110 relative group  "
            >
              <Github className="w-6 h-6" />
              <span className="absolute -inset-2 bg-orange-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <Link
              href="https://leetcode.com/waliilaw"
              target="_blank"
              className="text-white hover:text-orange-400 transition-all duration-300 hover:scale-110 relative group"
            >
              <SiLeetcode className="w-6 h-6" />
              <span className="absolute -inset-2 bg-orange-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              href="https://instagram.com/waliilaww"
              target="_blank"
              className="text-white hover:text-orange-400 transition-all duration-300 hover:scale-110 relative group"
            >
              <Instagram className="w-6 h-6" />
              <span className="absolute -inset-2 bg-orange-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            </Link>

            <Link
              href="https://linkedin.com/in/humaidwali20"
              target="_blank"
              className="text-white hover:text-orange-400 transition-all duration-300 hover:scale-110 relative group"
            >
              <FaLinkedin className="w-6 h-6" />
              <span className="absolute -inset-2 bg-orange-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
