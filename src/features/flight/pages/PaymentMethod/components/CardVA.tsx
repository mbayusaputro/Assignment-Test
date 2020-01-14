import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../style';

interface Props {
  onPress: () => void;
}

const Card = (props: Props) => {
  return (
    <View style={styles.va}>
      <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
        <View style={styles.rowva}>
          <Image
            style={styles.logova}
            source={require('../../../../../assets/payment/bca-logo.png')}
            resizeMode="contain"
          />
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{fontFamily: 'NunitoSans-SemiBold', marginHorizontal: 10}}>
              BCA Virtual Account
            </Text>
            <View style={styles.circle} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
