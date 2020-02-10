import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableOpacity as Touch} from 'react-native';
import {Imaging, Text} from '../../../../../components';
import styles from './styles';
import {show_more} from '../../../interface/strings';

export const Bookmark = () => (
  <Imaging
    source={require('../../../../../assets/icons/bookmark.png')}
    resizeMode="contain"
    style={styles.icon}
  />
);

export const CheckGreen = () => (
  <Imaging
    source={require('../../../../../assets/icons/check_green.png')}
    resizeMode="contain"
    style={[styles.icon, {marginRight: 10}]}
  />
);

export const CloseRed = () => (
  <Imaging
    source={require('../../../../../assets/icons/close_red.png')}
    resizeMode="contain"
    style={[styles.icon, {marginRight: 10}]}
  />
);

type ShowProps = {
  onPress: () => void;
};
export const ShowMore = (props: ShowProps) => (
  <Touch
    onPress={props.onPress}
    activeOpacity={0.75}
    style={[styles.row, styles.btnShowMore]}>
    <Text style={styles.textSmallBold} content={show_more} />
    <Icon
      name="chevron-down"
      size={25}
      style={{marginTop: 2.5, marginLeft: 5}}
    />
  </Touch>
);
