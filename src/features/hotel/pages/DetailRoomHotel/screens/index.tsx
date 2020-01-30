import React from 'react';
import {HighSafeArea} from '../../../../../components';
import Content from './Content';
import Footer from './Footer';
import {DetailRoomHotelProps as Props} from '../../../interface/types';
import Tabs from './Tabs';
import {TabContext} from '../components';

export default (props: Props) => {
  // Function
  const onBack = () => {
    const {
      navigation: {goBack},
    } = props;
    goBack();
  };

  // Main Render
  return (
    <HighSafeArea>
      <Content callback={onBack} />
      <TabContext.Provider
        value={{
          title: 'Premiere Deluxe',
          totalPrice: 3515400,
          price: 500000,
          totalRoom: Array.from({length: 17}),
        }}>
        <Tabs />
      </TabContext.Provider>
      <Footer price={3515400} onSelectRoom={() => alert('Pressed')} />
    </HighSafeArea>
  );
};
