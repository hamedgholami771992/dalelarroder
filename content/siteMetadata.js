const siteMetadata = {
  title: 'Hamed Gholami',
  author: 'Hamed Gholami',
  headerTitle: 'Hamed',
  description: 'Fullstack developer @ Proshot',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://hamedgholami.com',
  siteRepo: 'https://github.com/hamedgholami771992',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'hamedgholami771992@gmail.com',
  github: 'https://github.com/hamedgholami771992',
  twitter: 'https://twitter.com/hamedgholami771992',
  facebook: 'https://facebook.com/hamedgholami771992',
  linkedin: 'www.linkedin.com/in/hamedgholami',
  spotify: 'https://open.spotify.com/user/12162121994?si=e685b3546f414967',
  steam: 'https://steamcommunity.com/id/dlarroder/',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
