import React, {FC} from 'react';
import {Grid, Typography} from '@mui/material';
import {useDispatch} from 'react-redux';

import {logout} from '../../common/authentication/redux/actions';
import {Button} from '../../ui/components';

import {useMainReducer} from './hooks';

const MainView: FC = (): JSX.Element => {
  const {user} = useMainReducer();
  const dispatch = useDispatch();

  const logoutHandler = (): void => {
    dispatch(logout());
  };

  return (
    <Grid container gap={1} pt={4}>
      <Button color={'green'} onClick={logoutHandler}>
        Logout
      </Button>
      {user && (
        <Typography sx={{color: 'white.main'}}>{user.username}</Typography>
      )}
    </Grid>
  );
};

export default MainView;
