'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function CoffeeLoading() {
  const [fillLevel, setFillLevel] = useState(0);
  const [isPouring, setIsPouring] = useState(true);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setFillLevel(prev => {
        // Fill up to 80% then start emptying
        if (prev >= 80 && isPouring) {
          setIsPouring(false);
          return prev;
        }
        // Empty to 20% then start filling again
        else if (prev <= 20 && !isPouring) {
          setIsPouring(true);
          return prev;
        }
        // Continue filling or emptying
        else {
          return isPouring ? prev + 1 : prev - 1;
        }
      });
    }, 30);
    
    return () => clearInterval(timer);
  }, [isPouring]);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-50">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Coffee Pot - positioned on right, tilted for pouring */}
        <div className="absolute top-0 right-6 w-32 h-40 transform -rotate-[50deg] origin-bottom-right">
          {/* Actual coffee pot image */}
          <div className="relative w-full h-full -bottom-[20px] left-[100px] -ml-6">
            <Image
              src="https://res.cloudinary.com/dpyjjedao/image/upload/v1744726138/transparent-glass-coffee-pot-metal-handle-spout-brown-coffee-p-closed-lid-brown-coffee-pot-with-liquid-1711055893348_tt9ktp.webp"
              alt="Coffee pot"
              fill
              className="object-contain"
            />
          </div>
        </div>
        
        {/* Coffee Cup */}
        <div className="absolute bottom-8 left-12 w-24 h-32">
          {/* Cup body */}
          <div className="absolute bottom-0 w-full h-24 bg-white border-2 border-gray-300 rounded-b-3xl rounded-t-lg overflow-hidden">
            {/* Coffee filling the cup - dynamic height */}
            <div 
              className="absolute bottom-0 w-full bg-amber-800 transition-all duration-300 ease-in-out" 
              style={{ height: `${fillLevel}%` }}
            >
              {/* Coffee surface foam */}
              <div className="absolute top-0 w-full h-2 bg-amber-600 opacity-60"></div>
            </div>
          </div>
          
          {/* Cup handle */}
          <div className="absolute left-24 top-10 w-6 h-12 border-r-4 border-y-4 border-gray-300 rounded-r-lg bg-transparent"></div>
        </div>
      </div>
      
      {/* Text */}
      <h1 className="mt-8 text-5xl font-bold text-amber-900 tracking-wider">CTRL X CAFE</h1>
      
      {/* Loading indicator */}
      <div className="mt-4 flex space-x-2">
        <span className="w-2 h-2 bg-amber-700 rounded-full animate-bounce delay-75"></span>
        <span className="w-2 h-2 bg-amber-700 rounded-full animate-bounce delay-150"></span>
        <span className="w-2 h-2 bg-amber-700 rounded-full animate-bounce delay-300"></span>
      </div>
    </div>
  );
}