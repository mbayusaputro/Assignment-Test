import React from 'react';
import dayjs from 'dayjs';
import dayID from 'dayjs/locale/id';
import dayEN from 'dayjs/locale/en';
import Octicon from 'react-native-vector-icons/Octicons';
import {View} from 'react-native';
import {Card, Text} from '../../../../../components';
import styles from './styles';

type Props = {
  guest: number;
  room: number;
  night: number;
  title: string;
  checkin: any;
  checkout: any;
};

export default (props: Props) => {
  const {guest, room, night, title, checkin, checkout} = props;
  return (
    <Card style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.textSemi}>{guest} Guest</Text>
        <Octicon name="primitive-dot" style={styles.iconDot} />
        <Text style={styles.textSemi}>{room} Rooms</Text>
        <Octicon name="primitive-dot" style={styles.iconDot} />
        <Text style={styles.textSemi}>{night} Nights</Text>
      </View>
      <View style={styles.vertical}>
        <Text style={styles.textTitle}>{title}</Text>
      </View>
      <View style={styles.rowBetween}>
        <Text>Check-in</Text>
        <Text
          style={styles.textSubTitle}
          content={{
            id: dayjs(checkin)
              .locale('id', dayID)
              .format('ddd, D MMM YYYY'),
            en: dayjs(checkin)
              .locale('en', dayEN)
              .format('ddd, D MMM YYYY'),
          }}
        />
      </View>
      <View style={styles.rowBetween}>
        <Text>Check-out</Text>
        <Text
          style={styles.textSubTitle}
          content={{
            id: dayjs(checkout)
              .locale('id', dayID)
              .format('ddd, D MMM YYYY'),
            en: dayjs(checkout)
              .locale('en', dayEN)
              .format('ddd, D MMM YYYY'),
          }}
        />
      </View>
    </Card>
  );
};
