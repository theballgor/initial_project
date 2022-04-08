import {IUser} from '../../common/models/user';

export interface MainReducer {
  user?: IUser;
}

export const SET_USER = 'SET_USER';
export interface Counter {
  type: typeof SET_USER;
  payload: IUser | undefined;
}

export type MainActions = Counter;
