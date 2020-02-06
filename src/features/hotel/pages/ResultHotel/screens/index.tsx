import React from 'react';
import {HighSafeArea, Header} from '../../../../../components';
import Content from './Content';
import {ResultHotelProps as Props} from '../../../interface/types';
import SubHeader from './SubHeader';
import {Color} from '../../../../../constants/Color';
import {FloatFilter} from '../components';
import {CardContext} from '../components/CardContext';

const titleLang = {id: 'Hotel Didekat Anda', en: 'Hotel Near You'};

export default (props: Props) => {
  const {
    navigation: {getParam},
    loadingSearch,
    pathAsset,
  } = props;
  const payload = getParam('payload');

  // State
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  // Function
  const onBack = () => {
    const {
      navigation: {goBack},
    } = props;
    goBack();
  };

  const getData = () => {
    const {actionSearchHotel} = props;
    actionSearchHotel(payload).then((res: any) => {
      res.type === 'SEARCH_HOTEL_SUCCESS'
        ? setData(res.data.hotels)
        : alert(res.message);
    });
  };

  const filter = () => {
    alert('FIlter');
  };

  const onSelectHotel = (item: any) => {
    const {
      navigation: {navigate},
    } = props;
    navigate('DetailHotel', {
      selectedHotel: item,
      payload,
    });
  };

  // Main Render
  return (
    <HighSafeArea style={{backgroundColor: Color.backWhite}}>
      <Header content={titleLang} callback={onBack} />
      <SubHeader
        date={payload.stay.checkIn}
        duration={getParam('checkOut')}
        room={payload.occupancies[0].rooms}
      />
      <CardContext.Provider
        value={{
          pathAsset,
        }}>
        <Content
          dataHotel={data}
          loading={loadingSearch}
          onSelectHotel={(item: any) => onSelectHotel(item)}
        />
      </CardContext.Provider>
      <FloatFilter onPress={filter} />
    </HighSafeArea>
  );
};
