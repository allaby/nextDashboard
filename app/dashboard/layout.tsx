'use client';

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Loader from '@/app/ui/Loader';


import SideNav from '@/app/ui/dashboard/sidenav';

export const experimental_ppr = true; // Enable Partial Prerendering
 
export default function Layout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 300) // pour que le loader s'affiche brièvement

    return () => clearTimeout(timer)
  }, [pathname])
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {loading && <Loader />}
        {children}
        </div>
    </div>
  );
}