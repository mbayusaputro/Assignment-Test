import React from 'react';
import {ScrollView} from 'react-native';
import {oc} from 'ts-optchain';
import {HighSafeArea} from '../../../../../components';
import Content from './Content';
import {FlightOrderDetailProps as Props} from '../../../interface/types';
import Header from './Header';
import SubHeader from './SubHeader';
import {styles, ButtonFooter} from '../components';

export default (props: Props) => {
  const {
    navigation: {getParam, goBack, navigate},
  } = props;
  const itemSelected = getParam('itemSelected');

  // Function
  const onBack = () => {
    goBack();
  };

  const onNavigate = () => {
    // Check Screen Flight, Hotel or Tour
    let typeScreen =
      itemSelected.flight_data !== null
        ? 'flight'
        : itemSelected.hotel_data !== null
        ? 'hotel'
        : 'tour';

    if (itemSelected.status === 'BOOKED') {
      let itemFlight = itemSelected.flight_data[0].flight_info.detail;
      let payload = {
        data: {
          amount: 0,
          discount: '0',
          tax: '0',
          details: [
            {
              adult_price: itemSelected.price,
              arrival_code: itemFlight[itemFlight.length - 1].arrival_city,
              arrival_date:
                itemSelected.flight_data[0].flight_info.arrival_date,
              arrival_name: itemFlight[itemFlight.length - 1].airlines_name,
              arrival_time:
                itemSelected.flight_data[0].flight_info.arrival_time,
              booking_code: itemSelected.partner_trx_id,
              booking_expire: '',
              date: itemSelected.created_at,
              departure_code: itemFlight[0].departure_city,
              departure_date:
                itemSelected.flight_data[0].flight_info.departure_date,
              departure_name: itemFlight[0].airlines_name,
              departure_time:
                itemSelected.flight_data[0].flight_info.departure_time,
              name: itemSelected.flight_data[0].flight_info.name,
              schedule_id: itemSelected.flight_data[0].flight_info.schedule_id,
            },
          ],
        },
        partner_trxid: itemSelected.partner_trx_id,
        total: itemSelected.total_amount,
      };
      navigate('PaymentMethod', {type: typeScreen, item: payload});
    } else {
      let payload = {
        source: itemSelected.payment_url,
        typeScreen: typeScreen,
        productID: itemSelected.partner_trx_id,
      };
      navigate('PaymentWeb', payload);
    }
  };

  // Main Render
  const departure = oc(
    itemSelected,
  ).flight_data[0].flight_info.detail[0].departure_city_name('Not Found');
  const destination = oc(
    itemSelected,
  ).flight_data[0].flight_info.detail[0].arrival_city_name('Not Found');
  return (
    <HighSafeArea style={styles.container}>
      <Header callback={onBack} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {itemSelected.status === 'PAID' ? (
          <SubHeader code={itemSelected.booking_code} />
        ) : (
          <SubHeader departure={departure} destination={destination} />
        )}
        <Content dataSelected={itemSelected} />
        {itemSelected.status === 'PAID' ? (
          []
        ) : (
          <ButtonFooter onPress={() => onNavigate()} />
        )}
      </ScrollView>
    </HighSafeArea>
  );
};
