import {combineReducers} from 'redux';

import chatReducer from './chats/reducer';

const rootReducer = combineReducers({
  chat: chatReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
