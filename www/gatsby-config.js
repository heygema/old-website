require("dotenv").config();

const siteMetadata = {
  title: `Gema Anggada`,
  name: `Gema`,
  navTitle: '👻 Gema',
  siteUrl: `https://heygema.github.io`,
  description: `Gema Anggada's personal internet space for blogging and bio.`,
  hero: {
    heading: `Welcome!`,
    maxWidth: 652,
  },
  social: [
    {
      url: `https://twitter.com/heygema`,
    },
    {
      url: `https://github.com/heygema`,
    },
    {
      url: `https://instagram.com/heygema`,
    },
    {
      url: `https://codepen.io/heygema`,
    },
    {
      url: 'https://www.linkedin.com/in/heygema/'
    },
    {
      name: 'stackoverflow',
      url: `https://stackoverflow.com/users/3465227/ghostkraviz?tab=profile`,
    },
    {
      name: `mailto`,
      url: `mailto:gema@posteo.net`,
    },
  ],
};

const plugins = [
  {
    resolve: "@narative/gatsby-theme-novela",
    options: {
      contentPosts: "content/posts",
      contentAuthors: "content/authors",
      rootPath: "/",
      basePath: "/",
      authorsPage: true,
      mailchimp: true,
      sources: {
        local: true,
        contentful: false,
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Gema Anggada`,
      short_name: `Gema`,
      start_url: `/`,
      background_color: `#fff`,
      theme_color: `#fff`,
      display: `standalone`,
    },
  },
  // NOTE: remove analytics
  // {
  //   resolve: `gatsby-plugin-google-analytics`,
  //   options: {
  //     trackingId: "UA-118232427-3",
  //   },
  // },
  {
    resolve: "gatsby-plugin-mailchimp",
    options: {
      endpoint:
        "https://github.us2.list-manage.com/subscribe/post?u=891008f2da0cae715f3833eeb&id=e647010d64"
    },
  },
];

/**
 * For development purposes if there's no Contentful Space ID and Access Token
 * set we don't want to add in gatsby-source-contentful because it will throw
 * an error.
 *
 * To enanble Contentful you must
 * 1. Create a new Space on contentful.com
 * 2. Import the Contentful Model from @narative/gatsby-theme-novela/conteful
 * 3. Add .env to www/ (see www/env.example)
 * 4. Enable contentful as a source in this file for @narative/gatsby-theme-novela
 */
if (process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN) {
  // NOTE: removed contentful
  // plugins.push({
  //   resolve: "gatsby-source-contentful",
  //   options: {
  //     spaceId: process.env.CONTENTFUL_SPACE_ID,
  //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  //   },
  // });
}

module.exports = {
  siteMetadata,
  plugins,
};
