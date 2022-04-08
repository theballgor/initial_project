import {Dispatch} from 'react';
import {ThunkAction} from 'redux-thunk';

import {LoginForm} from '../../../views/login/models';
import {setUserAction} from '../../../views/main/redux/actions';
import {AUTHENTICATION_KEY} from '../../helpers/storage/models';
import {
  removeFromLocalStorage,
  setToLocalStorage,
} from '../../helpers/storage/storage';
import {AppActions, AppReducer} from '../../redux/reducer';
import {IAuthentication, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT} from '../models';
import {DummyAuth, DummyUser} from '../temp/dummy';

const loginRequest = (): AppActions => ({
  type: LOGIN_REQUEST,
  payload: {
    userId: '',
    token: '',
    loading: true,
    error: '',
    message: '',
  },
});

export const loginSuccess = (
  auth: IAuthentication,
  message?: string,
): AppActions => ({
  type: LOGIN_SUCCESS,
  payload: {
    ...auth,
    loading: false,
    error: '',
    message: message,
  },
});

const loginFailure = (error?: string): AppActions => ({
  type: LOGIN_SUCCESS,
  payload: {
    userId: '',
    token: '',
    loading: false,
    error: error,
    message: '',
  },
});

export const loginAction = (
  form: LoginForm,
): ThunkAction<void, AppReducer, unknown, AppActions> => {
  return async (dispatch): Promise<void> => {
    dispatch(loginRequest());
    try {
      // dummy delay
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          const auth = DummyAuth;
          const user = DummyUser;
          dispatch(loginSuccess(auth));
          dispatch(setUserAction(user));
          setToLocalStorage(AUTHENTICATION_KEY, auth);
          resolve();
        }, 2000);
      });
    } catch (error: unknown) {
      // TODO HANDLE ERROR MORE EFFICIENT
      if (error && (error as Error).message) {
        dispatch(loginFailure((error as Error).message));
      }
    }
  };
};

export const logout = (): ThunkAction<
  void,
  AppReducer,
  unknown,
  AppActions
> => {
  return (dispatch: Dispatch<AppActions>): void => {
    removeFromLocalStorage(AUTHENTICATION_KEY);
    dispatch({type: LOGOUT});
  };
};
