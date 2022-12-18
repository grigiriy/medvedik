module.exports = {
  siteMetadata: {
    siteUrl: `https://mariamedvedik.ru`,
    title: `Maria Medvedik`,
    description: `Магазин ручной вышивки от московской художницы Марии Медведик`,
    author: `@grigiriy`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("node-sass"),
      },
    },
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
    //   // this (optional) plugin enables Progressive Web App + Offline functionality
    //   // To learn more, visit: https://gatsby.dev/offline
    //   // `gatsby-plugin-offline`,
  ],
};
