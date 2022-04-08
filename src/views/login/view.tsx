import React, {FC, useCallback, useState} from 'react';
import {Box} from '@mui/material';
import {useDispatch} from 'react-redux';

import {useAuthenticationState} from '../../common/authentication/hooks';
import {loginAction} from '../../common/authentication/redux/actions';
import {Button, TextField} from '../../ui/components';

import {LoginForm} from './models';

const LoginView: FC = () => {
  const [form, setForm] = useState<LoginForm>({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const {loading} = useAuthenticationState();

  const formChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setForm({...form, [event.target.name]: event.target.value});
    },
    [form],
  );

  const loginHandler = useCallback((): void => {
    dispatch(loginAction(form));
  }, [form]);

  return (
    <Box>
      <TextField
        variant={'outlined'}
        value={form.email}
        placeholder={'Email'}
        type={'email'}
        name={'email'}
        onChange={formChangeHandler}
        disabled={loading}
      />
      <TextField
        variant={'outlined'}
        value={form.password}
        placeholder={'Password'}
        type={'password'}
        name={'password'}
        onChange={formChangeHandler}
        disabled={loading}
      />
      <Button onClick={loginHandler} disabled={loading}>
        Login
      </Button>
    </Box>
  );
};

export default LoginView;
