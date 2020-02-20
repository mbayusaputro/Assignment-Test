import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity as Touch,
} from 'react-native';
import {verticalScale, scale} from '../../../../../constants/ScaleUtils';
import {Color} from '../../../../../constants/Color';

type Props = {
  onPress: () => void;
};

const Login = (props: Props) => {
  return (
    <Touch onPress={props.onPress} activeOpacity={0.75} style={styles.card}>
      <View style={{flex: 0.3}}>
        <Image
          style={{
            height: verticalScale(50),
            width: scale(35),
          }}
          source={require('../../../../../assets/icons/icon_touch_phone.png')}
          resizeMode="contain"
        />
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.text}>
          Log In or Register to enjoy this member-only benefit
        </Text>
      </View>
    </Touch>
  );
};

export default Login;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.orange,
    flexDirection: 'row',
    paddingHorizontal: 30,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontFamily: 'NunitoSans-Regular',
    color: Color.white,
    letterSpacing: 0.5,
  },
});
