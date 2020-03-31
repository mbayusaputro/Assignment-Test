import React, {useRef, useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {HighSafeArea, LoadingBook, Header} from '../../../../../components';
import Method from './Method';
import {SubHeader} from '../../../components';
import {PayMethodProps as Props} from '../../../interface/types';
import {PayMethodContext} from '../components/Context';
import Toast from 'react-native-easy-toast';

const Default = (props: Props) => {
  // Props
  const {
    navigation: {getParam, navigate, goBack},
    actionPayment,
    fetchPayment,
    token,
    getProfile,
  } = props;
  const typeScreen: string = getParam('type');
  const itemScreen = getParam('item');

  // Ref & State
  const toastRef: any = useRef();
  const [isDeposit, setDeposit] = useState(0);

  // Lifecycle
  useEffect(() => {
    getProfile(token).then((res: any) => {
      res.type === 'GETPROFILE_SUCCESS'
        ? setDeposit(res.data.balance)
        : toastRef.current.show(res.message, 1500);
    });
  }, []);

  // BACK SCREEN
  const onBack = () => {
    goBack();
  };

  // GO TO PAYMENT SCREEN
  const doPayment = (eg: string, method: string) => {
    const payload = {
      code: itemScreen.partner_trxid,
      product_id: typeScreen.toUpperCase(),
      enabled_payments: [eg],
      payment_method: method,
    };
    actionPayment(payload, token).then((res: any) => {
      setTimeout(() => {
        if (res.type === 'PAYMENT_SUCCESS') {
          method === 'DEPOSIT'
            ? navigate('ETicket')
            : navigate('PaymentWeb', {
                source: res.data.redirect_url,
                typeScreen,
                productID: itemScreen.partner_trxid,
              });
        } else {
          toastRef.current.show(res.message, 1500);
        }
      }, 1500);
    });
  };

  // Main
  return (
    <HighSafeArea style={{backgroundColor: '#f5f5f5', flex: 1}}>
      <Toast ref={toastRef} />
      <Header
        callback={onBack}
        content={{id: 'Pilih Metode Pembayaran', en: 'Select Payment Method'}}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SubHeader id={itemScreen.partner_trxid} />
        <PayMethodContext.Provider
          value={{
            typeScreen,
            price: itemScreen.total,
            dataParam: itemScreen.info,
            dataItem: itemScreen.data,
            onPay: (item: string, eg: string) => doPayment(item, eg),
            deposit: isDeposit,
          }}>
          <Method />
        </PayMethodContext.Provider>
      </ScrollView>
      <LoadingBook type="flight" isVisible={fetchPayment} />
    </HighSafeArea>
  );
};

export default Default;
