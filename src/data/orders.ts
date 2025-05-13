import { Order } from '../types';
import { format, subDays } from 'date-fns';

// Generate dates for the last 30 days
const generateRecentDate = (daysAgo: number) => {
  return format(subDays(new Date(), daysAgo), 'yyyy-MM-dd');
};

export const orders: Order[] = [
  {
    id: 'ORD-1001',
    customer: {
      name: 'Emma Johnson',
      email: 'emma.j@example.com'
    },
    date: generateRecentDate(1),
    status: 'processing',
    total: 249.99,
    items: [
      {
        productId: '1',
        quantity: 1,
        price: 249.99
      }
    ]
  },
  {
    id: 'ORD-1002',
    customer: {
      name: 'Michael Chen',
      email: 'michael.c@example.com'
    },
    date: generateRecentDate(2),
    status: 'shipped',
    total: 89.99,
    items: [
      {
        productId: '2',
        quantity: 1,
        price: 89.99
      }
    ]
  },
  {
    id: 'ORD-1003',
    customer: {
      name: 'Sophia Rodriguez',
      email: 'sophia.r@example.com'
    },
    date: generateRecentDate(3),
    status: 'delivered',
    total: 69.98,
    items: [
      {
        productId: '3',
        quantity: 2,
        price: 34.99
      }
    ]
  },
  {
    id: 'ORD-1004',
    customer: {
      name: 'James Wilson',
      email: 'james.w@example.com'
    },
    date: generateRecentDate(3),
    status: 'pending',
    total: 129.99,
    items: [
      {
        productId: '4',
        quantity: 1,
        price: 129.99
      }
    ]
  },
  {
    id: 'ORD-1005',
    customer: {
      name: 'Olivia Taylor',
      email: 'olivia.t@example.com'
    },
    date: generateRecentDate(4),
    status: 'shipped',
    total: 49.99,
    items: [
      {
        productId: '5',
        quantity: 1,
        price: 49.99
      }
    ]
  },
  {
    id: 'ORD-1006',
    customer: {
      name: 'Noah Brown',
      email: 'noah.b@example.com'
    },
    date: generateRecentDate(5),
    status: 'delivered',
    total: 199.99,
    items: [
      {
        productId: '6',
        quantity: 1,
        price: 199.99
      }
    ]
  },
  {
    id: 'ORD-1007',
    customer: {
      name: 'Ava Martinez',
      email: 'ava.m@example.com'
    },
    date: generateRecentDate(6),
    status: 'processing',
    total: 179.99,
    items: [
      {
        productId: '7',
        quantity: 1,
        price: 179.99
      }
    ]
  },
  {
    id: 'ORD-1008',
    customer: {
      name: 'Ethan Davis',
      email: 'ethan.d@example.com'
    },
    date: generateRecentDate(7),
    status: 'cancelled',
    total: 29.99,
    items: [
      {
        productId: '8',
        quantity: 1,
        price: 29.99
      }
    ]
  },
  {
    id: 'ORD-1009',
    customer: {
      name: 'Isabella Garcia',
      email: 'isabella.g@example.com'
    },
    date: generateRecentDate(8),
    status: 'delivered',
    total: 249.99,
    items: [
      {
        productId: '1',
        quantity: 1,
        price: 249.99
      }
    ]
  },
  {
    id: 'ORD-1010',
    customer: {
      name: 'William Lee',
      email: 'william.l@example.com'
    },
    date: generateRecentDate(9),
    status: 'delivered',
    total: 89.99,
    items: [
      {
        productId: '2',
        quantity: 1,
        price: 89.99
      }
    ]
  }
];