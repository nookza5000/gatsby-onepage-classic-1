module.exports = {
  siteMetadata: {
    title: `Onepage website`,
    description: `รับทำเว็บไซต์ราคาถูก`,
    author: `Whatsiteman studio`,
  },
  plugins: [    
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Whatsiteman`,
        short_name: `Whatsiteman`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/feature`,
        name: `feature`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-images`,
          // {
          //   resolve: `gatsby-remark-responsive-iframe`,
          //   options: {
          //     wrapperStyle: `margin-bottom: 1.0725rem`,
          //   },
          // },
          // `gatsby-remark-prismjs`,
           `gatsby-remark-copy-linked-files`,
          // `gatsby-remark-smartypants`,
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
