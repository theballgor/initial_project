import {useSelector} from 'react-redux';

import {AppReducer} from '../../common/redux/reducer';

import {MainReducer} from './models';

export const useMainReducer = (): MainReducer => {
  return useSelector((state: AppReducer) => state.main);
};
