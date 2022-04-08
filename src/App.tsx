import React, {FC, useEffect} from 'react';
import {Box, Theme} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {useDispatch} from 'react-redux';

import {IAuthentication} from './common/authentication/models';
import {loginSuccess} from './common/authentication/redux/actions';
import {DummyUser} from './common/authentication/temp/dummy';
import {AUTHENTICATION_KEY} from './common/helpers/storage/models';
import {getFromLocalStorage} from './common/helpers/storage/storage';
import Routes from './common/navigation/Routes';
import {setUserAction} from './views/main/redux/actions';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: theme.palette.secondary.main,
  },
}));

const App: FC = (): JSX.Element => {
  const styles = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    const authentication: IAuthentication | null =
      getFromLocalStorage(AUTHENTICATION_KEY);
    if (authentication) {
      dispatch(loginSuccess(authentication));
      dispatch(setUserAction(DummyUser));
    }
  }, [dispatch, loginSuccess, setUserAction, getFromLocalStorage]);
  return (
    <Box className={styles.root}>
      <Routes />
    </Box>
  );
};

export default App;
