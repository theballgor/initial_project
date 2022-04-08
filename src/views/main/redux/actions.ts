import {ThunkAction} from 'redux-thunk';

import {IUser} from '../../../common/models/user';
import {AppActions, AppReducer} from '../../../common/redux/reducer';
import {SET_USER} from '../models';

const setUser = (value: IUser | undefined): AppActions => {
  return {type: SET_USER, payload: value};
};

export const setUserAction = (
  user: IUser | undefined,
): ThunkAction<void, AppReducer, unknown, AppActions> => {
  return (dispatch): void => {
    dispatch(setUser(user));
  };
};
