export interface Action {
  type: string;
  data: any;
  payload: object;
}

export interface State {
  isLogin: boolean;
}

export const SET_LOGIN = 'SET_LOGIN';
