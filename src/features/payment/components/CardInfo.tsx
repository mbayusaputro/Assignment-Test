import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
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
          source={require('../../../assets/payment/return.png')}
          resizeMode="contain"
        />
        <Text style={styles.title}>{props.destination}</Text>
      </View>
      <Text style={[styles.titlegray, {marginVertical: 0}]}>{props.date}</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
        <Text style={styles.view}>View Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
