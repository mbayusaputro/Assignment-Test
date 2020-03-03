import {createSelector} from 'reselect';
import {AppState} from '../reducers';

const makeIsLogin = (state: AppState) => state.profile.isLogin;
const makeToken = (state: AppState) => state.profile.token;
const makeFetchSignIn = (state: AppState) => state.profile.fetchSignIn;
const makeProfile = (state: AppState) => state.profile.profile;
const makeFetchProfile = (state: AppState) => state.profile.fetchProfile;
const makeFetchSignUp = (state: AppState) => state.profile.fetchSignUp;
const makePayloadSignUp1 = (state: AppState) => state.profile.payloadSignUp1;
const makePayloadSignUp2 = (state: AppState) => state.profile.payloadSignUp2;
const makePayloadSignUp3 = (state: AppState) => state.profile.payloadSignUp3;
const makeFetchUpdateProfile = (state: AppState) =>
  state.profile.fetchUpdateProfile;
const makeFetchChangePassUser = (state: AppState) =>
  state.profile.fetchChangePasswordUser;
const makeFetchForgotPass = (state: AppState) => state.profile.fetchForgotPass;

export const getIsLogin = createSelector(makeIsLogin, i => i);

export const getToken = createSelector(makeToken, i => i);

export const getFetchSignIn = createSelector(makeFetchSignIn, i => i);

export const getProfile = createSelector(makeProfile, i => i);

export const getFetchProfile = createSelector(makeFetchProfile, i => i);

export const getFetchSignUp = createSelector(makeFetchSignUp, i => i);

export const getPayloadSignUp1 = createSelector(makePayloadSignUp1, i => i);

export const getPayloadSignUp2 = createSelector(makePayloadSignUp2, i => i);

export const getPayloadSignUp3 = createSelector(makePayloadSignUp3, i => i);

export const getFetchUpdateProfile = createSelector(
  makeFetchUpdateProfile,
  i => i,
);

export const getFetchChangePassUser = createSelector(
  makeFetchChangePassUser,
  i => i,
);

export const getFetchForgotPass = createSelector(makeFetchForgotPass, i => i);
