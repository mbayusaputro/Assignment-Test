import {combineReducers} from 'redux';

import chatReducer from './chats/reducer';
import languageReducer from './language/reducer';
import profileReducer from './profile/reducer';
import masterReducer from './master/reducer';
import flightReducer from './flight/reducer';
import hotelReducer from './hotel/reducer';
import holidayReducer from './holiday/reducer';
import paymentReducer from './payment/reducer';

const rootReducer = combineReducers({
  chat: chatReducer,
  profile: profileReducer,
  master: masterReducer,
  language: languageReducer,
  flight: flightReducer,
  hotel: hotelReducer,
  holiday: holidayReducer,
  payment: paymentReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
