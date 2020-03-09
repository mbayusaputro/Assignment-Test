import React from 'react';
import {HighSafeArea} from '../../../../../components';
import Content from './Content';
import Footer from './Footer';
import {DetailRoomHotelProps as Props} from '../../../interface/types';
import Tabs from './Tabs';
import {TabContext} from '../components';
import moment from 'moment';

export default (props: Props) => {
  const {
    navigation: {goBack, navigate, getParam},
  } = props;
  const data = getParam('data'); // Data from Selected Room
  const payload = getParam('payload'); // Payload Form Hotel
  const room = getParam('room'); // Room Selected

  // Function
  const onBack = () => {
    goBack();
  };

  const navigating = (route: string) => {
    navigate(route, {data, payload, room});
  };

  let night =
    parseInt(moment(payload.stay.checkOut).format('DD')) -
    parseInt(moment(payload.stay.checkIn).format('DD'));

  // Main Render
  return (
    <HighSafeArea>
      <Content callback={onBack} />
      <TabContext.Provider
        value={{
          title: data.title,
          totalPrice: room.rates[0].net * night,
          price: room.rates[0].net,
          totalRoom: Array.from({length: night}),
        }}>
        <Tabs />
      </TabContext.Provider>
      <Footer
        price={room.rates[0].net * night}
        onSelectRoom={() => navigating('BookingFormHotel')}
      />
    </HighSafeArea>
  );
};
