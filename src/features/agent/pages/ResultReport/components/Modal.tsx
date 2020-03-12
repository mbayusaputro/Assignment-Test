import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {Color} from '../../../../../constants/Color';
import {Header, SubHeader} from '../../../../../components/Header';
import {ModalProps} from '../../../interface/types';
import FieldData from '../screens/FieldData';
import FieldDetail from '../screens/FieldDetail';
import styles from './styles';

const SearchBank = (props: ModalProps) => {
  // Props
  const {isVisible, onDismiss} = props;

  return (
    <View style={{flex: 1}}>
      <Modal
        isVisible={isVisible}
        backdropColor={Color.lightgray}
        backdropOpacity={1}
        onBackButtonPress={onDismiss}
        style={{marginHorizontal: 0}}>
        <SafeAreaView style={{flex: 1}}>
          <Header
            content={{id: 'Perincian Laporan Sales', en: 'Sales Report Detail'}}
            callback={onDismiss}
          />
          <SubHeader />
          <View style={[styles.container, {marginTop: -65.33}]}>
            {/* <FieldData
              name={'Bayu Saputro'}
              type={'Flight'}
              date={new Date()}
              amount={90000}
            />
            <FieldDetail
              label1={{ id: 'ID Pemesanan', en: 'Booking/Order ID' }}
              label2={{ id: 'Agen', en: 'Agent' }}
              label3={{ id: 'Jenis Pembayaran', en: 'Pay Type' }}
              // label4={{ id: 'Catatan', en: 'Note' }}
              sub1={'TYBBD'}
              sub2={'Bayu Saputro'}
              sub3={'BNI VA'}
            // sub4={'BNI Virtual Account'}
            /> */}
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default SearchBank;
