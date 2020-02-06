import React from 'react';
import {View} from 'react-native';
import dayjs from 'dayjs';
import dayID from 'dayjs/locale/id';
import dayEN from 'dayjs/locale/en';
import {InputButton, styles} from '../components';
import {Button} from '../../../../../components';
import {
  textDestination,
  textRoomGuest,
  btnSearchHotelLang,
} from '../../../interface/string';

type Props = {
  onDestination: () => void;
  onCheckIn: () => void;
  onCheckOut: () => void;
  onPassenger: () => void;
  onSubmit: () => void;
  destinationValue: string;
  checkIn: any;
  checkOut: any;
  duration: number;
  room: any;
  guest: any;
};

export default (props: Props) => {
  return (
    <View style={styles.content}>
      <InputButton
        onPress={props.onDestination}
        labelContent={textDestination}
        icons={require('../../../../../assets/icons/map.png')}
        fieldValue={props.destinationValue}
      />
      <InputButton
        onPress={props.onCheckIn}
        label="Check-in"
        icons={require('../../../../../assets/icons/icon_departure.png')}
        contentValue={{
          id: dayjs(props.checkIn)
            .locale('id', dayID)
            .format('ddd, DD MMM YYYY'),
          en: dayjs(props.checkIn)
            .locale('en', dayEN)
            .format('ddd, DD MMM YYYY'),
        }}
        subContentValue={
          props.duration > 0
            ? {id: `${props.duration} Malam`, en: `${props.duration} Nights`}
            : null
        }
      />
      <InputButton
        onPress={props.onCheckOut}
        label="Check-out"
        icons={require('../../../../../assets/icons/icon_return.png')}
        contentValue={{
          id: dayjs(props.checkOut)
            .locale('id', dayID)
            .format('ddd, DD MMM YYYY'),
          en: dayjs(props.checkOut)
            .locale('en', dayEN)
            .format('ddd, DD MMM YYYY'),
        }}
      />
      <InputButton
        onPress={props.onPassenger}
        labelContent={textRoomGuest}
        icons={require('../../../../../assets/icons/icon_total_passenger.png')}
        contentValue={{
          id: `${props.guest} Tamu, ${props.room} Kamar`,
          en: `${props.guest} Guest(s), ${props.room} Room`,
        }}
      />
      <Button
        onPress={props.onSubmit}
        content={btnSearchHotelLang}
        isUpperCase={true}
        fullWidth
        customStyle={styles.btnFooter}
      />
    </View>
  );
};
