import React, {useState, useEffect, useRef} from 'react';
import {HighSafeArea, Header} from '../../../../../components';
import Content from './Content';
import {ResultHotelProps as Props} from '../../../interface/types';
import SubHeader from './SubHeader';
import {Color} from '../../../../../constants/Color';
// import {FloatFilter} from '../components';
import {CardContext} from '../components/CardContext';
import Toast from 'react-native-easy-toast';

const titleLang = {id: 'Hotel Didekat Anda', en: 'Hotel Near You'};

export default (props: Props) => {
  // Props
  const {
    navigation: {getParam, navigate, goBack},
    loadingSearch,
    pathAsset,
    actionSearchHotel,
  } = props;
  const payload = getParam('payload');
  payload;

  // State
  const [data, setData] = useState([]);

  // Ref
  const toastRef: any = useRef();

  // UseEffect
  useEffect(() => {
    if (data.length === 0) {
      getData();
    }
  }, []);

  // Function
  const onBack = () => {
    goBack();
  };

  const getData = () => {
    actionSearchHotel(payload).then((res: any) => {
      res.type === 'SEARCH_HOTEL_SUCCESS'
        ? setData(res.data.hotels)
        : toastRef.current.show(res.message, 1500);
    });
  };

  const onSelectHotel = (item: any) => {
    navigate('DetailHotel', {
      selectedHotel: item,
      payload,
    });
  };

  // Main Render
  return (
    <HighSafeArea style={{backgroundColor: Color.backWhite}}>
      <Toast ref={toastRef} />
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
          {...props}
        />
      </CardContext.Provider>
      {/* <FloatFilter onPress={filter} /> */}
    </HighSafeArea>
  );
};
