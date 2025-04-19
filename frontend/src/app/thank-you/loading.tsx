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
    }, 30000);
    
    return () => clearInterval(timer);
  }, [isPouring]);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-50">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Coffee Pot - positioned on right, tilted for pouring */}
        <div className="absolute top-0 right-6 w-32 h-40 transform -rotate-45 origin-bottom-right">
          {/* Placeholder image - in production you would use the actual image URL */}
          <div className="relative w-full h-full">
            {/* Coffee pot image */}
            <Image
              src="https://res.cloudinary.com/dpyjjedao/image/upload/v1744726138/transparent-glass-coffee-pot-metal-handle-spout-brown-coffee-p-closed-lid-brown-coffee-pot-with-liquid-1711055893348_tt9ktp.webp" 
              alt="Coffee pot"
              fill
              className="w-full h-full opacity-0"
            />
            
            {/* Glass pot body - recreating the pot from the image */}
            <div className="absolute inset-0 flex flex-col">
              {/* Lid */}
              <div className="w-full h-1/6 bg-amber-900 rounded-t-lg relative">
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-amber-900 rounded-full"></div>
              </div>
              
              {/* Glass body */}
              <div className="flex-grow w-full rounded-b-xl bg-gray-100 bg-opacity-40 relative overflow-hidden border-2 border-amber-900">
                {/* Coffee inside pot */}
                <div className="absolute bottom-0 w-full bg-amber-800" style={{ height: '50%' }}></div>
                
                {/* Reflections */}
                <div className="absolute top-1/4 left-1/4 w-8 h-4 bg-white opacity-40 rounded-full transform rotate-45"></div>
              </div>
            </div>
            
            {/* Handle */}
            <div className="absolute top-1/3 right-0 h-16 w-8 border-r-4 border-t-4 border-b-4 border-amber-900 rounded-r-lg"></div>
            
            {/* Spout */}
            <div className="absolute top-1/3 left-0 w-4 h-8 bg-amber-900 rounded-l-lg transform -rotate-12"></div>
          </div>
        </div>
        
        {/* Pour stream - animated - repositioned for the new pot location */}
        <div className="absolute top-24 right-20 w-2 bg-amber-800 rounded-full origin-top animate-pulse transform rotate-45" style={{ height: '60px' }}></div>
        
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
          <div className="absolute right-0 top-8 w-6 h-12 border-r-4 border-y-4 border-gray-300 rounded-r-lg bg-transparent"></div>
        </div>
      </div>
      
      {/* Text */}
      <h1 className="mt-8 text-4xl font-bold text-amber-900 tracking-wider">CTRL X CAFE</h1>
      
      {/* Loading indicator */}
      <div className="mt-4 flex space-x-2">
        <span className="w-2 h-2 bg-amber-700 rounded-full animate-bounce delay-75"></span>
        <span className="w-2 h-2 bg-amber-700 rounded-full animate-bounce delay-150"></span>
        <span className="w-2 h-2 bg-amber-700 rounded-full animate-bounce delay-300"></span>
      </div>
    </div>
  );
}