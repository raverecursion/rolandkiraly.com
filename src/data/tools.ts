export type categories = `windows` | `web` | 'api' | 'design';

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
    labels: [`Testing`],
    name: `Postman`,
    description: `API Development and Testing Platform`,
  },
  {
    id: `react-icons`,
    category: [`web`],
    link: `https://react-icons.github.io/react-icons/`,
    labels: [`web`],
    name: `React Icons`,
    description: `Fast Access to popular icons with es6 imports`,
  },
  {
    id: `cacher`,
    category: [`windows`],
    link: `https://react-icons.github.io/react-icons/`,
    labels: [`web`],
    name: `Cacher`,
    description: `Fast Access to popular icons with es6 imports`,
  },
  {
    id: `fiddler`,
    category: [`web`],
    link: `https://react-icons.github.io/react-icons/`,
    labels: ['Testing', 'Debug'],
    name: `Fiddler`,
    description: `Fast Access to popular icons with es6 imports`,
  },
  {
    id: `notion`,
    category: [`windows`],
    link: `https://react-icons.github.io/react-icons/`,
    labels: [`web`],
    name: `Notion`,
    description: `Fast Access to popular icons with es6 imports`,
  },
  {
    id: `pnpm`,
    category: [`windows`],
    link: `https://react-icons.github.io/react-icons/`,
    labels: [`web`],
    name: `pnpm`,
    description: `Fast Access to popular icons with es6 imports`,
  },
  {
    id: `sourcetree`,
    category: [`windows`],
    link: `https://react-icons.github.io/react-icons/`,
    labels: [`web`],
    name: `SourceTree`,
    description: `Fast Access to popular icons with es6 imports`,
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
    id: `webstorm`,
    category: [`windows`],
    link: `https://www.jetbrains.com/webstorm/`,
    labels: [`Editor`],
    name: `WebStorm`,
    description: `A JS IDE that works great.`,
  },

  {
    id: `biorender`,
    category: [`web`],
    link: `https://biorender.com`,
    labels: [`Diagram Creation`],
    name: `BioRender`,
    description: `A web application for creating nice looking scientific figures.`,
  },
  {
    id: `adobe-xd`,
    category: [`design`],
    link: `https://biorender.com`,
    labels: [`Diagram Creation`],
    name: `Adobe XD`,
    description: `A web application for creating nice looking scientific figures.`,
  },
  {
    id: `figma`,
    category: [`design`],
    link: `https://biorender.com`,
    labels: [`Diagram Creation`],
    name: `Figma`,
    description: `A web application for creating nice looking scientific figures.`,
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
