"use client";
import { useParams } from "next/navigation";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Navbar } from "@/components/Navbar";
import { Back } from "@/components/Back";

export default function BlogPost() {
  const { id } = useParams();

  return (
    <AuroraBackground className="min-h-screen w-screen">
      <Navbar />
      <Back />
      <div className="flex flex-col items-center justify-center min-h-screen gap-8">
        <h1 className="text-4xl text-white font-bold">Blog post not found</h1>
        <img 
          src="./no.gif" 
          alt="Not Found" 
          className="w-52 h-52 rounded-lg shadow-lg"
        />
      </div>
    </AuroraBackground>
  );
}