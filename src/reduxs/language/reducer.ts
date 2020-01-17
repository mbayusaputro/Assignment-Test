import {LANGUAGE, Action, State} from './types';

const initialState: State = {
  language: 'en',
};

export default (state: State = initialState, action: Action): State => {
  const {type, data} = action;
  switch (type) {
    case LANGUAGE:
      return {
        ...state,
        language: data,
      };

    default:
      return state;
  }
};
