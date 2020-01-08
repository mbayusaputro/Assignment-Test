import React from 'react';
import {View} from 'react-native';
import Empty from './Empty';
import Card from './components/Card';

const Active = (props: any) => {
  const {
    navigation: {navigate},
  } = props;
  return (
    <View style={{margin: 20}}>
      {/* <Empty /> */}
      <Card
        departure="Jakarta (CGK)"
        destination="Denpasar (DPS)"
        id="WWBKEL"
        price="1.900.834"
      />
    </View>
  );
};

export default Active;
