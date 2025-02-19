"use client";
import { useParams } from "next/navigation";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Navbar } from "@/components/Navbar";
import { Back } from "@/components/Back";

export default function BlogPost() {
  const params = useParams();
  console.log("Blog ID:", params.id); // Use the id parameter

  return (
    <AuroraBackground className="min-h-screen w-screen">
      <Navbar />
      <Back />
      <div className="flex flex-col items-center justify-center min-h-screen gap-8">
        <h1 className="text-4xl text-white font-bold">Blog post not found</h1>
        <img 
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDd6bWx4Y2E2OGF1OWF4OWF4cmRxdWR2dDU4NHB1bGx6YnB1dG42eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/14uQ3cOFteDaU/giphy.gif" 
          alt="Not Found" 
          className="rounded-lg shadow-lg w-96 h-auto"
        />
      </div>
    </AuroraBackground>
  );
}