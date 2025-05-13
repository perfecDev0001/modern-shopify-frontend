import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/products/ProductCard';
import { products } from '../data/products';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [showFilters, setShowFilters] = useState(false);

  const categories = Array.from(new Set(products.map(product => product.category)));

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return b.featured ? 1 : -1;
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">All Products</h1>
            <p className="text-gray-600">
              Browse our collection of high-quality products
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  <SlidersHorizontal className="h-5 w-5" />
                  <span>Filters</span>
                </button>
                <div className="relative">
                  <select
                    className="appearance-none px-4 py-3 pr-10 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {showFilters && (
              <div className="bg-white p-4 rounded-md shadow-sm mb-4 animate-fade-in">
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    className={`px-3 py-1.5 rounded-md text-sm ${
                      selectedCategory === null
                        ? 'bg-brand-100 text-brand-800'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedCategory(null)}
                  >
                    All
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`px-3 py-1.5 rounded-md text-sm ${
                        selectedCategory === category
                          ? 'bg-brand-100 text-brand-800'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;