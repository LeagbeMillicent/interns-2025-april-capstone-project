import { Product } from '@/lib/types/admin/types';
import { NextRequest, NextResponse } from 'next/server';

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
];

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const product = products.find(p => p.id === params.id);
  
  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
  
  return NextResponse.json(product);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const data = await request.json();
  const index = products.findIndex(p => p.id === params.id);
  
  if (index === -1) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
  
  products[index] = {
    ...products[index],
    ...data,
    updatedAt: new Date().toISOString(),
  };
  
  return NextResponse.json(products[index]);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const index = products.findIndex(p => p.id === params.id);
  
  if (index === -1) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
  
  products.splice(index, 1);
  
  return NextResponse.json({}, { status: 204 });
}