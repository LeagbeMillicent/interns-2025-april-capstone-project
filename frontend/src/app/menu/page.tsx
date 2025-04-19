'use client'

import React, { useEffect, useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ProductCard } from '@/components/product-card';
import { Product, Category } from '@/lib/types/admin/types';
import { productsApi, categoriesApi } from '@/lib/types/admin/api';
import CoffeeLoading from '../loading';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const MenuPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [productsData, categoriesData] = await Promise.all([
          productsApi.getAll(),
          categoriesApi.getAll()
        ]);
        
        setProducts(productsData);
        setFilteredProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all' || selectedCategory === null) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.categoryId === selectedCategory);
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  const handleCategoryClick = (categoryId: string | 'all') => {
    setSelectedCategory(categoryId);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchQuery.trim() === '') {
      // Reset to category filter if search is empty
      if (selectedCategory === 'all' || selectedCategory === null) {
        setFilteredProducts(products);
      } else {
        const filtered = products.filter(product => product.categoryId === selectedCategory);
        setFilteredProducts(filtered);
      }
      return;
    }
    
    // Filter by search query and respect category selection
    const searchResults = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.description?.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || selectedCategory === null || product.categoryId === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredProducts(searchResults);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CoffeeLoading />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">        
        {/* Search Bar */}
        <div className="w-full max-w-md mx-auto mb-8">
          <form onSubmit={handleSearch} className="relative font-crimsonpro italic">
            <input
              type="text"
              placeholder="Search menu"
              className="w-full font-crimsonpro italic rounded-lg border border-gray-300 px-4 py-2 pr-10 focus:border-[#D69551] focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              type="submit"
              variant={'ghost'}
              className="absolute hover:bg-transparent inset-y-0 right-0 flex items-center px-3"
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

        <div className="flex flex-col md:flex-row gap-9">
          {/* Categories Sidebar with fixed height */}
          <div className="w-full md:w-1/4 bg-[#D9944F] rounded-none p-4 text-center" style={{ height: 'calc(100vh - 370px)', overflowY: 'auto' }}>
            <h2 className="text-xl font-semibold text-white mb-4 text-center border-b-4 border-b-white">Categories</h2>
            <ul className="space-y-2">
              <li 
                className={`cursor-pointer p-2 rounded-full transition-colors ${selectedCategory === null || selectedCategory === 'all' ? 'bg-white text-black font-semibold' : 'text-white hover:bg-white/20'}`}
                onClick={() => handleCategoryClick('all')}
              >
                All
              </li>
              {categories.map((category) => (
                <li 
                  key={category.id}
                  className={`cursor-pointer p-2 rounded-full transition-colors ${selectedCategory === category.id ? 'bg-white text-black font-semibold' : 'text-white hover:bg-white/20'}`}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Products Grid */}
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">No products found. Try a different search or category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MenuPage;