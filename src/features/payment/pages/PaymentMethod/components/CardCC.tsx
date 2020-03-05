import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {verticalScale} from '../../../../../constants/ScaleUtils';
import styles from '../style';

interface Props {
  onPress: () => void;
}

const Card = (props: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
      <View style={styles.card}>
        <Text style={styles.cc}>Credit Card / Debit / Installments</Text>
        <Image
          style={{height: verticalScale(30), marginTop: 15}}
          source={require('../../../../../assets/payment/cc.png')}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};

export default Card;
