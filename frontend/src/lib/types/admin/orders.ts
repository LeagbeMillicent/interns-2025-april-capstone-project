export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export type OrderItem = {
  id: string;
  productId: string;
  productName: string;
  quantity: number;
  price: number;
};

export type Address = {
  fullName: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

export type Order = {
  id: string;
  customerId: string;
  items: OrderItem[];
  totalAmount: number;
  status: OrderStatus;
  shippingAddress: Address;
  paymentMethod: 'credit_card' | 'paypal';
  createdAt: string;
  updatedAt: string;
};



export const mockOrders: Order[] = [
    {
      id: "ORD-1234",
      customerId: "CUST-456",
      items: [
        {
          id: "ITEM-1",
          productId: "PROD-1",
          productName: "Premium T-Shirt",
          quantity: 2,
          price: 29.99,
        },
        {
          id: "ITEM-2",
          productId: "PROD-2",
          productName: "Slim Fit Jeans",
          quantity: 1,
          price: 59.99,
        },
      ],
      totalAmount: 119.97,
      status: "processing",
      shippingAddress: {
        fullName: "John Doe",
        streetAddress: "123 Main St",
        city: "Austin",
        state: "TX",
        zipCode: "78701",
        country: "USA",
      },
      paymentMethod: "credit_card",
      createdAt: "2025-04-10T14:30:00Z",
      updatedAt: "2025-04-10T14:30:00Z",
    },
    {
      id: "ORD-5678",
      customerId: "CUST-789",
      items: [
        {
          id: "ITEM-3",
          productId: "PROD-3",
          productName: "Wireless Headphones",
          quantity: 1,
          price: 149.99,
        },
      ],
      totalAmount: 149.99,
      status: "delivered",
      shippingAddress: {
        fullName: "Jane Smith",
        streetAddress: "456 Oak Ave",
        city: "Seattle",
        state: "WA",
        zipCode: "98101",
        country: "USA",
      },
      paymentMethod: "paypal",
      createdAt: "2025-04-05T09:15:00Z",
      updatedAt: "2025-04-07T16:45:00Z",
    },
    {
      id: "ORD-9012",
      customerId: "CUST-123",
      items: [
        {
          id: "ITEM-4",
          productId: "PROD-4",
          productName: "Smartwatch",
          quantity: 1,
          price: 199.99,
        },
        {
          id: "ITEM-5",
          productId: "PROD-5",
          productName: "Charging Cable",
          quantity: 2,
          price: 14.99,
        },
      ],
      totalAmount: 229.97,
      status: "shipped",
      shippingAddress: {
        fullName: "Robert Johnson",
        streetAddress: "789 Pine St",
        city: "Chicago",
        state: "IL",
        zipCode: "60601",
        country: "USA",
      },
      paymentMethod: "credit_card",
      createdAt: "2025-04-08T11:20:00Z",
      updatedAt: "2025-04-09T08:30:00Z",
    },
    {
      id: "ORD-3456",
      customerId: "CUST-234",
      items: [
        {
          id: "ITEM-6",
          productId: "PROD-6",
          productName: "Wireless Mouse",
          quantity: 1,
          price: 39.99,
        },
      ],
      totalAmount: 39.99,
      status: "pending",
      shippingAddress: {
        fullName: "Emily Davis",
        streetAddress: "321 Maple Dr",
        city: "Miami",
        state: "FL",
        zipCode: "33101",
        country: "USA",
      },
      paymentMethod: "credit_card",
      createdAt: "2025-04-15T16:40:00Z",
      updatedAt: "2025-04-15T16:40:00Z",
    },
    {
      id: "ORD-7890",
      customerId: "CUST-567",
      items: [
        {
          id: "ITEM-7",
          productId: "PROD-7",
          productName: "Bluetooth Speaker",
          quantity: 1,
          price: 89.99,
        },
        {
          id: "ITEM-8",
          productId: "PROD-8",
          productName: "Phone Case",
          quantity: 1,
          price: 19.99,
        },
      ],
      totalAmount: 109.98,
      status: "cancelled",
      shippingAddress: {
        fullName: "Michael Brown",
        streetAddress: "654 Elm St",
        city: "Denver",
        state: "CO",
        zipCode: "80201",
        country: "USA",
      },
      paymentMethod: "paypal",
      createdAt: "2025-04-12T13:25:00Z",
      updatedAt: "2025-04-13T10:15:00Z",
    },
  ];