import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import dayJS from 'dayjs';
import dayID from 'dayjs/locale/id';
import dayEN from 'dayjs/locale/en';
import {Text} from '../../../../../components';
import styles from '../style';

interface Props {
  departure: any;
  destination: any;
  date: any;
  onPress: () => void;
}

const Card = (props: Props) => {
  return (
    <View style={styles.card}>
      <View style={{flexDirection: 'row', marginTop: 7, alignItems: 'center'}}>
        <Text style={styles.title}>{props.departure}</Text>
        <Image
          style={styles.return}
          source={require('../../../../../assets/payment/return.png')}
          resizeMode="contain"
        />
        <Text style={styles.title}>{props.destination}</Text>
      </View>
      <Text
        style={[styles.titlegray, {marginVertical: 0}]}
        content={{
          id: dayJS(props.date)
            .locale('id', dayID)
            .format('dddd, DD MMMM YYYY'),
          en: dayJS(props.date)
            .locale('en', dayEN)
            .format('dddd, DD MMMM YYYY'),
        }}
      />
      {/* <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
        <Text
          style={styles.view}
          content={{id: 'Lihat Detail', en: 'View Detail'}}
        />
      </TouchableOpacity> */}
    </View>
  );
};

export default Card;
