import React from 'react'

import { Link } from '@elements'
import { X } from '@images/svg/X'
import { Box } from '@images/svg/Box'

export const Experience = ({ heading, subheading, resume }) => {
  console.log('Hero -> data', resume)
  return (
    <section className="pt-10 pb-10 text-black bg-white">
      <div className="container">
        <div className="relative text-center">
          <span className="absolute top-0 left-0 z-10 transform text-blue">
            <X className="w-8 h-8" />
          </span>
          <span className="absolute bottom-0 right-0 z-10 transform text-blue">
            <Box className="w-8 h-8" />
          </span>
          <h1 className="text-4xl font-bold leading-tight capitalize">
            {heading}
          </h1>
          <h2 className="mt-3 font-serif">{subheading}</h2>
          <Link
            to={`${resume.asset.url}?dl=`}
            kind="text"
            className="inline-block mt-5"
          >
            Download Resume
          </Link>
        </div>
      </div>
    </section>
  )
}
