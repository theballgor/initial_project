import {combineReducers} from 'redux';

import {MainActions} from '../../views/main/models';
import {main} from '../../views/main/redux/reducer';
import {AuthenticationActions} from '../authentication/models';
import {authentication} from '../authentication/redux/reducer';

export const rootReducer = combineReducers({
  main: main,
  authentication: authentication,
});

export type AppReducer = ReturnType<typeof rootReducer>;
export type AppActions = MainActions | AuthenticationActions;
