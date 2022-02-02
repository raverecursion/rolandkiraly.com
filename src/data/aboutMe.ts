import { ColorMode } from '@chakra-ui/react';

const style = (props: { colorMode: string }) =>
  `color: var(--chakra-colors-main-${
    props.colorMode === 'light' ? '600' : '300'
  });font-weight: 500;`;
const info = (props: { colorMode: ColorMode }) => [
  {
    input: 'self.learnAboutMe()',
    return: 'Loaded data...',
  },
  {
    input: 'self.currentLocation',
    return: '["Manchester, UK"]',
  },

  {
    input: 'self.interests',
    return: '["software-development", "neuroscience"]',
  },
  {
    input: 'self.hobbies',
    return: '["extreme-sports"]',
  },
  {
    input: 'self.skills',
    return:
      '[ "JavaScript","TypeScript", "React", "Next.JS", "Chakra-UI",,"Tailwind", "GraphQL", "SQL", "git"]',
  },
  {
    input: 'self.contactMe()',
    return: `
    ["<a style="${style(
      props
    )}" rel="noopener" href="https://www.linkedin.com/in/kiralyroland/">LinkedIn</a>", "<a style="${style(
      props
    )}" rel="noopener" href="https://github.com/innellea">Github</a>", <a style="${style(
      props
    )}" rel="noopener" href="mailto:contact@rolandkiraly.com">email</a>",]`,
  },
];

export default info;

// <a href="mailto:webmaster@example.com">Jon Doe</a>.
