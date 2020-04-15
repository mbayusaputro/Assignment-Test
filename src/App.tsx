import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistor, store} from './reduxs/store';
import Route from './configs/Routes';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Route />
    </PersistGate>
  </Provider>
);

export default App;
