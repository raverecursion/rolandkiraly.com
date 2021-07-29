export const pinnedRepos: pinnedRepoType[] = [
  {
    image: '/static/images/screenshots/screenshot-lmt.png',
    name: 'Lords Mobile Tools',
    stack: ['React', 'Bootstrap', 'Semantic-UI'],
    id: 'lordsMobileTools',
    deployedLink: 'https://lords-mobile-tools.herokuapp.com/',

    longDescription:
      'A quick tool I whipped up to help Lords Mobile players choose the best in-game items.',
  },
  {
    id: 'streamable',
    name: 'Streamable',
    image: '/static/images/screenshots/screenshot-streamable.png',
    stack: ['React', 'Next.JS', 'TailwindCSS'],
    deployedLink: 'https://streamable.netlify.app/home',
    longDescription: 'Inspired by Disney+ with fully functional streaming capabilities.',
  },

  {
    id: `cloudy-mood`,
    stack: ['Three.JS'],
    name: `Cloudy Mood`,
    deployedLink: 'https://innellea.github.io/Cloudy-Mood/',
    image: '/static/images/screenshots/screenshot-cloudy-mood.png',
    longDescription: `This is a "simple" cloud simulation app inspired by rainymood. Built with Three.JS`,
  },
  {
    id: `rolandkiraly.com`,
    stack: ['Next.JS', 'TypeScript', 'Chakra-UI', 'MDX'],
    name: `My Website`,
    deployedLink: 'https://rolandkiraly.com',
    image: '/static/images/screenshots/screenshot-rolandkiraly.png',
    longDescription: `Inspired by Lee Rob's website.`,
  },

  {
    id: `hype-train`,
    stack: ['React', 'Redux', 'Styled-Components'],
    name: `Hype Train E-Commerce`,
    deployedLink: 'https://noir-clothing-testing.herokuapp.com/',
    image: '/static/images/screenshots/screenshot-hype-train.png',
    longDescription: `I built the first version of this website during the latter half of quarantine to rate movies that my friends and I had watched over discord. Then decided it needed a remodel, and created ScuffedMDB (Movie-rating V2.0), made with NextJS and ChakraUI. It has been great to make a website, that not only all my friends can use, but other people can use (and have :)) for their own movie rating sites.`,
  },
];

export interface pinnedRepoType {
  id: string;
  name: string;
  image?: string;
  deployedLink?: string;
  longDescription: string;
  stack?: string[];
}
