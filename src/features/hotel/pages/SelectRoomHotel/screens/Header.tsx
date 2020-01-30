import React from 'react';
import {TouchableOpacity as Touch, StyleSheet} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {Header, Imaging} from '../../../../../components';
import {headerSelectRoomLang} from '../../../interface/string';
import {Color} from '../../../../../constants/Color';
import normalize from '../../../../../constants/normalize';

type Props = {
  callback: () => void;
  onRight: () => void;
};

export default (props: Props) => {
  return (
    <Header
      content={headerSelectRoomLang}
      callback={props.callback}
      iconLeft={
        props.onRight && (
          <Imaging
            style={styles.leftIcon}
            source={require('../../../../../assets/icons/close.png')}
            resizeMode="contain"
          />
        )
      }
      right={
        props.onRight && (
          <Touch
            onPress={props.onRight}
            activeOpacity={0.5}
            style={styles.rightIcon}>
            <FeatherIcon name="check" size={25} color={Color.white} />
          </Touch>
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  rightIcon: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftIcon: {height: normalize(16), width: normalize(20), marginTop: 2},
});
