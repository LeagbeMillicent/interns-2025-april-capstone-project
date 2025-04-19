import { NextResponse } from 'next/server';
import { Order } from '@/lib/types/admin/types';

// Mock data
const orders: Order[] = [
  {
    id: '1',
    userId: 'user123',
    status: 'delivered',
    totalAmount: 199.99,
    items: [
      {
        id: 'item1',
        productId: '1',
        productName: 'Wireless Headphones',
        quantity: 1,
        price: 199.99,
      },
    ],
    shippingAddress: {
      fullName: 'John Doe',
      streetAddress: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'USA',
    },
    paymentMethod: 'credit_card',
    createdAt: new Date(2024, 8, 15).toISOString(),
    updatedAt: new Date(2024, 8, 18).toISOString(),
  },
  {
    id: '2',
    userId: 'user456',
    status: 'shipped',
    totalAmount: 1299.99,
    items: [
      {
        id: 'item2',
        productId: '4',
        productName: 'Laptop',
        quantity: 1,
        price: 1299.99,
      },
    ],
    shippingAddress: {
      fullName: 'Jane Smith',
      streetAddress: '456 Park Ave',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60001',
      country: 'USA',
    },
    paymentMethod: 'paypal',
    createdAt: new Date(2024, 9, 1).toISOString(),
    updatedAt: new Date(2024, 9, 3).toISOString(),
  },
  {
    id: '3',
    userId: 'user789',
    status: 'processing',
    totalAmount: 379.98,
    items: [
      {
        id: 'item3',
        productId: '5',
        productName: 'Bluetooth Speaker',
        quantity: 1,
        price: 129.99,
      },
      {
        id: 'item4',
        productId: '1',
        productName: 'Wireless Headphones',
        quantity: 1,
        price: 249.99,
      },
    ],
    shippingAddress: {
      fullName: 'Robert Johnson',
      streetAddress: '789 Oak St',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001',
      country: 'USA',
    },
    paymentMethod: 'credit_card',
    createdAt: new Date(2024, 9, 10).toISOString(),
    updatedAt: new Date(2024, 9, 10).toISOString(),
  },
];

export async function GET() {
  return NextResponse.json(orders);
}