const style = props =>
  `color: var(--chakra-colors-brand-${
    props.colorMode === 'light' ? '600' : '300'
  });font-weight: 500;`;
const info = props => [
  {
    input: 'self.learnAboutMe()',
    return: 'Loaded data...',
  },
  {
    input: 'self.currentLocation',
    return: '"London, UK"',
  },

  {
    input: 'self.interests',
    return: '["web dev", "biology", "tennis"]',
  },
  {
    input: 'self.education',
    return: '"B.Sc Computer Science - University of Birkbeck"',
  },
  {
    input: 'self.skills',
    return:
      '[ "JavaScript","TypeScript", "Python", "React", "Next.JS", "Chakra-UI", "Tailwind", "SASS", "git"]',
  },
  {
    input: 'self.contactMe()',
    return: `
    ["<a style="${style(
      props
    )}" rel="noopener" href="https://www.linkedin.com/in/kiralyroland/">LinkedIn</a>", "<a style="${style(
      props
    )}" rel="noopener" href="https://github.com/innellea">Github</a>"`,
  },
];

export default info;
