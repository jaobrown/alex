import React from 'react'
import { Layout } from '@globals'

const IndexPage = () => {
  return (
    <Layout>
      <section>
        <div className="container">
          <div className="font-serif text-4xl">Hello world</div>
          <div className="font-sans text-6xl font-bold">Hello world</div>
          <div className="grid grid-flow-col auto-cols-fr gap-8">
            <div className="bg-white h-40 rounded-md shadow-inner"></div>
            <div className="bg-black h-40 rounded-md shadow-inner"></div>
            <div></div>
            <div></div>
            <div className="bg-gray-100 h-40 rounded-md shadow-inner"></div>
            <div className="bg-gray-200 h-40 rounded-md shadow-inner"></div>
            <div className="bg-gray-300 h-40 rounded-md shadow-inner"></div>
            <div className="bg-gray-400 h-40 rounded-md shadow-inner"></div>
            <div className="bg-gray-500 h-40 rounded-md shadow-inner"></div>
            <div className="bg-gray-600 h-40 rounded-md shadow-inner"></div>
            <div className="bg-gray-700 h-40 rounded-md shadow-inner"></div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
