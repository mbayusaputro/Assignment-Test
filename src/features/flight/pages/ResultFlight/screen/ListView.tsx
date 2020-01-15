import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity as Touch,
} from 'react-native';
import {verticalScale, scale} from '../../../../../constants/ScaleUtils';
import {Color} from '../../../../../constants/Color';

type Props = {
  departure_time: string;
  arrival_time: string;
  departure: string;
  arrival: string;
  price: number;
  img: string;
  duration: string;
  transit: string;
  onPress: () => void;
  onDetail: () => void;
};

const ListView = (props: Props) => {
  return (
    <Touch style={styles.card} onPress={props.onPress} activeOpacity={0.7}>
      <View style={styles.row}>
        <View style={{flex: 1}}>
          <View style={styles.row}>
            <Text style={styles.extrabold}>{props.departure_time}</Text>
            <Image
              style={{
                height: verticalScale(15),
                width: scale(100),
                marginTop: 2,
                marginHorizontal: 5,
              }}
              source={require('../../../../../assets/icons/dashed_flight.png')}
              resizeMode="contain"
            />
            <Text style={styles.extrabold}>{props.arrival_time}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.regular}>{props.departure}</Text>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.info}>
                {`${props.duration} ${props.transit}`}
              </Text>
            </View>
            <Text style={styles.regular}>{props.arrival}</Text>
          </View>
        </View>
        <Touch style={{marginLeft: 20}} onPress={props.onDetail}>
          <Image
            style={{
              height: verticalScale(14),
              width: scale(14),
              marginTop: 2,
              transform: [{rotate: '90deg'}],
              tintColor: Color.oceanBlue,
            }}
            source={require('../../../../../assets/icons/arrow-right.png')}
            resizeMode="contain"
          />
        </Touch>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Image
          style={{
            height: verticalScale(20),
            width: scale(50),
            marginTop: 2,
          }}
          source={{uri: props.img}}
          resizeMode="contain"
        />
        <Text style={styles.bold}>Rp{props.price.toLocaleString('id-ID')}</Text>
      </View>
    </Touch>
  );
};

export default ListView;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.white,
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  extrabold: {
    fontFamily: 'NunitoSans-ExtraBold',
    fontSize: 16,
  },
  regular: {
    fontFamily: 'NunitoSans-Regular',
  },
  bold: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 16,
    color: Color.orange,
  },
  info: {
    fontFamily: 'NunitoSans-Regular',
    color: Color.brownGreyF,
    fontSize: 12,
  },
});
