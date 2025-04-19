'use client'

import React, { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/header';
import Image from 'next/image';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <>
      <Head>
        <title>CTRL + X CAFE | Home</title>
        <meta name="description" content="Cut the stress, paste the flavor—where coffee meets creativity!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/* Hero Section */}
      <section className="w-full py-8 md:py-16 lg:py-20 font-crimsonpro italic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between md:gap-12 lg:gap-24">
            <div className="flex flex-1 flex-col justify-center space-y-6 text-center md:text-left -mt-[10px] lg:-mt-[350px]">
              <h1 className="text-3xl font-crimsonpro text-nowrap font-semibold italic text-black md:text-4xl lg:text-5xl">
                Welcome to CTRL + X CAFE
              </h1>
              <p className="text-lg font-medium font-crimsonpro text-black md:text-xl">
                Cut the stress, paste the flavor—where coffee meets creativity!
              </p>
              
              {/* Search Bar */}
              <div className="mt-6 w-full max-w-md mx-auto md:mx-0">
                <form onSubmit={handleSearch} className="relative font-crimsonpro italic">
                  <input
                    type="text"
                    placeholder="Search menu"
                    className="w-3/4 font-crimsonpro italic rounded-lg border border-gray-300 px-4 py-2 pr-10 focus:border-[#D69551] focus:outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button
                    type="submit"
                    variant={'ghost'}
                    className="absolute hover:bg-transparent inset-y-0 right-28 flex items-center px-3"
                  >
                    <Image
                      src="https://res.cloudinary.com/dpyjjedao/image/upload/v1744576886/ba69be6143ca3f1c7a8418a0f035386e_pmjqgt.png" 
                      alt="Search"
                      width={20}
                      height={20}
                      className="object-contain mt-1"
                    />
                  </Button>
                </form>
              </div>
            </div>

              <div className="flex-1 ml-20 -mt-24 lg:-mt-[120px]">
                <div className="relative aspect-[3/4] overflow-hidden scale-75 " style={{ 
                  borderRadius: '30% 30% 30% 30% / 30% 30% 30% 30%',
                  maxWidth: '500px',
                  margin: '0 auto'
                }}>
                  <Image
                    src="https://res.cloudinary.com/dpyjjedao/image/upload/v1744562437/fc1a5a94c3123667611d58db8b37baa1_kyixah.jpg"
                    alt="Delicious coffee with coffee beans"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Spotlight Product Section */}
      <section className="w-full py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-square sm:aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dpyjjedao/image/upload/v1744573335/6090f33f2560fe4af5d81b23426f1b9d_k0tovn.jpg" 
                  alt="Assorted colorful macarons"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 space-y-6">
              <div className="bg-[#D69551] text-white px-[94px] py-12 rounded-lg text-center">
                <h2 className="text-2xl font-semibold mb-4">OUR SPECIAL MACARONS (45ghs)</h2>
                <p className="text-base lg:text-[17px] text-left">
                  {`At Ctrl+X Café, our macarons are more than just a treat—they’re an experience. Crafted with precision and passion, our macarons come in nine distinct colors and flavors, each carefully curated to offer a burst of sweetness and texture in every bite. From classic vanilla to rich dark chocolate, fruity raspberry to exotic matcha, there’s a flavor for every craving.`}
                </p>
              </div>
              
              <div className="flex justify-center md:justify-start">
                <Button className="bg-[#D69551] font-crimsonpro italic hover:bg-[#c3813c] text-white font-medium py-3 px-6 rounded-full transition-colors">
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;