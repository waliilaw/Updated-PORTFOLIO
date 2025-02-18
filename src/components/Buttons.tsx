"use client";
import React from "react";
import { Button } from "./ui/moving-border";

export function Buttons() {
  return (
    <div>
      <Button
        borderRadius="2.75rem"
        containerClassName="w-48 h-20"
        className="bg-gradient-to-b text-white">
        <span className="flex items-center font-bold text-2xl opacity-80 ">
          Projects
        </span>
      </Button>
      
    </div>
  );
}
