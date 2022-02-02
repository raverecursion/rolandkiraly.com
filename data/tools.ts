export type categories = `windows` | `web` | 'api' | 'ui/ux';

export interface ToolType {
  link: string;
  id: string;
  name: string;
  category: categories[];
  labels?: string[];
  description: string;
}

const Tools: ToolType[] = [
  {
    id: `postman`,
    category: [`api`],
    link: `https://www.postman.com/`,
    labels: [`Testing`, `Debug`],
    name: `Postman`,
    description: `API Development and Testing Platform`,
  },
  {
    id: `react-icons`,
    category: [`ui/ux`],
    link: `https://react-icons.github.io/react-icons/`,
    labels: [`web`],
    name: `React Icons`,
    description: `Fast Access to popular icons with es6 imports`,
  },
  {
    id: `cacher`,
    category: [`windows`],
    link: `https://www.cacher.io/`,
    labels: [`productivity`],
    name: `Cacher`,
    description: `Code snippet organizer`,
  },
  {
    id: `fiddler`,
    category: [`web`, `api`],
    link: `https://www.telerik.com/fiddler`,
    labels: ['Testing', 'Debug'],
    name: `Fiddler`,
    description: `Web Debugging proxy and troubleshooting tool `,
  },
  {
    id: `notion`,
    category: [`windows`],
    link: `https://www.notion.so/`,
    labels: [`productivity`],
    name: `Notion`,
    description: `All-in-one productivity software`,
  },
  {
    id: `storybook`,
    category: [`windows`],
    link: `https://storybook.js.org/`,
    labels: [`productivity`],
    name: `Storybook`,
    description: `Open source tool for building UI components and pages in isolation`,
  },
  {
    id: `pnpm`,
    category: [`windows`],
    link: `https://pnpm.io/`,
    labels: [`web`],
    name: `pnpm`,
    description: `Fast, disk space efficient package manager`,
  },
  {
    id: `sourcetree`,
    category: [`windows`],
    link: `https://www.sourcetreeapp.com/`,
    labels: [`git`],
    name: `SourceTree`,
    description: `GUI client for Git and Mercurial.`,
  },
  {
    id: `vscode`,
    category: [`windows`],
    link: `https://code.visualstudio.com/`,
    labels: [`Editor`],
    name: `Visual Studio Code`,
    description: `A lightweight code editor with plenty of plugins.`,
  },
  {
    id: `adobe-xd`,
    category: [`ui/ux`],
    link: `https://www.adobe.com/products/xd.html`,
    labels: [`UI/UX design tool`],
    name: `Adobe XD`,
    description: `Vector-based UX design tool for web apps`,
  },
  {
    id: `figma`,
    category: [`ui/ux`],
    link: `https://www.figma.com/`,
    labels: [`UI/UX design tool`],
    name: `Figma`,
    description: ` Web based vector graphics editor and prototyping tool`,
  },
  {
    id: `rocket`,
    category: [],
    link: `https://matthewpalmer.net/rocket/`,
    labels: [`Emoji`],
    name: `Rocket`,
    description: `Globally search emojis.`,
  },
];
export default Tools;
