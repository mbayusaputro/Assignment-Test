import React from 'react';
import {
  View,
  ImageStyle,
  StyleProp,
  TouchableOpacity as Touch,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Color} from '../../../constants/Color';
import {Imaging, Text} from '../../../components';
import {moneyFormat} from '../../../helpers/helpers';
import styles from './styles';

type Props = {
  style: StyleProp<ImageStyle>;
  title: string;
  img: string;
  price: number;
  onPress: (item: any) => void;
};

const start_from = {id: 'Mulai dari', en: 'Starting From'};

export default (props: Props) => {
  return (
    <Touch activeOpacity={0.5} onPress={props.onPress}>
      <Imaging
        source={{uri: props.img}}
        resizeMode="cover"
        style={[styles.imgSlider, props.style]}
      />
      <View style={[styles.imgContent, props.style]}>
        <View style={styles.rowDirection}>
          <Icon name="location-on" color={Color.white} size={20} />
          <Text style={styles.textWhite}>{props.title}</Text>
        </View>
        <View>
          <Text style={styles.textWhite} content={start_from} />
          <Text style={styles.textPrice}>IDR {moneyFormat(props.price)}</Text>
        </View>
      </View>
    </Touch>
  );
};
