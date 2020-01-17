import {createSelector} from 'reselect';
import {AppState} from '../reducers';

const makeLanguage = (state: AppState) => state.language.language;

export const getLanguage = createSelector(
  makeLanguage,
  i => i,
);
