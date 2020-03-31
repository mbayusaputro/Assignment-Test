import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity as Touch,
  Picker,
} from 'react-native';
import Modal from 'react-native-modal';
import {Text, InputText, Button} from '../../../../../components';
import {Color} from '../../../../../constants/Color';
import fonts from '../../../../../constants/Fonts';
import {
  HEADER_FONT_SIZE,
  MEDIUM_FONT_SIZE,
} from '../../../../../constants/TextSize';
import {salutationAdult, salutationChild} from './data';
import {ModalProps} from '../types';
import ScrollPicker from 'react-native-wheel-scroll-picker';
import {generateDate} from '../../../../../helpers/helpers';
import moment from 'moment';
import {oc} from 'ts-optchain';

export default (props: ModalProps) => {
  // Props
  const {
    isVisible,
    onDismiss,
    form,
    handleInput,
    onSave,
    onDob,
    dataPassenger,
    index,
  } = props;

  // State
  const [salutation, setSalutation] = useState('MR');
  const [dob, setDob] = useState(false);
  const [type, setType] = React.useState(['Day', 'Month', 'Year']);
  const [year, setYear] = useState(new Date().getFullYear() - 12);
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [day, setDay] = useState(new Date().getDate());
  const [isName, setName] = useState('');

  // Lifecycle
  useEffect(() => {
    if (isName !== oc(dataPassenger[form][index]).fullName('')) {
      setName(oc(dataPassenger[form][index]).fullName(''));
    }
  });

  // Function
  const onChange = (data: any, item: any) => {
    item === 'Day'
      ? setDay(data)
      : item === 'Month'
      ? setMonth(data)
      : setYear(data);
  };

  const doneDob = () => {
    onDob(`${year}-${month}-${day}`);
    setDob(!dob);
  };

  const onText = (text: string) => {
    setName(text);
    handleInput('fullName', text);
  };

  // Main Render
  return (
    <Modal
      useNativeDriver={true}
      isVisible={isVisible}
      avoidKeyboard={true}
      onBackButtonPress={onDismiss}
      onBackdropPress={onDismiss}
      style={styles.modal}
      children={
        <View style={styles.container}>
          <Touch style={styles.close} onPress={onDismiss}>
            <Text style={styles.textClose}>{form.toUpperCase()}</Text>
          </Touch>
          {dob ? (
            <View style={[styles.vertical, {marginTop: 10}]}>
              <View style={[styles.rowBetween, {paddingHorizontal: 40}]}>
                {type.map((item: any, i: number) => {
                  return (
                    <Text
                      key={i}
                      style={{fontFamily: 'NunitoSans-Bold', fontSize: 16}}>
                      {item}
                    </Text>
                  );
                })}
              </View>
              <View style={styles.rowBetween}>
                {type.map((item: any, i: number) => {
                  return (
                    <ScrollPicker
                      key={i}
                      dataSource={
                        item === 'Day'
                          ? generateDate(1, 30)
                          : item === 'Month'
                          ? generateDate(1, 12)
                          : generateDate(2008, 2019)
                      }
                      onValueChange={(data: any, _: number) =>
                        onChange(data, item)
                      }
                      itemColor={Color.black}
                      itemHeight={35}
                      highlightBorderWidth={0.2}
                      highlightColor={Color.labelgray}
                      wrapperHeight={100}
                    />
                  );
                })}
              </View>
            </View>
          ) : (
            <View style={styles.vertical}>
              <View style={styles.rowBetween}>
                <View style={{width: '25%'}}>
                  <Picker
                    selectedValue={salutation}
                    style={{width: '100%'}}
                    onValueChange={(value: any, _: number) =>
                      setSalutation(value)
                    }>
                    {form !== 'adult'
                      ? salutationChild.map((item: any, index: number) => (
                          <Picker.Item
                            key={index}
                            value={item.title}
                            label={item.title}
                          />
                        ))
                      : salutationAdult.map((item: any, index: number) => (
                          <Picker.Item
                            key={index}
                            value={item.title}
                            label={item.title}
                          />
                        ))}
                  </Picker>
                </View>
                <View style={{width: '75%'}}>
                  <InputText
                    style={{borderRadius: 5, borderColor: Color.labelgray}}
                    placeholder="Full Name"
                    onChangeText={(text: string) => onText(text)}
                    autoCapitalize="words"
                    value={isName}
                  />
                </View>
              </View>
              {form !== 'adult' ? (
                <Touch
                  onPress={() => setDob(!dob)}
                  style={[styles.rowBetween, {marginBottom: 5}]}>
                  <Text
                    style={{fontFamily: 'NunitoSans-SemiBold', fontSize: 16}}>
                    Birthdate
                  </Text>
                  <Text style={{fontFamily: 'NunitoSans-Bold', fontSize: 16}}>
                    {moment(new Date(year, month, day)).format('DD MMMM YYYY')}
                  </Text>
                </Touch>
              ) : (
                []
              )}
            </View>
          )}
          <View style={styles.vertical}>
            {dob ? (
              <Button
                content={{id: 'Selesai', en: 'Done'}}
                customStyle={styles.btnUpdate}
                fullWidth
                isUpperCase
                onPress={() => doneDob()}
              />
            ) : (
              <Button
                content={{id: 'Simpan Kontak', en: 'Save Contact'}}
                customStyle={styles.btnUpdate}
                fullWidth
                isUpperCase
                onPress={() => onSave(form, salutation)}
              />
            )}
          </View>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Color.white,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    paddingBottom: 20,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  vertical: {
    marginVertical: 5,
  },
  textClose: {
    fontFamily: fonts.fontSemiBold,
    fontSize: HEADER_FONT_SIZE,
  },
  textTitle: {
    fontFamily: fonts.fontBold,
    fontSize: HEADER_FONT_SIZE,
  },
  textButton: {
    fontFamily: fonts.fontBold,
    fontSize: HEADER_FONT_SIZE,
    color: Color.tealBlue,
  },
  textError: {
    fontFamily: fonts.fontBold,
    color: Color.red,
    fontSize: MEDIUM_FONT_SIZE,
  },
  close: {
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Color.backWhite,
  },
  btnUpdate: {
    borderRadius: 20,
    backgroundColor: Color.tealBlue,
    borderColor: Color.tealBlue,
    borderWidth: 0.5,
  },
});
