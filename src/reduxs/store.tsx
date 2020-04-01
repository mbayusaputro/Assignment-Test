import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import AsyncStorage from '@react-native-community/async-storage';
import logger from 'redux-logger';

import rootReducer from './reducers';

const middlewares = [thunkMiddleware, logger];
// const middlewares = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);

const persistObj = {
  key: 'root',
  storage: AsyncStorage,
};
const persistConfig = persistReducer(persistObj, rootReducer);

export const store = createStore(
  persistConfig,
  composeWithDevTools(middlewareEnhancer),
);

export const persistor = persistStore(store);
