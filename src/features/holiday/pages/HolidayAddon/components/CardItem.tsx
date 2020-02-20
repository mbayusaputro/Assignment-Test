import React from 'react';
import {View, TouchableOpacity as Touch} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import dayjs from 'dayjs';
import dayID from 'dayjs/locale/id';
import dayEN from 'dayjs/locale/en';
import {Card, Text} from '../../../../../components';
import {Color} from '../../../../../constants/Color';
import {moneyFormat} from '../../../../../helpers/helpers';
import styles from './styles';

const dateDetail = (date: any, type: any) => {
  const result = dayjs(date)
    .locale('id', type)
    .format('DD MMM YYYY');
  return result;
};

type Props = {
  type: {id: string; en: string};
  title: string;
  description?: string;
  start_date: any;
  end_date: any;
  price: number;
  onCancel: () => void;
};

export default (props: Props) => {
  // Props
  const {
    type,
    title,
    description,
    start_date,
    end_date,
    price,
    onCancel,
  } = props;

  // Main Render
  return (
    <Card style={[styles.card, styles.vertical]}>
      <View style={styles.rowBetween}>
        <Text style={styles.textTitle} content={type} />
        <Touch onPress={onCancel} activeOpacity={0.75}>
          <Icon name="closecircle" size={20} color={Color.berry} />
        </Touch>
      </View>
      <View style={styles.hr} />
      <View style={styles.center}>
        <Text style={styles.textMedium}>{title}</Text>
        <Text style={styles.textDesc}>{description}</Text>
        {start_date !== null ||
          (end_date !== null && (
            <Text
              style={styles.textDesc}
              content={{
                id: `${dateDetail(start_date, dayID)} - ${dateDetail(
                  end_date,
                  dayID,
                )}`,
                en: `${dateDetail(start_date, dayEN)} - ${dateDetail(
                  end_date,
                  dayEN,
                )}`,
              }}
            />
          ))}
        <Text style={styles.textPrice}>Rp {moneyFormat(price)}</Text>
      </View>
    </Card>
  );
};
