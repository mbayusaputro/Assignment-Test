import React from 'react';
import {View, TouchableOpacity as Touch} from 'react-native';
import {styles} from '../components';
import {Imaging} from '../../../../../components';

export default () => (
  <View style={styles.center}>
    <Touch activeOpacity={0.75} style={styles.btnFooter}>
      <Imaging
        source={require('../../../../../assets/icons/close.png')}
        resizeMode="contain"
        style={styles.iconClose}
      />
    </Touch>
  </View>
);
