import React, {useState, useEffect, useRef} from 'react';
import {HighSafeArea, Header} from '../../../../../components';
import Content from './Content';
import {ResultHotelProps as Props} from '../../../interface/types';
import SubHeader from './SubHeader';
import {Color} from '../../../../../constants/Color';
// import {FloatFilter} from '../components';
import {CardContext} from '../components/CardContext';
import Toast from 'react-native-easy-toast';
import {AlertModal} from '../../../../../components';

const titleLang = {id: 'Hotel Didekat Anda', en: 'Hotel Near You'};

export default (props: Props) => {
  // Props
  const {
    navigation: {getParam, navigate, goBack},
    loadingSearch,
    pathAsset,
    actionSearchHotel,
    isLogin,
    isProfile,
  } = props;
  const payload = getParam('payload');
  payload;

  // State
  const [data, setData] = useState([]);
  const [isModal, setModal] = useState('');

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
    if (isLogin) {
      isProfile.isAgent
        ? navigate('DetailHotel', {
            selectedHotel: item,
            payload,
          })
        : setModal('agent');
    } else {
      setModal('login');
    }
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
      <AlertModal
        isVisible={isModal === 'login'}
        title={{id: 'Pemberitahuan', en: 'Information'}}
        desc={{
          id: 'Kamu harus Masuk atau Daftar untuk langkah selanjutnya.',
          en: 'You must Login or Register for the next step.',
        }}
        btnOk={{id: 'OK', en: 'OK'}}
        btnCancel={{id: 'Batal', en: 'Cancel'}}
        onOk={() => navigate('Tabs')}
        onDismiss={() => setModal('')}
      />
      <AlertModal
        isVisible={isModal === 'agent'}
        title={{id: 'Pemberitahuan', en: 'Information'}}
        desc={{
          id: 'Akunmu belum di aktifkan. Silahkan hubungi kami.',
          en: 'Your account has not been activated. Please contact us.',
        }}
        btnOk={{id: 'OK', en: 'OK'}}
        btnCancel={{id: 'Batal', en: 'Cancel'}}
        onOk={() => setModal('')}
        onDismiss={() => setModal('')}
      />
    </HighSafeArea>
  );
};
