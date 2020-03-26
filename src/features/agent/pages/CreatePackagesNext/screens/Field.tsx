import React from 'react';
import {TouchableOpacity as Touch, Image} from 'react-native';
import {Text, Card} from '../../../../../components';
import {styles} from '../components';
import {CardProps as Props} from '../../../interface/types';

export default (props: Props) => {
  // Props
  const {label, type, onPress} = props;

  // Main Render
  return (
    <Touch onPress={onPress} activeOpacity={0.9}>
      <Card style={styles.cardPd}>
        <Text
          style={[styles.textBold, styles.top]}
          content={{id: label.id, en: label.en}}
        />
        {type === 0 ? (
          <Image
            style={{height: 22.33, width: 32.33}}
            source={require('../../../../../assets/agent/doc-pict.png')}
            resizeMode="contain"
          />
        ) : (
          <Image
            style={{height: 16}}
            source={require('../../../../../assets/agent/arrow-right.png')}
            resizeMode="contain"
          />
        )}
      </Card>
    </Touch>
  );
};
