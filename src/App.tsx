import React, {Component, Fragment} from 'react';
import {LanguageContext} from './helpers/LanguageContext';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistor, store} from './reduxs/store';

import Route from './configs/Routes';

type State = {
  language: string;
  changeLanguage(): void;
};

type Props = {};

class App extends Component<Props, State> {
  state: State = {
    language: 'id',
    changeLanguage: () => this.handleChangeLanguage(),
  };

  handleChangeLanguage = () => {
    this.setState({language: this.state.language === 'id' ? 'en' : 'id'});
  };

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Fragment>
            <LanguageContext.Provider value={this.state}>
              <Route />
            </LanguageContext.Provider>
          </Fragment>
        </PersistGate>
      </Provider>
    );
  }
}
export default App;
