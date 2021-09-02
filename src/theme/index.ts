import { ChakraTheme, extendTheme, ThemeComponentProps } from '@chakra-ui/react';
import { transparentize, mode } from '@chakra-ui/theme-tools';

// 2. Call `extendTheme` and pass your custom values

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
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
      primary: `#F0A70A`,
      '50': '#FEF5E2',
      '100': '#FDECC9',
      '200': '#FBDB98',
      '300': '#F9CB67',
      '400': '#F7BA36',
      '500': '#F0A70A',
      '600': '#BF8508',
      '700': '#8E6306',
      '800': '#5D4104',
      '900': '#2C1F02',
    },
  },
});

export default theme;
