import {useSelector} from 'react-redux';

import {AppReducer} from '../redux/reducer';

import {AuthenticationReducer} from './models';

export const useAuthenticationState = (): AuthenticationReducer => {
  return useSelector((state: AppReducer) => state.authentication);
};
