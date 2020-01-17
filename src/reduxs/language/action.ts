import {LANGUAGE, Action} from './types';

export const actionLanguage = (lang: string): Action => ({
  type: LANGUAGE,
  data: lang,
});
