import React from 'react';
import {View, Alert} from 'react-native';
import InfoFlight from './InfoFlight';
import Passenger from './Passanger';
import Price from './Price';
import Total from './Total';
import Policy from './Policy';
import {dataUser, dataFlight} from '../data';

const Content = (props: any) => {
  return (
    <View style={{padding: 20, marginTop: 30}}>
      <InfoFlight title="Departure Flight" data={dataFlight.flightSelected} />
      <InfoFlight
        title="Return Flight"
        data={dataFlight.flightSelectedReturn}
      />
      <Passenger
        data={dataUser}
        baggage={dataFlight.flightSelected.detail[0].check_in_baggage}
      />
      <Policy
        refundable={() => Alert.alert('Info Refundable', 'Not Availbale')}
        reschedule={() => Alert.alert('Info Reschedule', 'Not Availbale')}
      />
      <Price data={dataFlight} return={true} />
      <Total data={dataFlight} />
    </View>
  );
};

export default Content;
