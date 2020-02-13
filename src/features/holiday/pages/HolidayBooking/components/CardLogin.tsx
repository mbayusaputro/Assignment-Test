import React from 'react';
import {View, TouchableOpacity as Touch} from 'react-native';
import {Card, Text, Imaging} from '../../../../../components';
import styles from './styles';

type Props = {
  onPress: () => void;
};

export default (props: Props) => {
  const {onPress} = props;
  return (
    <Touch onPress={onPress} activeOpacity={0.9}>
      <Card style={[styles.cardLogin, styles.rowBetween]}>
        <View style={{width: '25%', alignItems: 'center'}}>
          <Imaging
            source={require('../../../../../assets/icons/img-phone-login.png')}
            resizeMode="contain"
            style={{width: 50, height: 50}}
          />
        </View>
        <View style={{width: '75%'}}>
          <Text style={styles.textWhite}>
            Log In or Register to enjoy this member-only benefit
          </Text>
        </View>
      </Card>
    </Touch>
  );
};
