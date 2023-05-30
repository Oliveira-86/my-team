'use client'

import { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { TbCarouselHorizontal } from 'react-icons/tb'
import { HiArrowLeftOnRectangle } from 'react-icons/hi2'

const useRoutes = () => {
  const pathname = usePathname()

  const routes = useMemo(
    () => [
      {
        label: 'Home',
        href: '/home',
        icon: TbCarouselHorizontal,
        active: pathname === '/home',
      },
      {
        label: 'Logout',
        onClick: () => localStorage.clear(),
        href: '/',
        icon: HiArrowLeftOnRectangle,
      },
    ],
    [pathname]
  )

  return routes
}

export default useRoutes
