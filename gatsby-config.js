module.exports = {
  siteMetadata: {
    title: `Damien Soulard`,
  },
  plugins: [
    `gatsby-plugin-glamor`,
    {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: 'UA-106325824-1',
    },
  },
  ],
}
