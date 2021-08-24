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
    name: 'Disney-ish',
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
    id: `noir`,
    stack: ['React', 'Redux', 'Styled-Components'],
    name: `Noir E-Commerce`,
    deployedLink: 'https://noir-e-commerce.herokuapp.com/',
    image: '/static/images/screenshots/screenshot-hype-train.png',
    longDescription: `A fully functional E-Commerce app I built during the latter half of quarantine`,
  },
  {
    id: `a-bnb-ish`,
    stack: ['React', 'Redux', 'Styled-Components'],
    name: `Airbnb-ish`,
    deployedLink: 'https://air-bn-b-ish.vercel.app/',
    image: '/static/images/screenshots/screenshot-abnb.png',
    longDescription: `Inspired by Airbnb's website with 2020's Olympics theme`,
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
