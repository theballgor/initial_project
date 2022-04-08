import {ButtonProps as BaseButtonProps} from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    green: true;
    yellow: true;
    red: true;
    white: true;
    dark: true;
    pink: true;
  }
}

export type ButtonProps = Omit<
  BaseButtonProps,
  'disableRipple' | 'disableTouchRipple' | 'disableFocusRipple' | 'variant'
> & {variant?: Exclude<BaseButtonProps['variant'], 'text'>};
