import React from 'react'
import { useAppState } from '../../Layout'

export const Drawer = () => {
  const { isMenuOpen, toggleMenu } = useAppState()
  return isMenuOpen ? (
    <div className="bg-red-500">
      <button onClick={toggleMenu}>close</button>
      haha, drawer
    </div>
  ) : null
}
