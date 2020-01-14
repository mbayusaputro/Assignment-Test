import React from 'react';
import {View, Text} from 'react-native';
import styles from '../style';

interface Props {
  title: string;
  sub: any;
}

const Card = (props: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.titlegray}>{props.title}</Text>
      <Text style={styles.subtitle}>{props.sub}</Text>
    </View>
  );
};

export default Card;
