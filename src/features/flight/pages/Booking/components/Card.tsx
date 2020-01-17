import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {verticalScale, scale} from '../../../../../constants/ScaleUtils';
import {Color} from '../../../../../constants/Color';

type Props = {
  title: string;
  subtitle: string;
  err?: boolean;
  textColor?: boolean;
  onPress?: () => void;
};

const Card = (props: Props) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={props.onPress}
        style={styles.card}>
        <Text style={styles.bold}>{props.title}</Text>
        <View style={styles.circle}>
          <Image
            style={{
              height: verticalScale(13),
              width: scale(13),
              tintColor: Color.white,
            }}
            source={require('../../../../../assets/icons/arrow-right.png')}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
      {props.err ? (
        <Text
          style={[
            styles.err,
            props.textColor ? {} : {color: Color.brownGreyF},
          ]}>
          {props.subtitle}
        </Text>
      ) : (
        []
      )}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.white,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  err: {
    fontFamily: 'NunitoSans-Italic',
    color: Color.red,
  },
  circle: {
    backgroundColor: Color.orange,
    height: 35,
    width: 35,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bold: {
    fontFamily: 'NunitoSans-SemiBold',
  },
});
