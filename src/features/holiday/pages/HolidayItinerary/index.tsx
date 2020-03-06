import React from 'react';
import {HighSafeArea, Header, SubHeader} from '../../../../components';
import {ScrollView} from 'react-native';
import {HolidayItineraryContext as Context} from './components/Context';
import Field from './screens/Field';

const Default = (props: any) => {
  const {
    navigation: {goBack, getParam},
  } = props;
  const dataParam = getParam('data');

  return (
    <HighSafeArea style={{backgroundColor: '#f0f0f0'}}>
      <Header
        content={{id: 'Rencana Perjalanan', en: 'Itinerary'}}
        callback={() => goBack()}
      />
      <ScrollView>
        <SubHeader />
        <Context.Provider
          value={{
            dataItinerary: dataParam,
            onBack: () => goBack(),
          }}>
          <Field />
        </Context.Provider>
      </ScrollView>
    </HighSafeArea>
  );
};

export default Default;
