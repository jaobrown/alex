import React from 'react'

import { Link } from '@elements'

export const Desktop = () => {
  return (
    <nav className="hidden text-sm sm:block">
      <Link to="/" className="ml-12" activeClassName="text-blue">
        about
      </Link>
      <Link to="/experience" className="ml-12" activeClassName="text-blue">
        experience
      </Link>
      <Link to="/work" className="ml-12" activeClassName="text-blue">
        work
      </Link>
      <Link to="/" className="ml-12">
        contact
      </Link>
    </nav>
  )
}
