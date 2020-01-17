import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistor, store} from './reduxs/store';
import Route from './configs/Routes';
import GlobalLanguage from './GlobalLanguage';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <GlobalLanguage>
        <Route />
      </GlobalLanguage>
    </PersistGate>
  </Provider>
);

export default App;
