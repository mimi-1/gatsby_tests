/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
    description: "Totorial part four of Gatsby",
    author: {
      name: `Morten Rand-Hendriksen`,
      summary: `a ballroom dancer playing at being a developer.`,
    },
    description: `An opinionated starter for Gatsby`,
    url: `https://something.or.other`,
    logo: `/logo.png`,
    social: [{ name: ``, link: `` }],
    menuLinks: [
      {
        name: `Home`,
        link: `/`,
      },
      {
        name: `Articles`,
        link: `/articles`,
      },
      {
        name: `About`,
        link: `/about`,
      },
      {
        name: `Events`,
        link: `/events`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
