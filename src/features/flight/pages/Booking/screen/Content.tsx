import React from 'react';
import {ScrollView, Alert} from 'react-native';
import ListView from './ListView';
import {Login} from '../components';
import Contact from './Contact';
import Passenger from './Passenger';
import Baggage from './Baggage';
import Price from './Price';
import Total from './Total';
import {Button} from '../../../../../components';
import {ContentProps} from '../types';

const Content = (props: ContentProps) => {
  const {
    onContactDetail,
    contactName,
    dataPassenger,
    active,
    toggleSwitch,
    onPassenger,
    onSubmit,
  } = props;
  return (
    <ScrollView
      style={{marginHorizontal: 20, marginTop: -40}}
      showsVerticalScrollIndicator={false}>
      <ListView
        title="Departure Flight"
        date={new Date()}
        departure="CGK"
        arrival="DPS"
        duration="2h 5m"
        transit="direct"
        departure_time="05:35"
        arrival_time="05:35"
        airline="Citilink"
        img="https://tvlk.imgix.net/imageResource/2015/12/17/1450350561012-6584b693edd67d75cfc25ecff41c5704.png"
      />
      <ListView
        title="Return Flight"
        date={new Date()}
        departure="CGK"
        arrival="DPS"
        duration="2h 5m"
        transit="direct"
        departure_time="05:35"
        arrival_time="05:35"
        airline="Citilink"
        img="https://tvlk.imgix.net/imageResource/2015/12/17/1450350561012-6584b693edd67d75cfc25ecff41c5704.png"
      />
      <Login />
      <Contact onPress={onContactDetail} name={contactName} />
      <Passenger
        onPress={onPassenger}
        dataPassenger={dataPassenger}
        active={active}
        toggleSwitch={toggleSwitch}
      />
      <Baggage />
      <Price />
      <Total />
      <Button
        customStyle={{
          marginVertical: 20,
          borderRadius: 20,
          backgroundColor: '#148ea4',
          borderWidth: 0,
        }}
        customTextStyle={{color: '#fff'}}
        type="primary"
        isUpperCase={true}
        fullWidth={true}
        content={{id: 'Continue Payment', en: 'Continue Payment'}}
        onPress={onSubmit}
      />
    </ScrollView>
  );
};

export default Content;
