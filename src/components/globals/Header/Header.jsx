import React from 'react'

import { Link } from '@elements'
import {
  Mobile as MobileNavigation,
  Desktop as DesktopNavigation,
} from '@globals'
import { Logo } from '@images/svg/Logo'

export const Header = ({ colorMode }) => {
  return (
    <header
      className={`py-6 ${
        colorMode === 'dark'
          ? 'text-white bg-gray-700'
          : 'bg-white text-gray-700'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link
          to="/"
          className={`${colorMode === 'dark' ? 'text-white' : 'text-gray-700'}`}
        >
          <Logo className="w-16 h-16 sm:w-20 sm:h-20" />
        </Link>
        <div>
          <DesktopNavigation />
          <MobileNavigation />
        </div>
      </div>
    </header>
  )
}
