import { SalesData, CategorySales } from '../types';
import { format, subDays } from 'date-fns';

// Generate dates for the last 30 days
const generateDates = () => {
  const dates: string[] = [];
  for (let i = 30; i >= 0; i--) {
    dates.push(format(subDays(new Date(), i), 'MMM dd'));
  }
  return dates;
};

export const salesData: SalesData[] = generateDates().map((date, index) => {
  // Generate some realistic looking data with a general upward trend and some fluctuations
  const baseRevenue = 1000 + (index * 50);
  const fluctuation = Math.random() * 500 - 250;
  const revenue = Math.max(500, baseRevenue + fluctuation);
  const orders = Math.floor(revenue / 100);
  
  return {
    date,
    revenue,
    orders
  };
});

export const categorySales: CategorySales[] = [
  {
    category: 'Electronics',
    revenue: 12500,
    percentage: 42
  },
  {
    category: 'Home',
    revenue: 8200,
    percentage: 27
  },
  {
    category: 'Clothing',
    revenue: 4500,
    percentage: 15
  },
  {
    category: 'Accessories',
    revenue: 3800,
    percentage: 13
  },
  {
    category: 'Other',
    revenue: 1000,
    percentage: 3
  }
];

export const topSellingProducts = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    sales: 124,
    revenue: 30998.76
  },
  {
    id: '6',
    name: 'Leather Weekender Bag',
    sales: 87,
    revenue: 17399.13
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    sales: 156,
    revenue: 5458.44
  },
  {
    id: '7',
    name: 'Fitness Smartwatch',
    sales: 72,
    revenue: 12959.28
  },
  {
    id: '5',
    name: 'Handcrafted Ceramic Mug Set',
    sales: 68,
    revenue: 3399.32
  }
];

export const revenueByMonth = [
  { month: 'Jan', revenue: 21500 },
  { month: 'Feb', revenue: 19800 },
  { month: 'Mar', revenue: 25400 },
  { month: 'Apr', revenue: 28300 },
  { month: 'May', revenue: 26900 },
  { month: 'Jun', revenue: 32100 },
  { month: 'Jul', revenue: 38500 },
  { month: 'Aug', revenue: 42700 },
  { month: 'Sep', revenue: 45200 },
  { month: 'Oct', revenue: 47800 },
  { month: 'Nov', revenue: 51300 },
  { month: 'Dec', revenue: 59700 }
];