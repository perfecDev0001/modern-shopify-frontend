import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../../types';
import { formatCurrency } from '../../lib/utils';
import Button from '../ui/Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 z-10">
          <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors">
            <Heart className="h-4 w-4 text-gray-600" />
          </button>
        </div>
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
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium text-brand-600">{product.category}</span>
          {product.inventory < 10 && (
            <span className="text-xs font-medium text-red-600">
              Only {product.inventory} left
            </span>
          )}
        </div>
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
  );
};

export default ProductCard;