import { getTotalCharCode } from '@/utils/utils';
import { Stack, Tag, TagLabel, TagLeftIcon, useMediaQuery } from '@chakra-ui/react';
import { BsFillLightningFill } from 'react-icons/bs';
import { FaDiscord, FaReact } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io';
import { SiMarkdown, SiPostman } from 'react-icons/si';
import { BootstrapIcon, NextJSIcon, SemanticIcon, TailwindCSSIcon, TypeScriptIcon } from '../Icons';

const tagDict = {
  React: FaReact,
  'Next.JS': NextJSIcon,
  TypeScript: TypeScriptIcon,
  TailwindCSS: TailwindCSSIcon,
  Node: IoLogoNodejs,
  'Chakra-UI': BsFillLightningFill,
  MDX: SiMarkdown,
  'Discord.JS': FaDiscord,
  'Semantic-UI': SemanticIcon,
  Bootstrap: BootstrapIcon,
  Postman: SiPostman,
};

interface TagsProps {
  tags: string[] | undefined;
}

const Tags = ({ tags }: TagsProps): JSX.Element => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  return (
    <Stack height='25px' isInline>
      {tags?.map(tag => (
        <Tag
          key={tag}
          colorScheme={`${
            ['red', 'orange', 'yellow', 'green', 'main', 'teal', 'blue', 'cyan', 'pink', 'purple'][
            getTotalCharCode(tag) % 10
              ]
          }`}
          size={isLargerThan800 ? 'md' : 'sm'}
        >
          <TagLeftIcon marginInlineEnd={'6px'} as={tagDict[tag]}></TagLeftIcon>

          <TagLabel fontWeight={'600'}>{tag}</TagLabel>
        </Tag>
      ))}
    </Stack>
  );
};

export default Tags;
