import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Color} from '../../../../../constants/Color';
import {scale, verticalScale} from '../../../../../constants/ScaleUtils';

interface Props {
  departure: any;
  destination: any;
}

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', position: 'absolute', top: -10}}>
        <Text style={styles.id}>{props.departure}</Text>
        <Image
          style={styles.return}
          source={require('../../../../../assets/icons/return.png')}
          resizeMode="contain"
        />
        <Text style={styles.id}>{props.destination}</Text>
      </View>
      <View
        style={{
          backgroundColor: Color.white,
          height: 20,
          position: 'absolute',
          width: '100%',
          bottom: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 60,
    backgroundColor: Color.marineBlue,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
    width: '100%',
  },
  id: {
    color: Color.white,
    fontFamily: 'NunitoSans-Regular',
    fontSize: 13,
  },
  return: {
    marginTop: 5,
    width: scale(12),
    height: verticalScale(12),
    marginHorizontal: 5,
  },
});
export default Header;
