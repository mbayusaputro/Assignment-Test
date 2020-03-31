import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {Color} from '../../../../../constants/Color';
import {Text, Button, InputText} from '../../../../../components';
import {ModalProps} from '../../../interface/types';

const Passenger = (props: ModalProps) => {
  // Props
  const {isVisible, onDismiss, onSave, model} = props;

  // State
  const [isData, setData] = useState([{name: ''}, {name: ''}]);
  const [isNumber, setNumber] = useState(3);

  // Lifecycle
  useEffect(() => {
    generateArray();
  }, [isNumber]);

  // Function
  const generateArray = () => {
    let array = [];
    array.push({name: ''});
    // for (let i = 1; i <= isNumber; i++) {
    //   array.push({ name: "" });
    // }
    setData(isData.concat(array));
  };

  const onChange = (i: number, text: string) => {
    const data = isData;
    data[i].name = text;
    setData(data);
  };

  const onDD = (value: any) => {
    // setData(tempArr)
    console.log(isData);
  };

  // Main Render
  return (
    <Modal
      isVisible={isVisible}
      backdropColor={Color.black}
      onBackdropPress={onDismiss}
      onBackButtonPress={onDismiss}
      style={{flex: 1, justifyContent: 'flex-end', margin: 0}}>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={{borderBottomWidth: 0.5, borderColor: Color.lightgray}}>
            <Text
              style={{
                textAlign: 'center',
                paddingVertical: 10,
                fontFamily: 'NunitoSans-Bold',
                fontSize: 18,
              }}
              content={
                model === 'visited'
                  ? {id: 'Pilih Jumlah', en: 'Visited Date'}
                  : {id: 'Masukkan Jumlah', en: 'Holiday Date'}
              }
            />
          </View>
          <TouchableOpacity onPress={() => setNumber(isNumber + 1)}>
            <Text>+</Text>
          </TouchableOpacity>

          {/* Model Input */}
          {isData.map((item, i) => {
            return (
              <View style={styles.pd} key={i}>
                <InputText
                  style={{borderRadius: 5, borderColor: Color.labelgray}}
                  placeholder="Enter Place"
                  onChangeText={(text: string) => onChange(i, text)}
                  autoCapitalize="none"
                />
              </View>
            );
          })}

          <Button
            customStyle={{margin: 20, borderRadius: 20}}
            type="primary"
            fullWidth={true}
            isUpperCase={true}
            content={{id: 'Selesai', en: 'Done'}}
            onPress={() => onDD('tempArr')}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default Passenger;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  pd: {
    paddingHorizontal: 20,
  },
  bold: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 16,
  },
  regular: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 12,
    color: Color.brownGreyF,
  },
  center: {
    alignItems: 'center',
  },
});
