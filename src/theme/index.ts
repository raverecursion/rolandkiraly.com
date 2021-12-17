import { ChakraTheme, extendTheme, ThemeComponentProps } from '@chakra-ui/react';
import { mode, transparentize } from '@chakra-ui/theme-tools';

// 2. Call `extendTheme` and pass your custom values

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark',
  },
  components: {
    Link: {
      baseStyle: props => ({
        color: mode('main.600', 'main.300')(props),
      }),
    },
    Heading: {
      baseStyle: {
        fontFamily: 'Ubuntu',
      },
    },
    Text: {
      baseStyle: {
        fontFamily: 'Ubuntu',
      },
    },
    Button: {
      variants: {
        ghostAlwaysOn: (props: ThemeComponentProps<ChakraTheme>) => {
          const darkBg = transparentize(`${props.colorScheme}.200`, 0.12)(props.theme);
          const darkHoverBg = transparentize(`${props.colorScheme}.200`, 0.24)(props.theme);
          const darkActiveBg = transparentize(`${props.colorScheme}.200`, 0.36)(props.theme);
          return {
            color: mode(`${props.colorScheme}.600`, `${props.colorScheme}.200`)(props),
            bgColor: props.colorMode === 'light' ? `${props.colorScheme}.50` : darkBg,
            _hover: {
              bgColor: mode(`${props.colorScheme}.100`, darkHoverBg)(props),
            },
            _active: {
              bgColor: mode(`${props.colorScheme}.200`, darkActiveBg)(props),
            },
          };
        },
      },
    },
  },
  styles: {
    global: (props: any) => ({
      '*': {
        bg: 'none',

        _selection: {
          //TODO Change red 50 to white
          color: props.colorMode === `dark` ? `black` : `Red 50`,
          bg: props.colorMode === `dark` ? `main.300` : `main.600`,
        },
      },
    }),
  },
  colors: {
    main: {
      primary: '#1DB954',
      '50': '#C6F6D7',
      '100': '#AFF3C7',
      '200': '#83ECA8',
      '300': '#57E589',
      '400': '#2BDE6A',
      '500': '#1DB954',
      '600': '#168D40',
      '700': '#0F612C',
      '800': '#083518',
      '900': '#010904',
    },
  },
});

export default theme;
