import React from 'react';
import {View} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import {Header, Imaging} from '../../../../../components';
import {styles} from '../components';
import fonts from '../../../../../constants/Fonts';
import {Color} from '../../../../../constants/Color';
import normalize from '../../../../../constants/normalize';

type Props = {
  onDateChange: (data: any) => void;
  callback: () => void;
  type: string;
};

export default (props: Props) => {
  const {onDateChange, callback, type} = props;
  return (
    <View style={styles.contentModal}>
      <Header
        content={{id: `Pilih Tanggal ${type}`, en: `Select ${type} Date`}}
        callback={callback}
        iconLeft={
          <Imaging
            style={{height: normalize(16), width: normalize(20)}}
            source={require('../../../../../assets/icons/close.png')}
            resizeMode="contain"
          />
        }
      />
      <CalendarPicker
        textStyle={{fontFamily: fonts.fontSemiBold}}
        minDate={new Date()}
        onDateChange={onDateChange}
        selectedDayColor={Color.tealBlue}
        selectedDayTextColor={Color.white}
      />
    </View>
  );
};
