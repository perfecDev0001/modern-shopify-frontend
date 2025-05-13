import React from 'react';
import { Link } from 'react-router-dom';
import { topSellingProducts } from '../../data/analytics';
import { formatCurrency } from '../../lib/utils';

const TopProducts: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Product
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Units Sold
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Revenue
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {topSellingProducts.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <Link to={`/admin/products/${product.id}`} className="hover:text-brand-600">
                  {product.name}
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {product.sales.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {formatCurrency(product.revenue)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopProducts;