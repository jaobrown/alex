import React, { createContext, useContext } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Drawer } from '../Navigation'
import { useToggle } from '@hooks'

export const AppContext = createContext({
  isMenuOpen: false,
})

export const Layout = ({ children }) => {
  const { isToggled, toggle } = useToggle(false)

  return (
    <AppContext.Provider value={{ isMenuOpen: isToggled, toggleMenu: toggle }}>
      <div className="font-sans antialiased">
        <Header />
        <Drawer />
        <main className="">{children}</main>
        <Footer />
      </div>
    </AppContext.Provider>
  )
}

export const useAppState = () => useContext(AppContext)
