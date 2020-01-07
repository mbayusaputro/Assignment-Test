import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from './Text';
import {verticalScale} from '../constants/ScaleUtils';
import fonts from '../constants/Fonts';
import {Color} from '../constants/Color';
import {TITLE_FONT_SIZE} from '../constants/TextSize';

export const SubHeader = () => <View style={styles.subHeader} />;

type HeaderProps = {
  title: string;
};
export const Header = (props: HeaderProps) => (
  <View style={styles.header}>
    <Text style={styles.titleHeader}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  // Component
  header: {
    width: '100%',
    backgroundColor: Color.marineBlue,
    paddingVertical: 7.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subHeader: {
    width: '100%',
    height: verticalScale(50),
    backgroundColor: Color.marineBlue,
    borderBottomStartRadius: 100,
  },

  // Text
  titleHeader: {
    fontFamily: fonts.fontBold,
    fontSize: TITLE_FONT_SIZE,
    color: Color.white,
  },
});
