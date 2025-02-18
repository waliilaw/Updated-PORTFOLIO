import Image from "next/image";
import { Header } from "@/components/Header";
import { Buttons } from "@/components/Buttons";
import { Back } from "@/components/Back";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Navbar } from "@/components/Navbar";
import { Stacks } from "@/components/Stacks";
export default function Home() {
  return (
    <AuroraBackground className="min-h-screen w-screen">
      <Navbar />
      <Back />
      {/* Header Section */}
      <header className="pb-20 flex flex-col items-center justify-center min-h-screen">
        <Header />
        <p className="mt-0 px-11 max-w-3xl text-center text-lg font-bold text-white pt-5">
          I am a Full Stack Web Developer - For FRONTEND: HTML, CSS, JS, React, Tailwind, Next.js - For BACKEND: Node.js, Express, MongoDB, Prisma, PostgreSQL, Firebase - For Deployments: AWS, Vercel, Railway, Cloudflare - Meanwhile, I do DSA & Leetcode - Currently, I am learning Next.js (this Portfolio is made using Next.js)
        </p>
        <div className="mt-24 pt-4">
          <Buttons />
        </div>
      </header>

      {/* Features Section */}
      <section className="py-0 text-center text-white">
        <div className="relative inline-block">
          <h2 className="text-6xl font-bold pb-4 relative ">
            Stacks
            {/* Solid white border on top */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" />
            {/* Brightened orange glow effects below the border */}
            <div className="absolute -bottom-[4px] left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-orange-800/80 to-transparent blur-sm" />
            <div className="absolute -bottom-[6px] left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent blur-md" />
            <div className="absolute -bottom-[8px] left-0 right-0 h-[8px] bg-gradient-to-r from-transparent via-orange-400/50 to-transparent blur-lg" />
            <div className="absolute -bottom-[12px] left-1/4 right-1/4 h-[10px] bg-gradient-to-r from-transparent via-orange-300/40 to-transparent blur-xl" />
            <div className="absolute -bottom-[16px] left-1/3 right-1/3 h-[12px] bg-gradient-to-r from-transparent via-orange-600/20 to-transparent blur-2xl" />
            
            {/* Glowing effects below the border */}
            <div className="absolute -bottom-[8px] left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-orange-800/80 to-transparent blur-sm" />
            <div className="absolute -bottom-[10px] left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-orange-400/60 to-transparent blur-md" />
            <div className="absolute -bottom-[12px] left-0 right-0 h-[8px] bg-gradient-to-r from-transparent via-orange-300/50 to-transparent blur-lg" />
            
            {/* Extended glow for more depth */}
            <div className="absolute -bottom-[16px] left-1/4 right-1/4 h-[10px] bg-gradient-to-r from-transparent via-orange-200/40 to-transparent blur-xl" />
            <div className="absolute -bottom-[20px] left-1/3 right-1/3 h-[12px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent blur-2xl" />
          </h2>
        </div>
        <Stacks />
      </section>

      {/* Collaborations Section */}
      <section className="py-20 text-center text-white">
        <h2 className="text-3xl font-bold">Our Collaborations</h2>
        <div className="mt-10">
          <h3 className="font-semibold">BetterIDEa Codecell</h3>
          <p>We collaborated with BetterIDEa to develop the AO Learn Lua Codecell, a specialized feature that integrates Lua scripting seamlessly into the AO Learn framework.</p>
        </div>
      </section>

      {/* User Testimonials Section */}
      <section className="py-20 text-center text-white">
        <h2 className="text-3xl font-bold">What Our Users Say!!</h2>
        <div className="mt-10">
          <p>Emma: Top-notch quality and fast delivery!</p>
          <p>Max: Amazing work, will come back for sure!</p>
          <p>John: Amazing service! Highly recommend!</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 text-center text-white">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-10">
          <p>How to setup AO Learn?</p>
          <p>How do I load my data?</p>
          <p>What can you do with aolearn?</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-10 text-center">
        <p>© 2024 AO | Learn. All rights reserved.</p>
      </footer>
    </AuroraBackground>
  );
}
