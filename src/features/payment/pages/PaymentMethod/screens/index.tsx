import React from 'react';
import {ScrollView} from 'react-native';
import {HighSafeArea, LoadingBook} from '../../../../../components';
import Method from './Method';
import {Header, SubHeader} from '../../../components';
import {PayMethodProps as Props} from '../../../interface/types';
import {PayMethodContext} from '../components/Context';

const Default = (props: Props) => {
  // Props
  const {
    navigation: {getParam, navigate},
  } = props;
  const typeScreen: string = getParam('type');
  const itemScreen = getParam('item');

  // State
  const [loading, setLoading] = React.useState(false);

  // GO TO PAYMENT SCREEN
  const doPayment = (method: string) => {
    setLoading(true);
    const {actionPaymentMidtrans} = props;
    const payload = {
      code: itemScreen.partner_trxid,
      product_id: typeScreen.toUpperCase(),
      enabled_payments: [method],
    };
    if (typeScreen === 'flight') {
      actionPaymentMidtrans(payload).then((res: any) => {
        setTimeout(() => {
          if (res.type === 'PAYMIDTRANS_SUCCESS') {
            setLoading(false);
            setTimeout(() => {
              navigate('PaymentWeb', {
                source: res.data.redirect_url,
                typeScreen,
                productID: itemScreen.partner_trxid,
              });
            }, 500);
          } else {
            setLoading(false);
            alert(res.message);
          }
        }, 500);
      });
    }
  };

  // Main
  return (
    <HighSafeArea style={{backgroundColor: '#f5f5f5', flex: 1}}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SubHeader id={itemScreen.partner_trxid} />
        <PayMethodContext.Provider
          value={{
            typeScreen,
            price: itemScreen.total,
            dataFlight: itemScreen.data,
            onPay: (item: any) => doPayment(item),
          }}>
          <Method />
        </PayMethodContext.Provider>
      </ScrollView>
      <LoadingBook type="flight" isVisible={loading} />
    </HighSafeArea>
  );
};

export default Default;
