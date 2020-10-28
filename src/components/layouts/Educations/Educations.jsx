import React from 'react'

export const Educations = ({ educations }) => {
  return (
    <section className="py-12 mt-6 lg:pb-15">
      <div className="container max-w-2xl mx-none lg:max-w-4xl xl:max-w-5xl">
        <h2 className="text-lg font-semibold tracking-widest uppercase md:text-xl text-blue">
          education
        </h2>
        <div className="mt-8 lg:mt-12">
          {educations.map((education) => (
            <div key={education.id} className="mx-auto sm:px-10 md:px-13">
              <p className="font-serif text-sm">
                {education.startDate} -{' '}
                {education.endDate ? education.endDate : `Present`}
              </p>
              <h3 className="text-xl font-bold tracking-wider uppercase md:text-2xl">
                {education.school}
              </h3>
              <h4 className="mt-6 text-sm font-semibold tracking-wider uppercase md:text-base">
                {education.degree}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
