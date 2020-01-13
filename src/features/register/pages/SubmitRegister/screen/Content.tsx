import React from 'react';
import {ScrollView, View} from 'react-native';
import {
  Text,
  InputText,
  InputPassword,
  Button,
} from '../../../../../components';
import styles from './style';

type ContentProps = {
  onChangeFullname: any;
  onChangeEmail: any;
  onChangeMobilePrefix: any;
  onChangeMobileNumber: any;
  onChangeNationality: any;
  onChangePassword: any;
  onChangeConfirmPassword: any;
  onSubmit: () => void;
  valueEmail: string;
  valueMobilePrefix: string;
  valueMobileNumber: string;
};

export default (props: ContentProps) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.container, styles.content]}>
        <View>
          <Text style={styles.textDesc}>
            One more step! Enter your full name {'\n'}
            and password to securely log in to this account.
          </Text>
        </View>
        <View style={styles.content} />
        <View>
          <Text>Fullname</Text>
          <InputText
            placeholder="Name as ID Card or Passport"
            onChangeText={props.onChangeFullname}
          />
        </View>
        <View>
          <Text>Email</Text>
          <InputText
            placeholder="yourmail@mail.com"
            onChangeText={props.onChangeEmail}
            value={props.valueEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View>
          <Text>Mobile Number</Text>
          <View style={styles.rowDirection}>
            <View style={{width: '15%'}}>
              <InputText
                placeholder="62"
                onChangeText={props.onChangeMobilePrefix}
                keyboardType="phone-pad"
                value={props.valueMobilePrefix}
              />
            </View>
            <View style={{width: '80%'}}>
              <InputText
                placeholder="8xxx"
                onChangeText={props.onChangeMobileNumber}
                keyboardType="phone-pad"
                value={props.valueMobileNumber}
              />
            </View>
          </View>
        </View>
        <View>
          <Text>Nationality</Text>
          <InputText
            placeholder="ID"
            onChangeText={props.onChangeNationality}
          />
        </View>
        <View>
          <Text>Password</Text>
          <InputPassword
            placeholder="Name as ID Card or Passport"
            onChangeText={props.onChangePassword}
          />
        </View>
        <View>
          <Text>Confirm Password</Text>
          <InputPassword
            placeholder="Name as ID Card or Passport"
            onChangeText={props.onChangeConfirmPassword}
          />
        </View>
        <View style={[styles.footer]}>
          <Button
            content={{id: 'Submit', en: 'Submit'}}
            isUpperCase={true}
            customStyle={styles.btnSubmit}
            onPress={props.onSubmit}
          />
        </View>
      </View>
    </ScrollView>
  );
};
