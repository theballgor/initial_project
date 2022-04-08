import {IHttpResponse} from '../http/models';

export interface IAuthentication {
  userId: string;
  token: string;
}

export type AuthenticationReducer = IAuthentication & IHttpResponse;

type LoginAsync = IAuthentication & IHttpResponse;

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
type LoginRequest = {
  type: typeof LOGIN_REQUEST;
  payload: LoginAsync;
};
type LoginSuccess = {
  type: typeof LOGIN_SUCCESS;
  payload: LoginAsync;
};
type LoginFailure = {
  type: typeof LOGIN_FAILURE;
  payload: LoginAsync;
};
type LoginActions = LoginRequest | LoginSuccess | LoginFailure;

export const LOGOUT = 'LOGOUT';
export type Logout = {
  type: typeof LOGOUT;
};

export type AuthenticationActions = LoginActions | Logout;
