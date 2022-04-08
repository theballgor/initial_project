import React, {FC} from 'react';
import {TextField as BaseTextField} from '@mui/material';

import {TextFieldProps} from './models';

const TextField: FC<TextFieldProps> = (props) => {
  return <BaseTextField {...props} />;
};

export default TextField;
