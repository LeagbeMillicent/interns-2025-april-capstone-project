import { Product } from '@/lib/types/admin/types';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

const products: Product[] = [
  {
    id: '1',
    name: 'Iced Americano',
    description: 'Iced Americano tea with milk and two sugars.',
    price: 45,
    categoryId: '1',
    imageUrl: 'https://res.cloudinary.com/dpyjjedao/image/upload/v1744573388/878696bc21241c9ff4c70e30e89c747b_uzfnpl.jpg',
    stock: 45,
    createdAt: new Date(2024, 7, 15).toISOString(),
    updatedAt: new Date(2024, 7, 15).toISOString(),
  },
  {
    id: '2',
    name: 'Expresso',
    description: 'A coffee blend of intense flavors and mouth soothing taste',
    price: 50,
    categoryId: '1',
    imageUrl: 'https://res.cloudinary.com/dpyjjedao/image/upload/v1744573405/2d20004f27589fe951a33ee3d0c5aeb0_zqxnb8.jpg',
    stock: 20,
    createdAt: new Date(2024, 7, 25).toISOString(),
    updatedAt: new Date(2024, 9, 2).toISOString(),
  },
  {
    id: '3',
    name: 'Macrons',
    description: 'Sweet delicous sugary delicay to sweeteen up your day.',
    price: 40,
    categoryId: '2',
    imageUrl: 'https://res.cloudinary.com/dpyjjedao/image/upload/v1744573335/6090f33f2560fe4af5d81b23426f1b9d_k0tovn.jpg',
    stock: 15,
    createdAt: new Date(2024, 6, 10).toISOString(),
    updatedAt: new Date(2024, 6, 10).toISOString(),
  },
  {
    id: '4',
    name: 'Red Velvet Cake',
    description: 'Portable speaker with amazing sound quality',
    price: 40,
    categoryId: '2',
    imageUrl: 'https://res.cloudinary.com/dpyjjedao/image/upload/v1744573426/8950ef5e02ccbe9d7fc6395bd4fb6340_xfsea3.jpg',
    stock: 50,
    createdAt: new Date(2024, 8, 12).toISOString(),
    updatedAt: new Date(2024, 8, 12).toISOString(),
  },
  {
    id: '5',
    name: 'Chicken Salad',
    description: 'Staying healthy with a dash of protein to shaken your taste buds',
    price: 45,
    categoryId: '3',
    imageUrl: 'https://res.cloudinary.com/dpyjjedao/image/upload/v1744573443/1d103929c465af0c5a9e6d1d5593a893_wutobp.jpg',
    stock: 30,
    createdAt: new Date(2024, 8, 5).toISOString(),
    updatedAt: new Date(2024, 8, 5).toISOString(),
  },
];

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  
  const newProduct: Product = {
    id: uuidv4(),
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  
  products.push(newProduct);
  
  return NextResponse.json(newProduct, { status: 201 });
}
