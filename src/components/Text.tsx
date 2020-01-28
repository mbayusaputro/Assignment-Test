import React, {ReactNode} from 'react';
import {
  SafeAreaView,
  Text,
  TextStyle,
  StyleProp,
  StyleSheet,
} from 'react-native';
import {LanguageContext, Content} from '../helpers/LanguageContext';
import fonts from '../constants/Fonts';

type Props = {
  children?: ReactNode;
  content?: Content;
  isUpperCase?: boolean | undefined;
  fontWeight?: string | undefined;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
};

const setText = (
  content: string,
  isUppercase: boolean | undefined,
  fontWeight: string | undefined,
) => {
  if (isUppercase) {
    return content.toUpperCase();
  }

  return content;
};

const CustomText = (props: Props) => {
  const {content, children, isUpperCase, fontWeight, numberOfLines} = props;
  const {defaultText} = styles;
  return (
    <SafeAreaView>
      <LanguageContext.Consumer>
        {({language}) =>
          content ? (
            <Text
              style={[defaultText, props.style]}
              numberOfLines={numberOfLines}>
              {language === 'id'
                ? setText(content.id, isUpperCase, fontWeight)
                : setText(content.en, isUpperCase, fontWeight)}
            </Text>
          ) : (
            <Text
              style={[defaultText, props.style]}
              numberOfLines={numberOfLines}>
              {children}
            </Text>
          )
        }
      </LanguageContext.Consumer>
    </SafeAreaView>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: fonts.fontReguler,
  },
});
