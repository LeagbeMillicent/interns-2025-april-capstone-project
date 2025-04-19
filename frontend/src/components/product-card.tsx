'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import {
  Plus,
  Minus,
  Info,
} from 'lucide-react';
import { Product } from '@/lib/types/admin/types';

// Product Card Component
export const ProductCard = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);
 
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg bg-[#D69551]">
      <div className="relative aspect-square overflow-hidden">
        {/* Product Image */}
        <Image
          src={product.imageUrl || "https://res.cloudinary.com/dpyjjedao/image/upload/v1744573283/f90aee7ce35e86e346ff21838eace8ad_kuvpf7.jpg"}
          alt={product.name}
          fill
          className="object-cover scale-90 rounded-md"
        />
        
        {/* Product Name and Price Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h3 className="font-semibold text-xl text-white text-center px-4">{product.name}</h3>
          <span className="font-medium text-white -mt-2 ml-4">GH₵ {product.price.toFixed(2)}</span>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          {/* Info and Quantity Controller - Wrapped in div with scale-75 */}
          <div className="scale-75 origin-left">
            <div className="flex items-center -ml-3 bg-white rounded-full shadow-md overflow-hidden border border-gray-100">
              {/* Info Button */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 hover:bg-gray-100">
                    <Info className="h-4 w-4 text-gray-600" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-4">
                  <h4 className="font-semibold mb-2">{product.name}</h4>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  {product.stock < 10 && (
                    <p className="text-sm text-red-500 mt-2">Only {product.stock} left in stock!</p>
                  )}
                </PopoverContent>
              </Popover>
              
              {/* Divider */}
              <div className="h-6 w-px bg-gray-200"></div>
              
              {/* Quantity Controls */}
              <Button
                variant="ghost"
                size="sm"
                className="px-2 py-0 h-8 hover:bg-gray-100"
                onClick={decreaseQuantity}
              >
                <Minus className="h-4 w-4 text-gray-600" />
              </Button>
              <span className="px-3 py-1 text-gray-700">{quantity}</span>
              <Button
                variant="ghost"
                size="sm"
                className="px-2 py-0 h-8 hover:bg-gray-100"
                onClick={increaseQuantity}
              >
                <Plus className="h-4 w-4 text-gray-600" />
              </Button>
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <div className='scale-90'>
          <Button className="bg-white hover:bg-[#edf0ed] text-black rounded-full px-4 py-1 h-8 -ml-4">
            Add to cart
          </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Popular Products Section
export function PopularProductsSection({ products }: { products: Product[] }) {
  // Select featured products (either from a featured flag or just take first 5)
  const featuredProducts = products.slice(0, 5);
 
  return (
    <section className="w-full py-12 bg-orange-50/30 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center mb-8">POPULAR FROM MENU</h2>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}