import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity as Touch,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import {ModalChangeProps as Props} from '../../../interface/types';
import {
  Text,
  InputPassword,
  Button,
  ButtonLoading,
} from '../../../../../components';
import {Color} from '../../../../../constants/Color';
import fonts from '../../../../../constants/Fonts';
import {TITLE_FONT_SIZE} from '../../../../../constants/TextSize';

export default (props: Props) => {
  return (
    <Modal
      avoidKeyboard={true}
      useNativeDriver={true}
      style={styles.modal}
      isVisible={props.isVisible}
      onBackButtonPress={props.onDismiss}
      onBackdropPress={props.onDismiss}
      children={
        <View style={styles.container}>
          <Touch style={styles.close} onPress={props.onDismiss}>
            <Text
              style={styles.textClose}
              content={{id: 'Tutup', en: 'Close'}}
            />
          </Touch>

          <ScrollView>
            <View style={styles.vertical}>
              <Text
                content={{
                  id:
                    'Masukkan kata sandi lama dan kata sandi baru yang anda inginkan',
                  en: 'Enter the old password and new password you want',
                }}
              />
            </View>

            <View style={styles.vertical}>
              <InputPassword
                placeholder="Current Password"
                onChangeText={(text: any) =>
                  props.onChangeCurrentPassword(text)
                }
              />
            </View>

            <View style={styles.vertical}>
              <InputPassword
                placeholder="New Password"
                onChangeText={(text: any) => props.onChangeNewPassword(text)}
              />
            </View>

            <View style={styles.vertical}>
              <InputPassword
                placeholder="Confirm Password"
                onChangeText={(text: any) =>
                  props.onChangeConfirmPassword(text)
                }
              />
            </View>

            <View style={styles.vertical}>
              {props.isLoading ? (
                <ButtonLoading />
              ) : (
                <Button
                  fullWidth
                  isUpperCase={true}
                  onPress={props.onChange}
                  content={{id: 'Simpan', en: 'Save'}}
                  customStyle={styles.btnChange}
                />
              )}
            </View>
          </ScrollView>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  // Layout
  modal: {
    flex: 1,
    margin: 0,
    justifyContent: 'flex-end',
  },
  container: {
    padding: 10,
    backgroundColor: Color.white,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    paddingBottom: 20,
  },
  vertical: {
    marginVertical: 5,
  },

  // Component
  close: {
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Color.backWhite,
  },
  btnChange: {
    borderRadius: 20,
  },

  // Text
  textClose: {
    fontFamily: fonts.fontSemiBold,
    fontSize: TITLE_FONT_SIZE,
  },
});
