import React from 'react';
import {
  PaletteColor,
  PaletteColorOptions,
} from '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
  interface Theme {
    test?: '';
  }
  interface ThemeOptions {
    test?: '';
  }
  interface Palette {
    green: PaletteColor;
    yellow: PaletteColor;
    red: PaletteColor;
    white: PaletteColor;
    dark: PaletteColor;
    pink: PaletteColor;
  }
  interface PaletteOptions {
    green: PaletteColorOptions;
    yellow: PaletteColorOptions;
    red: PaletteColorOptions;
    white: PaletteColorOptions;
    dark: PaletteColorOptions;
    pink: PaletteColorOptions;
  }
}
