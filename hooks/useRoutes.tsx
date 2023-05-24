import { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { TbCarouselHorizontal } from 'react-icons/tb'
import { HiArrowLeftOnRectangle } from 'react-icons/hi2'

const useRoutes = () => {
  const pathname = usePathname()

  const routes = useMemo(
    () => [
      {
        label: 'Users',
        href: '/users',
        icon: TbCarouselHorizontal,
        active: pathname === '/users',
      },
      {
        label: 'Logout',
        onClick: () => {},
        href: '',
        icon: HiArrowLeftOnRectangle,
      },
    ],
    [pathname]
  )

  return routes
}

export default useRoutes
