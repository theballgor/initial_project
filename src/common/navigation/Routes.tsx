import React, {FC} from 'react';
import {Navigate, Route, Routes as ReactRoutes} from 'react-router-dom';

import LoginView from '../../views/login/view';
import MainView from '../../views/main/view';
import RegisterView from '../../views/register/view';
import {useAuthenticationState} from '../authentication/hooks';

import {Paths} from './Paths';

const Routes: FC = (): JSX.Element => {
  const {token} = useAuthenticationState();
  return (
    <ReactRoutes>
      {!!token ? (
        <>
          <Route path={Paths.Default} element={<MainView />} caseSensitive />
          <Route path={'*'} element={<Navigate to={Paths.Default} />} />
        </>
      ) : (
        <>
          <Route path={Paths.Login} element={<LoginView />} caseSensitive />
          <Route
            path={Paths.Register}
            element={<RegisterView />}
            caseSensitive
          />
          <Route path={'*'} element={<Navigate to={Paths.Login} />} />
        </>
      )}
    </ReactRoutes>
  );
};

export default Routes;
