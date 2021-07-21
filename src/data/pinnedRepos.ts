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
    id: `rolandkiraly.com`,
    stack: ['Next.JS', 'TypeScript', 'Chakra-UI', 'MDX'],
    name: `My Website`,
    deployedLink: 'rolandkiraly.com',
    image:
      'https://user-images.githubusercontent.com/47287285/126173254-b30cafad-d757-4f5e-9a4e-f2c89b3657b2.png',
    longDescription: `Inspired by Lee Rob's website.`,
  },
  {
    id: `scuffedmdb`,
    stack: ['Next.JS', 'Chakra-UI'],
    name: `ScuffedMDB`,
    deployedLink: 'https://movie.michael-hall.me',
    image:
      'https://user-images.githubusercontent.com/47287285/125026394-616c8300-e07c-11eb-9678-a6e497119b7d.png',
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
