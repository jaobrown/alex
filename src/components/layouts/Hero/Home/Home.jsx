import React from 'react'

import { StripeBall } from '@images/svg/StripeBall'

export const Home = ({ heading, subheading }) => {
  return (
    <section className="pb-24 text-white bg-gray-700 pt-15">
      <div className="container">
        <div className="relative mx-auto w-min-content">
          <span className="absolute top-0 left-0 z-10 transform -translate-x-12 -translate-y-1/2 text-blue">
            <StripeBall className="w-24 h-24" />
          </span>
          <h1 className="relative z-20 text-4xl font-bold leading-tight tracking-wide capitalize">
            {heading}
          </h1>
          <h2 className="relative z-20 flex items-center justify-start font-serif text-right md:justify-end">
            <span className="hidden w-20 h-0 mr-4 border-b border-white md:inline-block"></span>
            {subheading}
          </h2>
        </div>
      </div>
    </section>
  )
}
