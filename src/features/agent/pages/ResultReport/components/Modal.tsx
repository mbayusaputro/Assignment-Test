import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Modal from 'react-native-modal';
import {Color} from '../../../../../constants/Color';
import {Header, SubHeader} from '../../../../../components/Header';
import {ModalProps} from '../../../interface/types';
import FieldData from '../screens/FieldData';
import FieldDetail from '../screens/FieldDetail';
import styles from './styles';
import {oc} from 'ts-optchain';
import {moneyFormat} from '../../../../../helpers/helpers';
import moment from 'moment';
import {Text, Card} from '../../../../../components';

const SearchBank = (props: ModalProps) => {
  // Props
  const {isVisible, onDismiss, detail, model} = props;

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
            <FieldData
              name={oc(detail).customer_name('-')}
              type={oc(detail).product_code('-')}
              date={oc(detail).order_date(new Date())}
              amount={
                model === 'sales'
                  ? oc(detail).total_amount(0)
                  : oc(detail).amount(0)
              }
            />
            {model === 'sales' ? (
              <FieldDetail
                label1={{id: 'ID Pemesanan', en: 'Booking/Order ID'}}
                label2={{id: 'Agen', en: 'Agent'}}
                label3={{id: 'Jenis Pembayaran', en: 'Pay Type'}}
                sub1={oc(detail).booking_code('-')}
                sub2={oc(detail).issuer_name('-')}
                sub3={oc(detail).payment_method('-')}
              />
            ) : (
              <FieldDetail
                label1={{id: 'Tanggal & Waktu', en: 'Date & Time'}}
                label2={{id: 'Referensi', en: 'Reference'}}
                label3={{id: 'Jumlah', en: 'Amount'}}
                label4={{id: 'Catatan', en: 'Note'}}
                sub1={moment(oc(detail).transaction_date(new Date())).format(
                  'DD-MMM-YY - HH:mm',
                )}
                sub2={oc(detail).transaction_id('-')}
                sub3={'Rp' + moneyFormat(oc(detail).amount(0))}
                sub4={oc(detail).description('-')}
              />
            )}
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default SearchBank;
