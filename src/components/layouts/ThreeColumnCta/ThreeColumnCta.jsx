import React from 'react'

import { FancyLink } from '@elements'

export const ThreeColumnCta = ({ links }) => {
  console.log('ThreeColumnCta -> links', links)
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid gap-8">
          {links.map((link) => {
            const slug = link?.pageRoute?.slug?.current
              ? `/${link?.pageRoute?.slug?.current}`
              : `/`
            return (
              <FancyLink key={link._key} to={slug} style={link.style}>
                {link.text}
              </FancyLink>
            )
          })}
        </div>
      </div>
    </section>
  )
}
