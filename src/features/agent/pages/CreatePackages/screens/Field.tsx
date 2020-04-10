import React from 'react';
import {TouchableOpacity as Touch, Image} from 'react-native';
import {Text, Card} from '../../../../../components';
import {styles} from '../components';
import {CardProps as Props} from '../../../interface/types';

export default (props: Props) => {
  const {label, fieldValue, type, onPress} = props;

  return (
    <Touch onPress={onPress} activeOpacity={0.9}>
      {type === 0 ? (
        <Card style={styles.card}>
          <Text
            style={[styles.textBlue, styles.textGrey]}
            content={{id: label.id, en: label.en}}
          />
          <Text
            style={[styles.textBold, styles.top]}
            content={{id: fieldValue.id, en: fieldValue.en}}
          />
        </Card>
      ) : (
        <Card style={styles.cardPd}>
          <Text
            style={[styles.textBold, styles.top]}
            content={{id: label.id, en: label.en}}
          />
          <Image
            style={{height: 16}}
            source={require('../../../../../assets/agent/arrow-right.png')}
            resizeMode="contain"
          />
        </Card>
      )}
    </Touch>
  );
};
