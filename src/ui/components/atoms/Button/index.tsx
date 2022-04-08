import React, {FC} from 'react';
import {Button as BaseButton} from '@mui/material';

import {ButtonProps} from './models';

const Button: FC<ButtonProps> = ({
  variant = 'contained',
  ...props
}): JSX.Element => {
  return <BaseButton {...props} variant={variant} />;
};

export default Button;
