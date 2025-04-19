import { Category } from '@/lib/types/admin/types';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

const categories: Category[] = [
  {
    id: '1',
    name: 'Beverages',
    description: 'For all drinks, tea, coffee, latte and others.',
    createdAt: new Date(2024, 6, 1).toISOString(),
    updatedAt: new Date(2024, 6, 1).toISOString(),
  },
  {
    id: '2',
    name: 'Bakes',
    description: 'Sweet delicious fluffy bundles of joy that melts in your mouth.',
    createdAt: new Date(2024, 6, 1).toISOString(),
    updatedAt: new Date(2024, 6, 1).toISOString(),
  },
  {
    id: '3',
    name: 'Salads',
    description: 'For all who want to enjoy something health and refreshing',
    createdAt: new Date(2024, 6, 1).toISOString(),
    updatedAt: new Date(2024, 6, 1).toISOString(),
  },
];

export async function GET() {
  return NextResponse.json(categories);
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  
  const newCategory: Category = {
    id: uuidv4(),
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  
  categories.push(newCategory);
  
  return NextResponse.json(newCategory, { status: 201 });
}
