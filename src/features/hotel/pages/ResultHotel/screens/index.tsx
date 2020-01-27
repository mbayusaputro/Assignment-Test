import React from 'react';
import {HighSafeArea, Header} from '../../../../../components';
import Content from './Content';
import {ResultHotelProps as Props} from '../../../interface/types';
import SubHeader from './SubHeader';
import {Color} from '../../../../../constants/Color';
import {dataHotel} from '../components/data';
import {FloatFilter} from '../components';

const titleLang = {id: 'Hotel Didekat Anda', en: 'Hotel Near You'};

export default (props: Props) => {
  // State
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  // Function
  const onBack = () => {
    const {
      navigation: {goBack},
    } = props;
    goBack();
  };
  const filter = () => {
    alert('FIlter');
  };

  // Main Render
  return (
    <HighSafeArea style={{backgroundColor: Color.backWhite}}>
      <Header content={titleLang} callback={onBack} />
      <SubHeader date={new Date()} duration={7} room={2} />
      <Content dataHotel={dataHotel} loading={loading} />
      <FloatFilter onPress={filter} />
    </HighSafeArea>
  );
};
