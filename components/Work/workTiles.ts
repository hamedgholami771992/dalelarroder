export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  // {
  //   description: `Here are things`,
  //   title: `I've worked on`,
  //   image: {
  //     src: '/static/images/aphex-apps.webp',
  //     width: 600,
  //     height: 770,
  //   },
  // },
  {
    description: `My first project`,
    title: `as a fullstack developer`,
    image: {
      src: '/static/images/seketehran-mob-1.png',
      width: 600,
      height: 770,
    },
  },
  {
    description: 'I am working on',
    title: 'Palhone backend app',
    image: {
      src: '/static/images/palphone.png',
      width: 600,
      height: 554,
    },
  },
  // {
  //   description: `I maintained`,
  //   title: 'Aphex Planner',
  //   image: {
  //     src: '/static/images/planner-app.webp',
  //     width: 600,
  //     height: 717,
  //   },
  // },
  // {
  //   description: `I built`,
  //   title: 'Aphex Publication',
  //   image: {
  //     src: '/static/images/publication-app.webp',
  //     width: 600,
  //     height: 717,
  //   },
  // },
];
