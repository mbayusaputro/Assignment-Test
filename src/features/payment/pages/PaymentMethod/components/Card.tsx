import React from 'react';
import {View} from 'react-native';
import {Text} from '../../../../../components';
import styles from '../style';

interface Props {
  sub: any;
  title: {id: string; en: string};
  children?: any;
}

const Card = (props: Props) => {
  const {sub, title, children} = props;
  return (
    <View style={styles.card}>
      <Text style={styles.titlegray} content={title} />
      {sub === 'time' ? children : <Text style={styles.subtitle}>{sub}</Text>}
    </View>
  );
};

export default Card;
