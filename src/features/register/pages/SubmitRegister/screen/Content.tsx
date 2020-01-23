import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity as Touch,
  FlatList,
} from 'react-native';
import {
  Text,
  InputText,
  InputPassword,
  Button,
  ButtonLoading,
} from '../../../../../components';
import {ModalContext, ModalCountry} from '../components';
import styles from './style';
import {oc} from 'ts-optchain';

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
  validEmail: boolean;
  valueMobilePrefix: string;
  valueMobileNumber: string;
  typeEmail: boolean;
  typeMobile: boolean;
  // Modal
  onShowModal: () => void;
  onDismiss: () => void;
  onSelectCountry: () => void;
  titleCountry: string;
  dataCountry: any;

  // Loading
  loading: boolean;
};

// Flatlist
const keyExtractor = (__: any, index: number) => index.toString();
const renderModal = ({item, index}: any) => (
  <View>
    <Text>{oc(item).nicename('Not Found')}</Text>
  </View>
);

export default (props: ContentProps) => {
  return (
    <ModalContext.Consumer>
      {({countryID, isVisible}) => (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.container, styles.content]}>
            <View>
              <Text style={styles.textDesc}>
                One more step! Enter your full name {'\n'}
                and password to securely log in to this account.
              </Text>
            </View>
            <View style={styles.content} />
            <View style={styles.vertical}>
              <Text>Fullname</Text>
              <InputText
                placeholder="Name as ID Card or Passport"
                onChangeText={props.onChangeFullname}
              />
            </View>
            <View style={styles.vertical}>
              <Text>Email</Text>
              <InputText
                placeholder="yourmail@mail.com"
                onChangeText={props.onChangeEmail}
                value={props.valueEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                editable={props.typeEmail}
              />
              {!props.validEmail && (
                <Text
                  style={styles.textError}
                  content={{
                    id: 'Mohon masukkan alamat email yang benar',
                    en: 'Please enter a valid email address',
                  }}
                />
              )}
            </View>
            <View style={styles.vertical}>
              <Text>Mobile Number</Text>
              <View style={styles.rowDirection}>
                <View style={{width: '17.5%'}}>
                  <InputText
                    placeholder="62"
                    onChangeText={props.onChangeMobilePrefix}
                    keyboardType="phone-pad"
                    value={props.valueMobilePrefix}
                    maxLength={4}
                    editable={props.typeMobile}
                  />
                </View>
                <View style={{width: '80%'}}>
                  <InputText
                    placeholder="8xxx"
                    onChangeText={props.onChangeMobileNumber}
                    keyboardType="phone-pad"
                    value={props.valueMobileNumber}
                    editable={props.typeMobile}
                  />
                </View>
              </View>
            </View>
            {/* <View>
              <Text>Nationality</Text>
              <View style={styles.rowDirection}>
                <View style={{width: '15%'}}>
                  <InputText
                    placeholder=""
                    value={countryID.toString()}
                    onChangeText={props.onChangeNationality}
                    editable={false}
                  />
                </View>
                <View style={{width: '80%'}}>
                  <Touch onPress={props.onShowModal}>
                    <Text>Select Country</Text>
                  </Touch>
                </View>
              </View>
            </View> */}
            <View style={styles.vertical}>
              <Text>Password</Text>
              <InputPassword
                placeholder="Name as ID Card or Passport"
                onChangeText={props.onChangePassword}
              />
            </View>
            <View style={styles.vertical}>
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
          <ModalCountry isVisible={isVisible} onDismiss={props.onDismiss}>
            <View style={styles.viewModal}>
              <View style={styles.vertical}>
                <InputText
                  placeholder="Type Country Name"
                  onChangeText={props.onChangeNationality}
                />
              </View>
              <FlatList
                data={props.dataCountry}
                keyExtractor={keyExtractor}
                renderItem={renderModal}
              />
              <Text>{props.titleCountry}</Text>
              {props.loading ? (
                <ButtonLoading />
              ) : (
                <Button
                  content={{id: 'Pilih Negara', en: 'Select Country'}}
                  isUpperCase
                  onPress={props.onSelectCountry}
                  fullWidth
                />
              )}
            </View>
          </ModalCountry>
        </ScrollView>
      )}
    </ModalContext.Consumer>
  );
};
