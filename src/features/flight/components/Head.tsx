import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity as Touch,
} from 'react-native';
import {Color} from '../../../constants/Color';
import {HEADER_FONT_SIZE} from '../../../constants/TextSize';
import {verticalScale, scale} from '../../../constants/ScaleUtils';
import {WIDTH_SCREEN} from '../../../constants/Dimension';

interface Props {
  goBack?: () => void;
  title: string;
}
const Header = (props: Props) => {
  return (
    <View>
      <View style={styles.container}>
        <Touch onPress={props.goBack}>
          <Image
            style={{height: verticalScale(16), width: scale(20), marginTop: 2}}
            source={require('../../../assets/icons/close.png')}
            resizeMode="contain"
          />
        </Touch>
        <Text style={styles.title}>{props.title}</Text>
        <Image
          style={{height: verticalScale(16), width: scale(20), marginTop: 2}}
          source={{}}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content} />
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
    fontFamily: 'NunitoSans-ExtraBold',
  },
  content: {
    backgroundColor: Color.marineBlue,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    height: 40,
    width: '100%',
  },
});
export default Header;
