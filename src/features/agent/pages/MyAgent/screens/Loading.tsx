import React from 'react';
import {View} from 'react-native';
import {styles} from '../components';
import {
  Placeholder,
  PlaceholderMedia,
  Fade,
  PlaceholderLine,
} from 'rn-placeholder';

const data = [1, 2, 3, 4, 5];

export default () => {
  return (
    <View>
      {data.map((item, i) => {
        <View key={i} style={[styles.contentCard, styles.cadr]}>
          <Placeholder Animation={Fade} Left={PlaceholderMedia}>
            <PlaceholderLine />
            <PlaceholderLine width={50} />
            <PlaceholderLine width={75} />
          </Placeholder>
        </View>;
      })}
    </View>
  );
};
