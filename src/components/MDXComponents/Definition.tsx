import { chakra, Tooltip, useColorModeValue } from '@chakra-ui/react';

import { transparentize } from '@chakra-ui/theme-tools';

interface DefinitionStylesProps {
  term: string;
  definition: string;
  link?: string;
}

export const Definition = ({ term, definition, link }: DefinitionStylesProps): JSX.Element => {
  return (
    <Tooltip
      placement={'top'}
      label={definition}
      hasArrow
      bg={useColorModeValue('main.50', '#314044')}
      color={useColorModeValue('main.900', 'main.200')}
      fontWeight='semibold'
      fontSize='md'
      py={1}
      px={2}
      borderRadius={'lg'}
    >
      <chakra.span
        lineHeight={3}
        as={link ? 'a' : 'span'}
        href={link ? link : null}
        //@ts-expect-error transparentize tools return string, but types are not applicable.
        bg={useColorModeValue('main.50', transparentize('main.200', 0.16))}
        borderRadius={'md'}
        _hover={{ cursor: link ? 'pointer' : 'normal' }}
        px={2}
        pl={'18px'}
        mr={'1px'}
        position='relative'
        verticalAlign='middle'
        color={useColorModeValue('main.900', 'main.200')}
        fontWeight='semibold'
      >
        <chakra.span
          position='absolute'
          top={0}
          left={'6px'}
          transform={'translateY(110%)'}
          height='7px'
          width='7px'
          borderRadius='50%'
          display='inline-flex'
          mr={1}
          my={'auto'}
          verticalAlign={'middle'}
          bg={useColorModeValue('main.800', 'main.200')}
        />
        {term}
      </chakra.span>
    </Tooltip>
  );
};
