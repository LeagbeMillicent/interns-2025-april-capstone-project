'use client'

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@/components/header';
import Image from 'next/image';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { features } from '@/lib/choose-us';
import { PopularProductsSection } from '@/components/product-card';
import { Product } from '@/lib/types/admin/types';
import { productsApi } from '@/lib/types/admin/api';
import CoffeeLoading from './loading';

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const productsData = await productsApi.getAll();
        // Limit to only 5 products for the home page
        setProducts(productsData.slice(0, 5));
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CoffeeLoading />
      </div>
    );
  }

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
          <div className="relative flex flex-col md:flex-row items-center">
            {/* Image container - making it larger */}
            <div className="w-full md:w-3/5 relative z-0">
              <div className="aspect-[4/3] w-full h-[700px] overflow-hidden rounded-lg shadow-lg bg-transparent">
                <Image
                  src="https://res.cloudinary.com/dpyjjedao/image/upload/v1744573335/6090f33f2560fe4af5d81b23426f1b9d_k0tovn.jpg"
                  alt="Assorted colorful macarons"
                  height={700}
                  width={900}
                  className="object-cover rounded-md"
                />
              </div>
            </div>
            
            {/* Content overlay - positioned to overlap the image */}
            <div className="w-full md:w-2/5 md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 md:z-10 space-y-6 md:pl-6 mr-32 mt-10">
              <div className="bg-[#D69551] text-white p-6 md:p-8 rounded-lg ml-10">
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">OUR SPECIAL MACARONS (45ghs)</h2>
                <p className="text-sm md:text-base">
                  {`At Ctrl+X Café, our macarons are more than just a treat—they're an experience. Crafted with precision
                  and passion, our macarons come in nine distinct colors and flavors, each carefully curated to offer a burst of
                  sweetness and texture in every bite. From classic vanilla to rich dark chocolate, fruity raspberry to
                  exotic matcha, there's a flavor for every craving.`}
                </p>
              </div>
              
              <div className="flex justify-center">
                <Button className="bg-[#D69551] hover:bg-[#c3813c] text-white font-medium px-6 py-3 rounded-full transition-colors">
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {products.length > 0 && <PopularProductsSection products={products} />}

      <section className="w-full py-16 mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-center mb-12">Why Ctrl+x café?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 h-20 w-20 relative">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;