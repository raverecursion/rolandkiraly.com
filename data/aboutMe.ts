const style = (props) =>
  `color: var(--chakra-colors-brand-${
    props.colorMode === 'light' ? '600' : '300'
  });font-weight: 500;`;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const info = (props: any): { input: string; return: string }[] => [
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
    return: '["web dev", "biology", "neuroscience"]',
  },
  {
    input: 'self.hobbies',
    return: '["hiking", "mountain-climbing"]',
  },
  {
    input: 'self.skills',
    return:
      '[ "JavaScript","TypeScript", "Python", "React", "Next.JS", "Chakra-UI", ,"Styled-Components","Tailwind", "SASS", "git"]',
  },
  {
    input: 'self.contactMe()',
    return: `
    ["<a style="${style(
      props
    )}" rel="noopener" href="https://www.linkedin.com/in/kiralyroland/">LinkedIn</a>", "<a style="${style(
      props
    )}" rel="noopener" href="https://github.com/innellea">Github</a>"]`,
  },
];

export default info;
