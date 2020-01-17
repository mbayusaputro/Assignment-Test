import React from 'react';
import {ScrollView, View, Text, Image, Alert} from 'react-native';
import ListView from './ListView';
import {verticalScale, scale} from '../../../../../constants/ScaleUtils';
import {Color} from '../../../../../constants/Color';
import {Login, Modal, ModalPassenger} from '../components';
import Contact from './Contact';
import Passenger from './Passenger';
import Baggage from './Baggage';
import Price from './Price';
import Total from './Total';
import {Button} from '../../../../../components';

const Content = (props: any) => {
  return (
    <ScrollView
      style={{marginHorizontal: 20}}
      showsVerticalScrollIndicator={false}>
      {/* <Modal
        isVisible={props.isVisible}
        onDismiss={props.onDismiss}
        onChangeFullname={props.onChangeFullnameContactDetail}
        onChangeSalutation={props.onChangeSalutationContactDetail}
        onChangeEmail={props.onChangeEmailContactDetail}
        validMail={props.validMail}
        onChangeMobileNumber={props.onChangeMobileNumberContactDetail}
        selectedSalutation={props.salutation}
        valueFullname={props.fullname}
        valueEmail={props.email}
        valueMobile={props.mobileNumber}
      /> */}
      <ModalPassenger
        isVisible={props.isVisible}
        onDismiss={props.onDismiss}
        onChangeFullname={props.onChangeFullnamePassengerDetail}
        onChangeSalutation={props.onChangeSalutationPassengerDetail}
        onChangeEmail={props.onChangeEmailContactDetail}
        validMail={props.validMail}
        onChangeMobileNumber={props.onChangeMobileNumberContactDetail}
        selectedSalutation={props.salutation}
        valueFullname={props.fullname}
        valueEmail={props.email}
        valueMobile={props.mobileNumber}
      />
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
      <Contact onPress={props.onContactDetail} />
      <Passenger active={props.active} toggleSwitch={props.toggleSwitch} />
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
        onPress={() => Alert.alert('Warning', 'Coming Soon')}
      />
    </ScrollView>
  );
};

export default Content;
