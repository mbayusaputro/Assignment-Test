import React from 'react';
import {View} from 'react-native';
import Octicon from 'react-native-vector-icons/Octicons';
import dayjs from 'dayjs';
import dayID from 'dayjs/locale/id';
import dayEN from 'dayjs/locale/en';
import {Text} from '../../../../../components';
import {Color} from '../../../../../constants/Color';
import {styles} from '../components';

type Props = {
  date: any;
  duration: number;
  room: number;
};

export default (props: Props) => {
  const {date, duration, room} = props;
  return (
    <View style={styles.contentSubHeader}>
      <View style={styles.rowCenter}>
        <Text
          style={styles.textSubHeader}
          content={{
            id: dayjs(date)
              .locale('id', dayID)
              .format('ddd, DD MMM'),
            en: dayjs(date)
              .locale('en', dayEN)
              .format('ddd, DD MMM'),
          }}
        />
        <Octicon
          name="primitive-dot"
          color={Color.white}
          style={styles.iconDot}
        />
        <Text
          style={styles.textSubHeader}
          content={{id: `${duration} Malam`, en: `${duration} Nights`}}
        />
        <Octicon
          name="primitive-dot"
          color={Color.white}
          style={styles.iconDot}
        />
        <Text
          style={styles.textSubHeader}
          content={{id: `${room} Kamar`, en: `${room} Rooms`}}
        />
      </View>
    </View>
  );
};
