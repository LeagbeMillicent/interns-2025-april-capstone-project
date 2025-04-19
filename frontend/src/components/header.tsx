'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      isMobile.valueOf.toString()
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, [isMobile.valueOf]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full border-b border-gray-200 bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center font-crimsonpro italic justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo and Brand */}
        {/* <div className="flex items-center"> */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative p-2">
              <div className="relative h-full w-full scale-90">
                <Image
                  src="https://res.cloudinary.com/dpyjjedao/image/upload/v1744573980/fd078312-bb8b-438e-9006-371af583c57e.png" 
                  alt="CTRL + X CAFE"
                  width={70}
                  height={70}
                  className='w-full scale-110'
                />
              </div>
            </div>
          </Link>

        {/* Mobile Menu Button */}
        <Button
          className="md:hidden rounded-md p-2 text-gray-600 focus:outline-none"
          variant={'ghost'}
          onClick={toggleMenu}
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="text-base font-medium text-black hover:text-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/menu" className="text-base font-medium text-black hover:text-gray-600">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/reservation" className="text-base font-medium text-black hover:text-gray-600">
                Reservation
              </Link>
            </li>
          </ul>
        </nav>

        {/* Search and Cart */}
        <div className="hidden md:flex items-center space-x-4">
          <form onSubmit={handleSearch} className="flex">
            <div className="relative flex items-center">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Image
                  src="https://res.cloudinary.com/dpyjjedao/image/upload/v1744576886/ba69be6143ca3f1c7a8418a0f035386e_pmjqgt.png" 
                  alt="Search"
                  width={18}
                  height={18}
                  className="object-contain"
                />
              </div>
              <input
                type="text"
                placeholder="Search salads, bakes and beverages"
                className="w-52 lg:w-64 font-crimsonpro italic rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm focus:border-[#D9944F] focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              className="ml-2 font-crimsonpro italic rounded-full bg-[#D9944F] px-4 py-2 text-white hover:bg-[#c3813c]"
            >
              Search
            </Button>
          </form>
          <Link href="/cart" className="relative flex items-center justify-center">
            <div className="relative h-8 w-8">
              <Image
                src="https://res.cloudinary.com/dpyjjedao/image/upload/v1744576971/eca93b2d0d1e2d8889c71cece3f3d5cb_exwdn8.png" 
                alt="Cart"
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-md md:hidden z-50">
            <div className="px-4 py-4 space-y-4">
              <nav>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/" 
                      className="block text-base font-medium text-black hover:text-gray-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/menu" 
                      className="block text-base font-medium text-black hover:text-gray-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Menu
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/reservation" 
                      className="block text-base font-medium text-black hover:text-gray-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Reservation
                    </Link>
                  </li>
                </ul>
              </nav>
              
              <form onSubmit={handleSearch} className="flex">
                <div className="relative flex-1">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Image
                      src="https://res.cloudinary.com/dpyjjedao/image/upload/v1744576886/ba69be6143ca3f1c7a8418a0f035386e_pmjqgt.png" 
                      alt="Search"
                      width={18}
                      height={18}
                      className="object-contain"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm focus:border-[#D9944F] focus:outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button
                  type="submit"
                  variant={'ghost'}
                  className="ml-2 rounded-full bg-[#D9944F] px-4 py-2 text-white hover:bg-[#c3813c]"
                >
                  Search
                </Button>
              </form>
              
              <div className="flex justify-end">
                <Link 
                  href="/cart" 
                  className="flex items-center space-x-2 text-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="relative h-6 w-6">
                    <Image
                      src="https://res.cloudinary.com/dpyjjedao/image/upload/v1744576971/eca93b2d0d1e2d8889c71cece3f3d5cb_exwdn8.png" 
                      alt="Cart"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>Cart</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;