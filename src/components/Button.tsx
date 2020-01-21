import React, {ReactNode} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import {LanguageContext, Content} from '../helpers/LanguageContext';
import {WIDTH_SCREEN} from '../constants/Dimension';
import {MEDIUM_FONT_SIZE, HEADER_FONT_SIZE} from '../constants/TextSize';
import {Color} from '../constants/Color';

const halfWidthButton = WIDTH_SCREEN / 2.5;
const fullWidthButton = WIDTH_SCREEN - 40;

type Props = {
  children?: ReactNode;
  content?: Content;
  disabled?: boolean;
  type?: 'primary' | 'secondary' | 'third' | 'four' | 'facebook' | 'google';
  fullWidth?: boolean;
  icon?: ImageSourcePropType;
  isUpperCase?: boolean | undefined;
  customStyle?: ViewStyle;
  customTextStyle?: TextStyle;
  onPress?: () => void;
};

const setText = (content: string, isUppercase: boolean | undefined) => {
  if (isUppercase) {
    return content.toUpperCase();
  }

  return content;
};
const Button = (props: Props) => {
  let {
    children,
    content,
    disabled,
    type,
    fullWidth,
    icon,
    isUpperCase,
    onPress,
    customStyle,
    customTextStyle,
  } = props;

  let buttonStyle = styles.buttonPrimary;
  let buttonType = fullWidth ? styles.buttonFullWidth : styles.button;
  let textStyle = styles.textPrimary;
  if (type === 'secondary') {
    buttonStyle = styles.buttonSecondary;
    textStyle = styles.textSecondary;
  } else if (type === 'third') {
    buttonStyle = styles.buttonThird;
    textStyle = styles.textThird;
  } else if (type === 'four') {
    buttonStyle = styles.buttonForth;
    textStyle = styles.textThird;
  } else if (type === 'facebook') {
    buttonStyle = styles.buttonFacebook;
    textStyle = styles.textFacebook;
  } else if (type === 'google') {
    buttonStyle = styles.buttonGoogle;
    textStyle = styles.textGoogle;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[buttonType, buttonStyle, customStyle]}>
      <View style={{flexDirection: 'row'}}>
        {icon ? (
          <View style={{paddingRight: 20, paddingTop: 5}}>
            <Image source={icon} />
          </View>
        ) : (
          <View />
        )}

        <View>
          <LanguageContext.Consumer>
            {({language}) =>
              content ? (
                <Text style={[textStyle, customTextStyle]}>
                  {language === 'id'
                    ? setText(content.id, isUpperCase)
                    : setText(content.en, isUpperCase)}
                </Text>
              ) : (
                <Text style={[textStyle, customTextStyle]}>{children}</Text>
              )
            }
          </LanguageContext.Consumer>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const ButtonLoading = () => (
  <Button
    type="four"
    children={<ActivityIndicator size="large" color={Color.red} />}
    content={{id: 'Mohon Tunggu..', en: 'Please Wait..'}}
    fullWidth
  />
);

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
    backgroundColor: Color.marineBlue,
    borderColor: Color.marineBlue,
    borderWidth: 1,
  },
  textPrimary: {
    color: '#FFFFFF',
    fontFamily: 'NunitoSans-ExtraBold',
    fontSize: HEADER_FONT_SIZE,
  },
  buttonSecondary: {
    backgroundColor: '#FFFFFF',
    borderColor: Color.red,
    borderWidth: 1,
  },
  textSecondary: {
    color: Color.red,
    fontFamily: 'NunitoSans-ExtraBold',
    fontSize: HEADER_FONT_SIZE,
  },
  buttonThird: {
    backgroundColor: Color.lightgray,
    borderColor: Color.lightgray,
    borderWidth: 1,
  },
  textThird: {
    color: Color.superBlack,
    fontWeight: '500',
    fontFamily: 'NunitoSans-Bold',
    fontSize: MEDIUM_FONT_SIZE,
  },
  buttonForth: {
    backgroundColor: Color.lightgray,
    borderColor: Color.lightgray,
    borderWidth: 1,
  },
  buttonFacebook: {
    backgroundColor: Color.lightgray,
    borderColor: Color.lightgray,
    borderWidth: 1,
  },
  textFacebook: {
    color: Color.lightgray,
    fontWeight: '500',
    fontFamily: 'NunitoSans-Bold',
    fontSize: MEDIUM_FONT_SIZE,
  },
  buttonGoogle: {
    backgroundColor: Color.lightgray,
    borderColor: Color.lightgray,
    borderWidth: 1,
  },
  textGoogle: {
    color: Color.lightgray,
    fontWeight: '500',
    fontFamily: 'NunitoSans-Bold',
    fontSize: MEDIUM_FONT_SIZE,
  },
});

export default Button;
