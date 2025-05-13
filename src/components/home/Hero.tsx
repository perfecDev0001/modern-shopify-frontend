import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Elevate Your Lifestyle with Premium Products
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Discover curated collections of high-quality products designed for modern living. From tech to home essentials, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/products">
              <Button size="lg" variant="primary">
                Shop Now
              </Button>
            </Link>
            <Link to="/categories">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                Explore Categories
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;