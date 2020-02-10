import React from 'react';
import {View} from 'react-native';
import {Imaging} from '../../../../../components';
import {styles} from '../components';

export default () => (
  <View style={styles.header}>
    <Imaging
      source={require('../../../../../assets/logo/asita_logo_color.png')}
      resizeMode="contain"
      style={styles.imgHeader}
    />
  </View>
);
