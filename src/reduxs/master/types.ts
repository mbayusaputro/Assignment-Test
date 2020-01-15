export interface Action {
  type: string;
  data: any;
}

export interface State {
  fetchCountry: boolean;
  country: Array<any>;
}

export const COUNTRY = 'COUNTRY';
export const COUNTRY_SUCCESS = 'COUNTRY_SUCCESS';
export const COUNTRY_FAILED = 'COUNTRY_FAILED';
