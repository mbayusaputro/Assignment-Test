import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Color} from '../../../constants/Color';
import {Text} from '../../../components';
import {HEADER_FONT_SIZE} from '../../../constants/TextSize';
import {verticalScale, scale} from '../../../constants/ScaleUtils';
import {WIDTH_SCREEN} from '../../../constants/Dimension';
import fonts from '../../../constants/Fonts';

const Header = (props: any) => {
  return (
    <View style={styles.container}>
      <Image
        style={{height: verticalScale(16), width: scale(20), marginTop: 2}}
        source={require('../../../assets/icons/back.png')}
        resizeMode="contain"
      />
      <Text
        style={styles.title}
        content={{id: 'Pilih Metode Pembayaran', en: 'Select Payment Method'}}
      />
      <Image
        style={{height: verticalScale(16), width: scale(20), marginTop: 2}}
        source={require('../../../assets/icons/icon_dot_vertical.png')}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Color.marineBlue,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  title: {
    marginLeft: WIDTH_SCREEN / 20,
    color: Color.white,
    fontSize: HEADER_FONT_SIZE,
    fontFamily: fonts.fontExtraBold,
  },
});
export default Header;
