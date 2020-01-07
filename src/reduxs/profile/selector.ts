import {createSelector} from 'reselect';
import {AppState} from '../reducers';

const makeIsLogin = (state: AppState) => state.profile.isLogin;
const makeToken = (state: AppState) => state.profile.token;
const makeFetchSignIn = (state: AppState) => state.profile.fetchSignIn;

export const getIsLogin = createSelector(
  makeIsLogin,
  i => i,
);

export const getToken = createSelector(
  makeToken,
  i => i,
);

export const getFetchSignIn = createSelector(
  makeFetchSignIn,
  i => i,
);
