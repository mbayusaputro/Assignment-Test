import React from 'react';
import {TouchableOpacity as Touch, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Card, Imaging, Text} from '../../../../../components';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {Color} from '../../../../../constants/Color';
import {moneyFormat} from '../../../../../helpers/helpers';

type Props = {
  title: string;
  star: number;
  location: string;
  price: number;
  photo: string;
};

export default (props: Props) => {
  // Function
  const starLength = (length: number) => {
    const arrays = [];
    for (let i = 1; i <= length; i++) {
      arrays.push(
        <Imaging
          key={i}
          source={require('../../../../../assets/icons/stars.png')}
          resizeMode="stretch"
          style={styles.iconStar}
        />,
      );
    }
    return arrays;
  };

  // Main
  const {title, star, location, price, photo} = props;
  return (
    <Touch activeOpacity={0.5}>
      <Card style={[styles.rowBetween, styles.card]}>
        <Imaging
          source={{uri: photo, priority: FastImage.priority.high}}
          resizeMode="cover"
          style={styles.imgCard}
        />
        <View style={styles.cardContent}>
          <View>
            <Text style={styles.textTitle}>{title}</Text>
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