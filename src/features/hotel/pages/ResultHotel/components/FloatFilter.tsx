import React from 'react';
import {TouchableOpacity as Touch, StyleSheet} from 'react-native';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color} from '../../../../../constants/Color';
import {HEADER_FONT_SIZE} from '../../../../../constants/TextSize';
import {Text} from '../../../../../components';
import fonts from '../../../../../constants/Fonts';

type Props = {
  onPress: () => void;
};

export default (props: Props) => {
  const {onPress} = props;
  return (
    <Touch onPress={onPress} activeOpacity={0.5} style={styles.float}>
      <MaterialComIcon
        name="filter"
        color={Color.white}
        size={HEADER_FONT_SIZE}
        style={styles.icon}
      />
      <Text style={styles.text} content={{id: 'Saring', en: 'Filter'}} />
    </Touch>
  );
};

const styles = StyleSheet.create({
  float: {
    position: 'absolute',
    bottom: 10,
    zIndex: 1,
    alignSelf: 'center',
    backgroundColor: Color.tealBlue,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
  text: {
    fontFamily: fonts.fontSemiBold,
    color: Color.white,
    fontSize: HEADER_FONT_SIZE,
  },
});
