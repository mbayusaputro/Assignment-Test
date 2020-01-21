import {combineReducers} from 'redux';

import chatReducer from './chats/reducer';
import languageReducer from './language/reducer';
import profileReducer from './profile/reducer';
import masterReducer from './master/reducer';
import flightReducer from './flight/reducer';

const rootReducer = combineReducers({
  chat: chatReducer,
  profile: profileReducer,
  master: masterReducer,
  language: languageReducer,
  flight: flightReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
