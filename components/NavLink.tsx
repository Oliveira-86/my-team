// This creates a custom component that wraps an <a> tag

import Link from 'next/link'
import { FC } from 'react'

interface NavLinkProps {
  href: string
  name?: string
}

const NavLink: FC<NavLinkProps> = ({ href, name }) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <a className="underline ">{name}</a>
    </Link>
  )
}

export default NavLink
