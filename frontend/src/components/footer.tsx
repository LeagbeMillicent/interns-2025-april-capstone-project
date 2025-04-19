import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Phone } from 'lucide-react';
import Image from 'next/image';


const Footer: React.FC = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscription form submitted');
  };

  return (
    <footer className="w-full bg-[#D9944F] text-[#4A231C] py-10 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium italic">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className='h-5 w-5' />
                <a href="tel:0506279466" className="hover:underline text-white">0506279466</a>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  src="https://res.cloudinary.com/dpyjjedao/image/upload/v1744718572/f2e4ef92391ad826637ca0b0a2bc95cc_vnpxbv.png" 
                  alt="Email icon"
                  width={50}
                  height={50}
                  className="object-cover h-5 w-5"
                />
                <a href="mailto:Owusuloisnanaagyeibea@gmail.com" className="hover:underline text-white break-all">
                  Owusuloisnanaagyeibea@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Cafe Address and Working Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium italic">Cafe address</h3>
            <div className="flex items-start space-x-2">
                <Image
                  src="https://res.cloudinary.com/dpyjjedao/image/upload/v1744718851/d113d9069e1e05f6a1c04c74688d4dfa_sshrxm.png" 
                  alt="Email icon"
                  width={50}
                  height={50}
                  className="object-cover h-5 w-5"
                />
              <span className='text-white'>Tse addo, Oak street.</span>
            </div>

            <h3 className="text-xl font-medium italic">Working days</h3>
            <div className="space-y-1 text-white">
              <p>Monday-Friday</p>
              <p>9:00AM-12:00PM</p>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-1 text-center">
            <h1 className='text-xl'>Subscribe to our news letter</h1>
            <p className="text-sm text-white">To stay up to date on all news and offers from us.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow rounded-full bg-white sm:rounded-full px-4 py-2 text-[#4A231C] focus:outline-none"
                required
              />
              <Button
                type="submit"
                className="mt-2 sm:mt-0 bg-[#4A231C] hover:bg-[#462c1f7d] text-white font-medium py-2 px-5 rounded-full sm:rounded-full font-crimsonpro italic transition-colors -ml-[94px]"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;