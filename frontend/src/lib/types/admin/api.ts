 import { Product, Category, Order} from './types';
  
 async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {   
   await new Promise(resolve => setTimeout(resolve, 500));
   
   const response = await fetch(`/api/admin/${endpoint}`, options);
   
   if (!response.ok) {
     throw new Error(`API error: ${response.statusText}`);
   }
   
   return response.json() as Promise<T>;
 }
 
 export const productsApi = {
   getAll: () => fetchApi<Product[]>('products'),
   getById: (id: string) => fetchApi<Product>(`products/${id}`),
   create: (data: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => 
     fetchApi<Product>('products', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(data),
     }),
   update: (id: string, data: Partial<Omit<Product, 'id' | 'createdAt' | 'updatedAt'>>) => 
     fetchApi<Product>(`products/${id}`, {
       method: 'PUT',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(data),
     }),
   delete: (id: string) => 
     fetchApi<void>(`products/${id}`, { method: 'DELETE' }),
 };
 
 export const categoriesApi = {
   getAll: () => fetchApi<Category[]>('categories'),
   getById: (id: string) => fetchApi<Category>(`categories/${id}`),
   create: (data: Omit<Category, 'id' | 'createdAt' | 'updatedAt'>) => 
     fetchApi<Category>('categories', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(data),
     }),
   update: (id: string, data: Partial<Omit<Category, 'id' | 'createdAt' | 'updatedAt'>>) => 
     fetchApi<Category>(`categories/${id}`, {
       method: 'PUT',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(data),
     }),
   delete: (id: string) => 
     fetchApi<void>(`categories/${id}`, { method: 'DELETE' }),
 };
 
 export const ordersApi = {
   getAll: () => fetchApi<Order[]>('orders'),
   getById: (id: string) => fetchApi<Order>(`orders/${id}`),
   updateStatus: (id: string, status: Order['status']) => 
     fetchApi<Order>(`orders/${id}/status`, {
       method: 'PUT',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ status }),
     }),
 };


// export const ordersApi = {
//   getAll: async (): Promise<Order[]> => {
//     // Simulate API delay
//     await new Promise((resolve) => setTimeout(resolve, 800));
//     return [...mockOrders];
//   },

//   getById: async (id: string): Promise<Order | undefined> => {
//     await new Promise((resolve) => setTimeout(resolve, 500));
//     return mockOrders.find((order) => order.id === id);
//   },

//   updateStatus: async (id: string, status: OrderStatus): Promise<Order> => {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     const orderIndex = mockOrders.findIndex((order) => order.id === id);
    
//     if (orderIndex === -1) {
//       throw new Error("Order not found");
//     }
    
//     const updatedOrder = {
//       ...mockOrders[orderIndex],
//       status,
//       updatedAt: new Date().toISOString(),
//     };
    
//     // In a real implementation, this would update the backend
//     // For our mock, we'll just return the updated order
//     return updatedOrder;
//   }
// };