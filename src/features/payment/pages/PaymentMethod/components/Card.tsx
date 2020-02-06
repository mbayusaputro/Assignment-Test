import React from 'react';
import {View} from 'react-native';
import {Text} from '../../../../../components';
import styles from '../style';

interface Props {
  sub: any;
  title: {id: string; en: string};
}

const Card = (props: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.titlegray} content={props.title} />
      <Text style={styles.subtitle}>{props.sub}</Text>
    </View>
  );
};

export default Card;
