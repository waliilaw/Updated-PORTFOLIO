"use client";
import { Suspense } from "react";
// import Image from "next/image";
import { Header } from "@/components/Header";
import { Buttons } from "@/components/Buttons";
import { Back } from "@/components/Back";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Navbar } from "@/components/Navbar";
import { Stacks } from "@/components/Stacks";
import { BlogGrid } from "@/components/BlogGrid";
import dynamic from 'next/dynamic';
import { Analytics } from "@vercel/analytics/react"

const LoadingSpinner = dynamic(() => import('@/components/LoadingSpinner'), {
  ssr: false
});

export default function Home() {
  return (
    <AuroraBackground className="min-h-screen w-screen">
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <Back />
        <header className="pb-20 flex flex-col items-center justify-center min-h-screen">
          <Header />
          <p className="mt-0 px-11 max-w-3xl text-center text-lg font-bold text-white pt-5">
            I am a Full Stack Web Developer - For FRONTEND: HTML, CSS, JS, React, Tailwind, Next.js - For BACKEND: Node.js, Express, MongoDB, Prisma, PostgreSQL, Firebase - For Deployments: AWS, Vercel, Railway, Cloudflare - Meanwhile, I do DSA & Leetcode - Currently, I am learning Solidity and diving more into the field of the Web3(this Portfolio is made using Next.js)
          </p>
          <div className="mt-24 pt-4">
            <Buttons />
          </div>
        </header>
      </Suspense>

      {/* Stacks Section */}
      <section className="py-0 text-center text-white">
        <div className="relative inline-block">
          <h2 className="text-6xl font-bold pb-4 relative">
            Stacks
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" />
            <div className="absolute -bottom-[4px] left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-orange-800/80 to-transparent blur-sm" />
            <div className="absolute -bottom-[6px] left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent blur-md" />
            <div className="absolute -bottom-[8px] left-0 right-0 h-[8px] bg-gradient-to-r from-transparent via-orange-400/50 to-transparent blur-lg" />
            <div className="absolute -bottom-[12px] left-1/4 right-1/4 h-[10px] bg-gradient-to-r from-transparent via-orange-300/40 to-transparent blur-xl" />
            <div className="absolute -bottom-[16px] left-1/3 right-1/3 h-[12px] bg-gradient-to-r from-transparent via-orange-600/20 to-transparent blur-2xl" />
          </h2>
        </div>
        <Stacks />
      </section>

      {/* Blog Section */}
      <section className="py-20 text-center text-white">
        <div className="relative inline-block">
          <h2 className="text-6xl font-bold pb-4 relative">
            Blog
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" />
            <div className="absolute -bottom-[4px] left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-orange-800/80 to-transparent blur-sm" />
            <div className="absolute -bottom-[6px] left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent blur-md" />
            <div className="absolute -bottom-[8px] left-0 right-0 h-[8px] bg-gradient-to-r from-transparent via-orange-400/50 to-transparent blur-lg" />
            <div className="absolute -bottom-[12px] left-1/4 right-1/4 h-[10px] bg-gradient-to-r from-transparent via-orange-300/40 to-transparent blur-xl" />
            <div className="absolute -bottom-[16px] left-1/3 right-1/3 h-[12px] bg-gradient-to-r from-transparent via-orange-600/20 to-transparent blur-2xl" />
          </h2>
        </div>
        <BlogGrid />
      </section>
      <Analytics />
    </AuroraBackground>
  );
}
