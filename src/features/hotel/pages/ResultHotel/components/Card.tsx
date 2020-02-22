import React from 'react';
import {TouchableOpacity as Touch, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Card, Imaging, Text} from '../../../../../components';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {Color} from '../../../../../constants/Color';
import {
  starLength,
  eurToIdr,
  moneyFormat,
} from '../../../../../helpers/helpers';

type Props = {
  title: string;
  star: number;
  location: string;
  price: number;
  photo: string;
  onPress: () => void;
};

export default (props: Props) => {
  // Function

  // Main
  const {title, star, location, price, photo, onPress} = props;
  return (
    <Touch onPress={onPress} activeOpacity={0.5}>
      <Card style={[styles.rowBetween, styles.card]}>
        <View style={{width: '30%'}}>
          <Imaging
            source={{uri: photo, priority: FastImage.priority.high}}
            resizeMode="cover"
            style={styles.imgCard}
          />
        </View>
        <View style={[styles.cardContent, {width: '70%'}]}>
          <View>
            <Text style={styles.textTitle} numberOfLines={2}>
              {title}
            </Text>
            <View style={styles.rowBetween}>{starLength(star)}</View>
            <View style={styles.rowBetween}>
              <MaterialIcon
                name="location-on"
                color={Color.greyish}
                size={20}
              />
              <Text style={styles.textSubContent}>{location}</Text>
            </View>
          </View>
          <View
            style={[
              styles.rowBetween,
              {justifyContent: 'space-between', alignItems: 'center'},
            ]}>
            <Text style={styles.textPrice}>Rp{moneyFormat(price)}</Text>
            <Text
              style={styles.textSubContent}
              content={{id: '/kamar', en: '/room'}}
            />
          </View>
        </View>
      </Card>
    </Touch>
  );
};
