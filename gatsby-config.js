require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: `Alexandra Brown`,
    description: `Website for Alexandra Brown`,
    author: `@jaobrown`,
    siteUrl: `https://alexandrabrown.me`,
  },
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `lvwcfzpn`,
        dataset: `production`,
        graphqlTag: 'default',
      },
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src', // <- will be used as a root dir — alias paths below will be relative to this
        aliases: {
          '@elements': './components/elements', // <- "@elements" will become ./src/elements
          '@globals': './components/globals',
          '@hooks': './hooks',
          '@images': './images',
          '@layouts': './components/layouts',
          '@utils': './utils',
          '@static': '../static',
        },
      },
    },
    `gatsby-plugin-postcss`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Alexandra Brown`,
    //     short_name: `Alexandra Brown`,
    //     start_url: `/`,
    //     background_color: `#ffffff`,
    //     theme_color: `#2E3030`,
    //     display: `standalone`,
    //     icon: `src/images/png/icon.png`,
    //   },
    // },
    `gatsby-plugin-sitemap`,
  ],
}
