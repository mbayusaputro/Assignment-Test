import React, {ReactNode} from 'react';
import {SafeAreaView, Text, TextStyle} from 'react-native';
import {LanguageContext, Content} from '../helpers/LanguageContext';

type Props = {
  children?: ReactNode;
  content?: Content;
  isUpperCase?: boolean | undefined;
  fontWeight?: string | undefined;
  style?: TextStyle;
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
  let {content, children, isUpperCase, fontWeight} = props;
  return (
    <SafeAreaView>
      <LanguageContext.Consumer>
        {({language}) =>
          content ? (
            <Text style={props.style}>
              {language === 'id'
                ? setText(content.id, isUpperCase, fontWeight)
                : setText(content.en, isUpperCase, fontWeight)}
            </Text>
          ) : (
            <Text style={props.style}>{children}</Text>
          )
        }
      </LanguageContext.Consumer>
    </SafeAreaView>
  );
};

export default CustomText;
