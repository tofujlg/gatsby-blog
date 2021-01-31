module.exports = {
  siteMetadata: {
    title: "k-log",
    author: "Kebeb",
    description: `Kebebの技術ブログ。主にMERN stackの学習の記録`,
    siteUrl: `https://jujekebab.com/`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: true,
      },
    },
    "gatsby-plugin-dark-mode",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-code-titles",
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              icon: false,
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
