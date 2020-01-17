export const LANGUAGE = 'LANGUAGE';

export interface State {
  language: string;
}

export interface Action {
  type: string;
  data: string;
}
