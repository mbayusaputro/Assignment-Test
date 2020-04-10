import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import {Color} from '../../../../../constants/Color';
import {Text, Button} from '../../../../../components';
import {ModalProps} from '../../../interface/types';
import Feather from 'react-native-vector-icons/Feather';
import {TextInputMask} from 'react-native-masked-text';

const Passenger = (props: ModalProps) => {
  const {isVisible, onDismiss, onSave, model} = props;

  const [isNumber, setNumber] = useState(0);
  const [arrayData, setArrayData] = useState([]);
  useEffect(() => {
    arrayGenerator();
  }, [isNumber]);

  const arrayGenerator = () => {
    let array = [];
    array.push({startDate: '', endDate: ''});
    setArrayData(arrayData.concat(array));
  };

  const onSetData = (index: any, field: any, value: any) => {
    let newArr = [...arrayData];
    if (field === 'start') {
      newArr[index].startDate = value;
      setArrayData(newArr);
    } else if (field === 'end') {
      newArr[index].endDate = value;
      setArrayData(newArr);
    }
  };

  return (
    <Modal
      isVisible={isVisible}
      backdropColor={Color.black}
      onBackdropPress={onDismiss}
      onBackButtonPress={onDismiss}
      style={styles.modalContainer}>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.modalHeaders}>
            <View style={styles.subHeaderLeft}>
              <Text
                style={styles.modalHeaderTitle}
                content={{id: 'Holiday Date', en: 'Holiday Date'}}
              />
            </View>
            <View style={styles.subHeaderRight}>
              <TouchableOpacity onPress={() => setNumber(isNumber + 1)}>
                <Feather name="plus" color={Color.berry} size={32} />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView>
            {arrayData.map((item, i) => {
              return (
                <View key={i} style={styles.containSection}>
                  <View style={styles.marginTop10}>
                    <Text style={styles.labelDate}>
                      Start Date (YYYY-MM-DD)
                    </Text>
                    <TextInputMask
                      style={styles.modalDateInput}
                      type={'datetime'}
                      options={{
                        format: 'YYYY-MM-DD',
                      }}
                      value={arrayData[i].startDate}
                      onChangeText={(text: any) => onSetData(i, 'start', text)}
                    />
                  </View>
                  <View style={[styles.marginTop10, styles.marginBottom10]}>
                    <Text style={styles.labelDate}>End Date (YYYY-MM-DD)</Text>
                    <TextInputMask
                      style={styles.modalDateInput}
                      type={'datetime'}
                      options={{
                        format: 'YYYY-MM-DD',
                      }}
                      value={arrayData[i].endDate}
                      onChangeText={(text: any) => onSetData(i, 'end', text)}
                    />
                  </View>
                </View>
              );
            })}
          </ScrollView>
          <Button
            customStyle={styles.modalButton}
            type="primary"
            fullWidth={true}
            isUpperCase={true}
            content={{id: 'Selesai', en: 'Done'}}
            onPress={() => onSave(arrayData, model)}
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
    height: Dimensions.get('window').height / 1.25,
  },
  pd: {
    paddingHorizontal: 0,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalHeaders: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: Color.lightgray,
    justifyContent: 'space-between',
  },
  modalHeaderTitle: {
    textAlign: 'center',
    paddingVertical: 10,
    fontFamily: 'NunitoSans-Bold',
    fontSize: 18,
  },
  modalTextInput: {
    borderRadius: 5,
    borderColor: Color.labelgray,
  },
  modalButton: {
    margin: 20,
    borderRadius: 20,
  },
  subHeaderLeft: {
    paddingLeft: 20,
  },
  subHeaderRight: {
    paddingRight: 20,
    paddingTop: 5,
  },
  containSection: {
    borderBottomColor: Color.berry,
    borderBottomWidth: 2,
    marginHorizontal: 20,
    marginBottom: 30,
  },
  marginBottom10: {
    marginBottom: 10,
  },
  marginTop10: {
    marginTop: 10,
  },
  modalDateInput: {
    borderRadius: 5,
    borderColor: Color.labelgray,
    borderWidth: 0.5,
    padding: 16,
  },
  labelDate: {
    fontWeight: 'bold',
  },
});
