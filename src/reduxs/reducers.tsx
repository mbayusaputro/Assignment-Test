import {combineReducers} from 'redux';

import chatReducer from './chats/reducer';
import profileReducer from './profile/reducer';

const rootReducer = combineReducers({
  chat: chatReducer,
  profile: profileReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
