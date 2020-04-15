import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {WIDTH_SCREEN} from '../constants/Dimension';

const halfWidthButton = WIDTH_SCREEN / 2.5;

type Props = {
  text: string;
  type?: 'primary' | 'secondary' | 'third';
  fullWidth?: boolean;
  customStyle?: StyleProp<ViewStyle>;
  customTextStyle?: TextStyle;
  onPress?: () => void;
};

const Button = (props: Props) => {
  let {text, type, fullWidth, onPress, customStyle, customTextStyle} = props;

  let buttonStyle = styles.buttonPrimary;
  let buttonType = fullWidth ? styles.buttonFullWidth : styles.button;
  let textStyle = styles.textPrimary;
  if (type === 'secondary') {
    buttonStyle = styles.buttonSecondary;
    textStyle = styles.textSecondary;
  } else if (type === 'third') {
    buttonStyle = styles.buttonThird;
    textStyle = styles.textThird;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={onPress}
      style={[buttonType, buttonStyle, customStyle]}>
      <View>
        <Text style={[textStyle, customTextStyle]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    width: halfWidthButton,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonFullWidth: {
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonPrimary: {
    backgroundColor: '#ea6520',
    borderColor: '#ea6520',
    borderWidth: 1,
  },
  textPrimary: {
    color: '#FFFFFF',
    fontFamily: 'NunitoSans-ExtraBold',
    textAlign: 'center',
  },
  buttonSecondary: {
    backgroundColor: '#FFFFFF',
    borderColor: '#ea6520',
    borderWidth: 1,
  },
  textSecondary: {
    color: '#ea6520',
    fontFamily: 'NunitoSans-ExtraBold',
    textAlign: 'center',
  },
  buttonThird: {
    backgroundColor: '#23900a',
    borderColor: '#23900a',
    borderWidth: 1,
  },
  textThird: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontFamily: 'NunitoSans-Bold',
    textAlign: 'center',
  },
});

export default Button;
