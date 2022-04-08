import {createTheme} from '@mui/material';
import {PaletteOptions} from '@mui/material/styles';

const COLOR_PALETTE: PaletteOptions = {
  green: {
    main: '#23af42',
    contrastText: '#ffffff',
  },
  yellow: {
    main: '#e7c81f',
    contrastText: '#1d1f23',
  },
  red: {
    main: '#e52040',
    contrastText: '#ffffff',
  },
  white: {
    main: '#ffffff',
    contrastText: '#1d1f23',
  },
  dark: {
    main: '#1d1f23',
    contrastText: '#ffffff',
  },
  pink: {
    main: '#de189e',
    contrastText: '#ffffff',
  },
};

export const main = createTheme({
  palette: {
    ...COLOR_PALETTE,
    primary: {
      main: '#007bff',
      dark: '#006be1',
      light: '#1786ff',
    },
    secondary: {
      main: '#1d1f23',
    },
  },
});
