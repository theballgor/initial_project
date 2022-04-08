import {AppActions} from '../../redux/reducer';
import {
  AuthenticationReducer,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../models';

const initialState: AuthenticationReducer = {
  userId: '',
  token: '',
  error: '',
  loading: false,
  message: '',
};

export const authentication = (
  state = initialState,
  action: AppActions,
): AuthenticationReducer => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {...state, ...action.payload};
    case LOGIN_SUCCESS:
      return {...state, ...action.payload};
    case LOGIN_FAILURE:
      return {...state, ...action.payload};
    case LOGOUT:
      return {...initialState};
  }
  return state;
};
