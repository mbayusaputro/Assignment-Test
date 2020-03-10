import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity as Touch,
} from 'react-native';
import Modal from 'react-native-modal';
import {Color} from '../../../../../constants/Color';
import {scale, verticalScale} from '../../../../../constants/ScaleUtils';
import Header from './Head';
import {ModalProps, FieldProps} from '../../../interface/types';
import {dataBank} from '../../../interface/data';

const Aiports = (props: FieldProps) => {
  // Props
  const {name, code, onPress} = props;
  return (
    <Touch style={styles.list} activeOpacity={0.7} onPress={onPress}>
      <Text style={{fontFamily: 'NunitoSans-Bold', fontSize: 16}}>{name}</Text>
      <View style={styles.code}>
        <Text
          style={{
            fontFamily: 'NunitoSans-Regular',
            color: Color.brownGreyTwo,
            fontSize: 12,
          }}>
          {code}
        </Text>
      </View>
    </Touch>
  );
};

const SearchBank = (props: ModalProps) => {
  // Props
  const {isVisible, onDismiss, onSave} = props;

  // State
  const [isOnFocus, setOnFocus] = useState(false);
  const [isBank, setBank] = useState([]);

  useEffect(() => {
    setBank(dataBank);
  }, []);

  const onChange = (event: string) => {
    let tempDataBank = [];
    if (dataBank.length > 0) {
      dataBank.filter((obj: any) => {
        if (
          obj.bankName.toLowerCase().indexOf(event.toLowerCase()) > -1 ||
          obj.bankCode.toLowerCase().indexOf(event.toLowerCase()) > -1
        ) {
          tempDataBank.push(obj);
        }
      });
    }
    setBank(tempDataBank);
  };

  return (
    <View style={{flex: 1}}>
      <Modal
        isVisible={isVisible}
        backdropColor={Color.lightgray}
        backdropOpacity={1}
        onBackButtonPress={onDismiss}
        style={{marginHorizontal: 0}}>
        <SafeAreaView style={{flex: 1}}>
          <Header title="Select Departure" goBack={onDismiss} />
          <View style={styles.search}>
            <Image
              style={{
                height: verticalScale(20),
                width: scale(20),
                tintColor: Color.orange,
              }}
              source={require('../../../../../assets/icons/map.png')}
              resizeMode="contain"
            />
            <TextInput
              // value={'Place'}
              placeholder="Select City or Airport"
              style={[
                styles.text,
                isOnFocus ? {marginLeft: 30} : {textAlign: 'center'},
              ]}
              onChangeText={(text: string) => onChange(text)}
              onFocus={() => setOnFocus(true)}
            />
          </View>
          <View style={styles.title}>
            <Text
              style={{
                fontFamily: 'NunitoSans-Regular',
                color: Color.brownGreyF,
                fontSize: 16,
                marginBottom: 10,
              }}>
              Popular Destinations
            </Text>
            <FlatList
              data={isBank}
              keyExtractor={(__: any, index: number) => index.toString()}
              renderItem={({item, index}) => {
                return (
                  <Aiports
                    onPress={() => onSave(item)}
                    key={index}
                    name={item.bankName}
                    code={item.bankCode}
                  />
                );
              }}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default SearchBank;

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  code: {
    backgroundColor: Color.lightgray,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 7,
  },
  search: {
    flexDirection: 'row',
    backgroundColor: Color.white,
    padding: 20,
    borderRadius: 5,
    marginTop: -30,
    marginBottom: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    backgroundColor: Color.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    padding: 20,
  },
  text: {
    flex: 1,
    fontFamily: 'NunitoSans-Regular',
  },
});
