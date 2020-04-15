import {combineReducers} from 'redux';

import basketReducer from './basket/reducer';

const rootReducer = combineReducers({
  basket: basketReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
