import Sidebar from '@/components/sidebar';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 p-6 md:p-8 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}