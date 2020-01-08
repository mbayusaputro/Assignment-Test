import React, {ReactNode} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity as Touch,
  Platform,
  Image,
} from 'react-native';
import Text from './Text';
import {verticalScale, scale} from '../constants/ScaleUtils';
import fonts from '../constants/Fonts';
import {Color} from '../constants/Color';
import {TITLE_FONT_SIZE} from '../constants/TextSize';

export const SubHeader = () => <View style={styles.subHeader} />;

type HeaderProps = {
  title: string;
  callback?: () => void;
  right?: ReactNode;
};
export const Header = (props: HeaderProps) => {
  return (
    <View style={styles.header}>
      <View style={styles.leftHeader}>
        {props.callback ? (
          <Touch onPress={props.callback}>
            <Image
              source={require('../assets/icons/arrow_left_icon.png')}
              resizeMode={Platform.OS === 'ios' ? 'contain' : 'cover'}
              style={styles.imgBack}
            />
          </Touch>
        ) : null}
      </View>
      <View style={styles.centerHeader}>
        <Text style={styles.titleHeader}>{props.title}</Text>
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
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centerHeader: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftHeader: {
    width: '25%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  rightHeader: {
    width: '25%',
    alignItems: 'flex-end',
    justifyContent: 'center',
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

  // Other
  imgBack: {
    width: scale(22.5),
    height: verticalScale(20),
    tintColor: '#FFFFFF',
  },
});
