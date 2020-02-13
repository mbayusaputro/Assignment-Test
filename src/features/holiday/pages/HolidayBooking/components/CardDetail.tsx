import React from 'react';
import dayjs from 'dayjs';
import dayID from 'dayjs/locale/id';
import dayEN from 'dayjs/locale/en';
import Octicon from 'react-native-vector-icons/Octicons';
import {View} from 'react-native';
import {Card, Text} from '../../../../../components';
import styles from './styles';

type Props = {
  title: string;
  tour: string;
  checkin: any;
  checkout: any;
};

export default (props: Props) => {
  const {title, tour, checkin, checkout} = props;
  return (
    <Card style={styles.card}>
      <View style={styles.row}>
        <Text
          style={styles.textSemi}
          content={{
            id: dayjs(checkin)
              .locale('id', dayID)
              .format('ddd, D MMM YYYY'),
            en: dayjs(checkin)
              .locale('en', dayEN)
              .format('ddd, D MMM YYYY'),
          }}
        />
        <Text> - </Text>
        <Text
          style={styles.textSemi}
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
      <View style={styles.vertical}>
        <Text style={styles.textTitle}>{title}</Text>
      </View>
      <View style={styles.row}>
        <Text>By: </Text>
        <Text>{tour}</Text>
      </View>
    </Card>
  );
};
