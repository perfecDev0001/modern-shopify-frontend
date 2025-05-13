import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Smart devices and gadgets for modern living',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'bg-blue-500'
  },
  {
    id: 'home',
    name: 'Home & Kitchen',
    description: 'Beautiful essentials for your living space',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'bg-green-500'
  },
  {
    id: 'clothing',
    name: 'Clothing',
    description: 'Sustainable and stylish apparel',
    image: 'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'bg-purple-500'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Finishing touches for every style',
    image: 'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'bg-amber-500'
  }
];

const Categories: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our carefully curated collections to find exactly what you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/categories/${category.id}`}
              className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                  <p className="text-gray-200 text-sm mb-3">{category.description}</p>
                  <div className="flex items-center text-white text-sm font-medium">
                    <span>Shop Now</span>
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;