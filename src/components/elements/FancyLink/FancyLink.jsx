import React from 'react'

import { Link } from '@elements'

import { StripeBall } from '@images/svg/StripeBall'
import { SolidBall } from '@images/svg/SolidBall'
import { OutlineBall } from '@images/svg/OutlineBall'

export const FancyLink = ({ style, to, className, children }) => {
  let type

  switch (style) {
    case 'stripes':
      type = <StripeBall className="w-8 h-8" />
      break
    case 'solid':
      type = <SolidBall className="w-8 h-8" />
      break
    case 'outline':
      type = <OutlineBall className="w-8 h-8" />
      break
    default:
      type = <div>Oops! Unhandled style type of {style}</div>
      break
  }

  return (
    <div>
      <span className="text-blue">{type}</span>
      <Link to={to} className={className}>
        {children}
      </Link>
    </div>
  )
}
