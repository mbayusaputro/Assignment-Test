import React from 'react';
import {ScrollView, BackHandler} from 'react-native';
import {HighSafeArea} from '../../../../components';
import Method from './Method';
import {Header, SubHeader} from '../../components';
import {PayMethodProps as Props} from '../../interface/types';
import {PayMethodContext} from './components/Context';

const Default = (props: Props) => {
  // Props
  const {
    navigation: {getParam},
  } = props;
  const typeScreen = getParam('type');
  const itemScreen = getParam('item');

  const onBackPressed = () => alert('Awoek');

  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onBackPressed);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPressed);
    };
  }, [onBackPressed]);

  // Main
  return (
    <HighSafeArea style={{backgroundColor: '#f5f5f5', flex: 1}}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SubHeader id={itemScreen.partner_trxid} />
        <PayMethodContext.Provider
          value={{
            typeScreen,
            price: itemScreen.total,
            dataFlight: itemScreen.data,
          }}>
          <Method />
        </PayMethodContext.Provider>
      </ScrollView>
    </HighSafeArea>
  );
};

export default Default;
