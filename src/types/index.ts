export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured: boolean;
  inventory: number;
  rating: number;
  reviews: number;
}

export interface Order {
  id: string;
  customer: {
    name: string;
    email: string;
  };
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: {
    productId: string;
    quantity: number;
    price: number;
  }[];
}

export interface SalesData {
  date: string;
  revenue: number;
  orders: number;
}

export interface CategorySales {
  category: string;
  revenue: number;
  percentage: number;
}