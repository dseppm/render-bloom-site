// components/Logo.tsx
import React from "react";
import { cn } from "@/lib/utils"; // optional utility if you use it

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col items-center space-y-1", className)}>
      {/* Top text: EXSKON */}
      <div className="flex items-center space-x-1 font-extrabold text-[36px] tracking-wide">
        <span className="text-[#e59500]">E</span>
        <span className="text-[#e59500]">X</span>
        <span className="text-[#e59500]">S</span>
        <span className="text-[#e59500]">K</span>
        <span className="text-[#e59500]">O</span>
        <span className="text-[#e59500] relative">
          N
          {/* Arrow Up inside N */}
          <span className="absolute -top-4 left-3 text-[#e59500]">↑</span>
        </span>
      </div>

      {/* Middle text: ELEVATOR */}
      <div className="bg-[#003399] px-4 py-1 flex space-x-2 text-white font-extrabold text-xl tracking-widest">
        <span>E</span>
        <span>L</span>
        <span>E</span>
        <span className="text-white relative">
          V
          {/* Down arrow instead of A */}
          <span className="absolute top-0 left-1 text-white">▽</span>
        </span>
        <span>T</span>
        <span>O</span>
        <span>R</span>
      </div>

      {/* Bottom tagline */}
      <div className="flex items-center space-x-2 text-gray-800 font-medium">
        <div className="h-[2px] w-8 bg-gray-700" />
        <span>Safety Our Priority</span>
        <div className="h-[2px] w-8 bg-gray-700" />
      </div>
    </div>
  );
};

export default Logo;
