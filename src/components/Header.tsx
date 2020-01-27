import React, {ReactNode} from 'react';
import {View, StyleSheet, TouchableHighlight as Touch} from 'react-native';
import Imaging from './Imaging';
import Text from './Text';
import fonts from '../constants/Fonts';
import {Color} from '../constants/Color';
import {TITLE_FONT_SIZE} from '../constants/TextSize';
import normalize from '../constants/normalize';

export const SubHeader = () => <View style={styles.subHeader} />;

type contentTitle = {id: string; en: string};
type HeaderProps = {
  content?: contentTitle;
  title?: string;
  callback?: () => void;
  right?: ReactNode;
  iconLeft?: ReactNode;
};
export const Header = (props: HeaderProps) => {
  return (
    <View style={styles.header}>
      {props.callback ? (
        <Touch
          style={styles.leftHeader}
          onPress={props.callback}
          activeOpacity={0.5}
          underlayColor={Color.blueMarine}>
          {props.iconLeft ? (
            props.iconLeft
          ) : (
            <Imaging
              source={require('../assets/icons/back.png')}
              resizeMode="contain"
              style={styles.imgBack}
            />
          )}
        </Touch>
      ) : (
        <View style={styles.leftHeader} />
      )}
      <View style={styles.centerHeader}>
        {props.content ? (
          <Text style={styles.titleHeader} content={props.content} />
        ) : (
          <Text style={styles.titleHeader}>{props.title}</Text>
        )}
      </View>
      <View style={styles.rightHeader}>{props.right ? props.right : null}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Component
  header: {
    width: '100%',
    backgroundColor: Color.marineBlue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: normalize(57.5, 'height'),
  },
  centerHeader: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  leftHeader: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  rightHeader: {
    width: '15%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subHeader: {
    width: '100%',
    height: normalize(50, 'height'),
    backgroundColor: Color.marineBlue,
    borderBottomStartRadius: 100,
  },

  // Text
  titleHeader: {
    fontFamily: fonts.fontBold,
    fontSize: TITLE_FONT_SIZE,
    color: Color.white,
  },

  // Other
  imgBack: {
    width: normalize(22.5, 'width'),
    height: normalize(20, 'height'),
    tintColor: Color.white,
  },
});
