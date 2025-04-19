export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    categoryId: string;
    imageUrl: string;
    stock: number;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Category {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Order {
    id: string;
    userId: string;
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    totalAmount: number;
    items: OrderItem[];
    shippingAddress: Address;
    paymentMethod: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface OrderItem {
    id: string;
    productId: string;
    productName: string;
    quantity: number;
    price: number;
  }
  
  export interface Address {
    fullName: string;
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  }