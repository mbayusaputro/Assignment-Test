import React from 'react';
import {
  View,
  Text,
  TouchableOpacity as Touch,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import {Card, Imaging} from '../../components';
import {starLength} from '../../helpers/helpers';
import normalize from '../../constants/normalize';
import {WIDTH_SCREEN} from '../../constants/Dimension';
import {moneyFormat} from '../../helpers/helpers';

export type Props = {
  title: string;
  price: number;
  onPress: () => void;
  img: ImageSourcePropType;
  star: number;
  official: boolean;
};

export default (props: Props) => {
  // Props
  const {title, price, onPress, img, star, official} = props;

  // Main Render
  return (
    <Touch onPress={onPress}>
      <Card style={styles.card}>
        <Imaging
          source={{uri: img}}
          resizeMode="center"
          style={{
            height: normalize(200),
            width: '100%',
            borderTopLeftRadius: 6.66,
            borderTopRightRadius: 6.66,
          }}
        />
        <Text style={styles.title}>
          {title.length > 30 ? title.slice(0, 30) + '...' : title}
        </Text>
        <Text style={styles.price}>Rp{moneyFormat(price)}</Text>
        <Text
          style={[styles.official, {color: official ? '#7A08C9' : '#23900a'}]}>
          {official ? 'Official Store' : 'Power Merchant'}
        </Text>
        <View style={styles.row}>{starLength(star)}</View>
      </Card>
    </Touch>
  );
};

// Style
const styles = StyleSheet.create({
  card: {
    width: WIDTH_SCREEN / 2 - 30,
    marginLeft: 20,
    marginTop: 20,
  },
  title: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    marginTop: 15,
    marginHorizontal: 10,
  },
  price: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 16,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  official: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 14,
    marginBottom: 5,
    marginHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 15,
  },
});
