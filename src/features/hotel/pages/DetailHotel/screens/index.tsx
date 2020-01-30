import React from 'react';
import {oc} from 'ts-optchain';
import {HighSafeArea} from '../../../../../components';
import Content from './Content';
import Footer from './Footer';
import {DetailHotelProps as Props} from '../../../interface/types';

export default (props: Props) => {
  const {
    navigation: {getParam},
  } = props;
  const selectedHotel = getParam('selectedHotel');

  // Function
  const onBack = () => {
    const {
      navigation: {goBack},
    } = props;
    goBack();
  };

  const onSelectHotel = () => {
    const {
      navigation: {navigate},
    } = props;
    navigate('SelectRoomHotel');
  };

  // Main Render
  return (
    <HighSafeArea>
      <Content
        titleHotel={oc(selectedHotel).title('')}
        rate={oc(selectedHotel).rate(0)}
        photo={oc(selectedHotel).photo('https://erno404.png')}
        callback={onBack}
      />
      <Footer
        price={oc(selectedHotel).price(0)}
        onSelectHotel={onSelectHotel}
      />
    </HighSafeArea>
  );
};
