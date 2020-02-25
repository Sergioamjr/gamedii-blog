module.exports = {
  siteMetadata: {
    title: "Blog Gamedii",
    description:
      "Blog destinado a pacientes portadores de Doença de Crohne Retocolite. Escrito por Sérgio Júnior com suporte da equipe Gamedii do Hospital Padre Bento de Guarulhos.",
    author: "@gatsbyjs",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "https://blog-gamedii.disqus.com/count.js",
      },
    },
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Merriweather",
            variants: ["300", "400", "700"],
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "blog.gamedii.com.br/wp/",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
        excludedRoutes: ["**/users", "**/settings", "**/themes"],
        includedRoutes: [
          "**/posts",
          "**/pages",
          "**/taxonomies",
          "**/menus",
          "**/media",
        ],
        normalizer: function({ entities }) {
          return entities
        },
      },
    },
  ],
}
