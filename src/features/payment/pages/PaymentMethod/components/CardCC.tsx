import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {scale} from '../../../../../constants/ScaleUtils';
import styles from '../style';

interface Props {
  onPress: () => void;
}

const Card = (props: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
      <View style={styles.card}>
        <Text style={[styles.title, {marginTop: 7}]}>
          Credit Card / Debit / Installments
        </Text>
        <Image
          style={{width: scale(170)}}
          source={require('../../../../../assets/payment/cc.png')}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};

export default Card;