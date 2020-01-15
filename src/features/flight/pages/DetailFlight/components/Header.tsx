import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity as Touch,
} from 'react-native';
import {Color} from '../../../../../constants/Color';
import {HEADER_FONT_SIZE} from '../../../../../constants/TextSize';
import {verticalScale} from '../../../../../constants/ScaleUtils';
import {WIDTH_SCREEN} from '../../../../../constants/Dimension';

type Props = {
  goBack?: () => void;
  title: string;
};
const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <Touch onPress={props.goBack}>
        <Image
          style={{height: verticalScale(16), marginTop: 5}}
          source={require('../../../../../assets/icons/back.png')}
          resizeMode="contain"
        />
      </Touch>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Color.marineBlue,
    alignItems: 'center',
    height: 60,
  },
  title: {
    marginLeft: WIDTH_SCREEN / 5.5,
    color: Color.white,
    fontSize: HEADER_FONT_SIZE,
    fontFamily: 'NunitoSans-ExtraBold',
  },
});
export default Header;
