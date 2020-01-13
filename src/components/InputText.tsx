import React from 'react';
import {
  TextInput,
  View,
  TouchableOpacity as Touch,
  StyleSheet,
  ViewStyle,
  KeyboardTypeOptions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Color} from '../constants/Color';
import {scale} from '../constants/ScaleUtils';

// Input Text
type AutoCapitalize = 'characters' | 'none' | 'sentences' | 'words';
interface PropInputText {
  style?: ViewStyle;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  value?: string;
  onChangeText: () => void;
  autoCapitalize?: AutoCapitalize;
  maxLength?: number;
}
export const InputText = (props: PropInputText) => {
  const {inputText} = styles;
  return (
    <View>
      <TextInput
        style={[inputText, props.style]}
        placeholder={props.placeholder}
        placeholderTextColor={Color.mediumgray}
        onChangeText={props.onChangeText}
        value={props.value}
        keyboardType={props.keyboardType ? props.keyboardType : 'default'}
        autoCapitalize={props.autoCapitalize}
        maxLength={props.maxLength}
      />
    </View>
  );
};

// Password
interface PropsInputPassword {
  placeholder: string;
  onChangeText: () => void;
  value?: string;
}
export const InputPassword = (props: PropsInputPassword) => {
  const {inputText, buttonPassword} = styles;
  const {placeholder, onChangeText, value} = props;
  const [hidePassword, onPassword] = React.useState(true);
  return (
    <View>
      <TextInput
        style={inputText}
        placeholder={placeholder}
        placeholderTextColor={Color.mediumgray}
        onChangeText={onChangeText}
        value={value}
        keyboardType="default"
        autoCapitalize="none"
        secureTextEntry={hidePassword}
      />
      <View style={buttonPassword}>
        <Touch
          onPress={() => (hidePassword ? onPassword(false) : onPassword(true))}>
          <Icon
            color={Color.greyish}
            name={hidePassword ? 'eye-off' : 'eye'}
            size={scale(20)}
          />
        </Touch>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Text Input
  inputText: {
    width: '100%',
    height: 50,
    borderColor: Color.greyish,
    borderWidth: 0.5,
    borderRadius: 10,
    paddingLeft: 15,
    marginVertical: 10,
  },

  //
  buttonPassword: {
    position: 'absolute',
    right: 15,
    width: 35,
    height: 35,
    marginTop: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
