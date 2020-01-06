import {createSelector} from 'reselect';
import {AppState} from '../reducers';

const makeIsLogin = (state: AppState) => state.profile.isLogin;

export const getIsLogin = createSelector(
  makeIsLogin,
  i => i,
);
