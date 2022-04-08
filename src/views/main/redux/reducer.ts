import {LOGOUT} from '../../../common/authentication/models';
import {AppActions} from '../../../common/redux/reducer';
import {MainReducer, SET_USER} from '../models';

const initialState: MainReducer = {
  user: undefined,
};

export const main = (state = initialState, action: AppActions): MainReducer => {
  switch (action.type) {
    case SET_USER:
      return {...state, user: action.payload};
    case LOGOUT:
      return {...initialState};
  }
  return state;
};
