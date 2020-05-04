module.exports = {
  siteMetadata: {
    siteUrl: `https://mariamedvedik.ru`,
    title: `Maria Medvedik`,
    description: `Магазин ручной вышивки от московской художницы Марии Медведик`,
    author: `@grigiriy`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://mariamedvedik.ru',
        sitemap: 'https://mariamedvedik.ru/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: '56978935',
        webvisor: true,
        trackHash: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-164914074-1',
        head: false,
        anonymize: true,
        respectDNT: true,
        defer: false,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    //   `gatsby-transformer-sharp`,
    //   `gatsby-plugin-sharp`,
    //   {
    //     resolve: `gatsby-plugin-manifest`,
    //     options: {
    //       name: `gatsby-starter-default`,
    //       short_name: `starter`,
    //       start_url: `/`,
    //       background_color: `#663399`,
    //       theme_color: `#663399`,
    //       display: `minimal-ui`,
    //       icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //     },
    //   },
    //   // this (optional) plugin enables Progressive Web App + Offline functionality
    //   // To learn more, visit: https://gatsby.dev/offline
    //   // `gatsby-plugin-offline`,
  ],
};
