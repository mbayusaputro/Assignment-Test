import React from 'react';
import {View, Alert, Text} from 'react-native';
import InfoFlight from './InfoFlight';
import Passenger from './Passanger';
import Price from './Price';
import Total from './Total';
import Policy from './Policy';
import {dataUser, dataFlight} from '../data';
import {Button} from '../../../../../components/';
import {Color} from '../../../../../constants/Color';

const Content = (props: any) => {
  return (
    <View style={{paddingHorizontal: 20, marginTop: 40}}>
      <View>
        <Text
          style={{
            fontFamily: 'NunitoSans-Bold',
            color: Color.green,
            fontSize: 16,
            textAlign: 'center',
          }}>
          Your E-ticket has been issued!
        </Text>
        <Text
          style={{
            fontFamily: 'NunitoSans-Regular',
            marginVertical: 10,
            textAlign: 'center',
          }}>
          Check your email inbox/spam folder revonchaniago@gmail.com to obtain
          E-tiket.
        </Text>
        <View style={{height: 1, backgroundColor: '#bababa', marginTop: 10}} />
        <Text
          style={{
            fontFamily: 'NunitoSans-Regular',
            color: Color.labelgray,
            textAlign: 'center',
            marginVertical: 10,
          }}>
          Or download your E-tiket here
        </Text>
        <Button
          customStyle={{
            marginBottom: 20,
            borderRadius: 20,
            backgroundColor: '#148ea4',
          }}
          customTextStyle={{color: '#fff'}}
          type="third"
          isUpperCase={true}
          fullWidth={true}
          content={{id: 'Download E-Ticket', en: 'Download E-Ticket'}}
          onPress={() => Alert.alert('Warning', 'Please check your email!')}
        />
        <View style={{height: 1, backgroundColor: '#bababa'}} />
      </View>
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
