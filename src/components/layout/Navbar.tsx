import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, User, ShoppingBag } from 'lucide-react';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6 text-brand-600" />
            <span className="text-xl font-bold text-gray-900">ModernShop</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-600 font-medium">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-brand-600 font-medium">
              Shop
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-brand-600 font-medium">
              Categories
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-brand-600 font-medium">
              About
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-700 hover:text-brand-600"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link to="/account" className="text-gray-700 hover:text-brand-600">
              <User className="h-5 w-5" />
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-brand-600 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-brand-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <Link to="/admin">
              <Button variant="primary" size="sm">
                Dashboard
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="text-gray-700 hover:text-brand-600 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-brand-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-brand-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-100 animate-fade-in">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
              <button className="absolute right-3 top-2 text-gray-500">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-slide-up">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-brand-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-gray-700 hover:text-brand-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/categories" 
                className="text-gray-700 hover:text-brand-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-brand-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/account" 
                className="text-gray-700 hover:text-brand-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Account
              </Link>
              <Link 
                to="/admin" 
                className="text-gray-700 hover:text-brand-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;