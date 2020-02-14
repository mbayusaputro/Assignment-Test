import React from 'react';
import {View} from 'react-native';
import {
  Placeholder,
  PlaceholderMedia,
  Fade,
  PlaceholderLine,
} from 'rn-placeholder';
import {styles} from './Card';

export default () => (
  <View style={styles.card}>
    <Placeholder Left={PlaceholderMedia} Animation={Fade}>
      <PlaceholderLine />
      <PlaceholderLine width={60} />
      <PlaceholderLine width={45} />
      <PlaceholderLine width={25} />
    </Placeholder>
  </View>
);
