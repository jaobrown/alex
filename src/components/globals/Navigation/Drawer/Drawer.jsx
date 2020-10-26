import React from 'react'

import { useAppState } from '@globals'
import { Link } from '@elements'

export const Drawer = () => {
  const { isMenuOpen, toggleMenu } = useAppState()
  return !isMenuOpen ? null : (
    <div className="bg-red-500">
      <button onClick={toggleMenu}>close</button>
      <nav>
        <Link to="/" className="ml-8">
          home
        </Link>
        <Link to="/experience/" className="ml-8">
          experience
        </Link>
        <Link to="/work/" className="ml-8">
          work
        </Link>
      </nav>
    </div>
  )
}
