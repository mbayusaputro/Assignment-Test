import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from '../../../../../components';
import styles from '../style';

interface Props {
  title: string;
  pax: number;
  day: number;
  night: number;
  onPress: () => void;
}

const Card = (props: Props) => {
  const {title, onPress, pax, day, night} = props;
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text
        style={[styles.titlegray, {marginTop: 5}]}
        content={{
          id: `${pax} Pax • ${day} Hari • ${night} Malam`,
          en: `${pax} Pax • ${day} Days • ${night} Nights`,
        }}
      />
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <Text
          style={styles.view}
          content={{id: 'Lihat Detail', en: 'View Detail'}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Card;
