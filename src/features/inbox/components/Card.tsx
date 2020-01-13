import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {verticalScale, scale} from '../../../constants/ScaleUtils';
import {Color} from '../../../constants/Color';

interface Props {
  title: string;
  time: string;
  unbox: boolean;
}

const Card = (props: Props) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.img}
        source={
          props.unbox
            ? require('../../../assets/inbox/unbox.png')
            : require('../../../assets/inbox/inbox.png')
        }
        resizeMode="contain"
      />
      <View style={{flex: 1}}>
        <Text style={styles.bold}>{props.title}</Text>
        <Text style={[styles.regular, {marginTop: 5}]}>{props.time}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          style={{
            height: verticalScale(15),
            width: scale(15),
          }}
          source={require('../../../assets/icons/arrow-right.png')}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.white,
    borderRadius: 5,
    flexDirection: 'row',
    height: 88,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 15,
  },
  bold: {
    fontFamily: 'NunitoSans-SemiBold',
    marginBottom: -5,
  },
  regular: {
    fontFamily: 'NunitoSans-Regular',
  },
  img: {
    height: verticalScale(20),
    width: scale(30),
    marginVertical: 5,
    marginRight: 10,
    tintColor: Color.orange,
  },
  icon: {
    height: verticalScale(15),
    width: scale(15),
    marginTop: 3,
    marginHorizontal: 5,
  },
});
