import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { products } from '../../data/products';
import { formatCurrency } from '../../lib/utils';
import Button from '../ui/Button';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium products that combine quality, style, and functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    variant="primary"
                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
              <div>
                <Link to={`/products/${product.id}`}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-brand-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current fill-none'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">({product.reviews})</span>
                </div>
                <p className="font-medium text-gray-900">{formatCurrency(product.price)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products">
            <Button variant="outline">View All Products</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;