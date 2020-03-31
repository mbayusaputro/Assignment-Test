import React, {useState, useEffect, useRef} from 'react';
import {HighSafeArea, Header, AlertModal} from '../../../components';
import {styles, HomeContext} from '../components';
import Content from './Content';
import {Props} from '../types';
import Login from './Login';
import PopularHoliday from './PopularHoliday';
import {ScrollView, ActivityIndicator} from 'react-native';
import Toast from 'react-native-easy-toast';

export default (props: Props) => {
  // State
  const [popularHoliday, setPopularHoliday] = useState([]);
  const [isModal, setModal] = useState('');

  // Ref
  const toastRef: any = useRef();

  useEffect(() => {
    loadPopular();
    actionAddon(false);
    actionDataHoliday(null);
    actionDataHotel(null);
    actionDataFlight(null);
  }, []);

  // Props
  const {
    isLogin,
    fetchList,
    actionAddon,
    actionDataFlight,
    actionDataHoliday,
    actionDataHotel,
    navigation: {navigate},
    token,
    actionHolidayList,
    isProfile,
  } = props;

  // Function
  const onNavigate = (route: string) => {
    navigate(route);
  };

  const loadPopular = () => {
    if (popularHoliday.length === 0) {
      actionHolidayList(isLogin ? token : null).then((res: any) => {
        if (res.type === 'HOLIDAYLIST_SUCCESS') {
          setPopularHoliday(res.data.items);
        } else {
          toastRef.current.show(res.message, 1500);
        }
      });
    }
  };

  const onDetail = (item: any) => {
    if (isLogin) {
      isProfile.isAgent
        ? navigate('HolidayDetail', {id: item.id})
        : setModal('agent');
    } else {
      setModal('login');
    }
  };

  // Main Render
  return (
    <HighSafeArea style={styles.container}>
      <Toast ref={toastRef} />
      <Header homeIcon={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeContext.Provider
          value={{
            onNavigate: (item: any) => onNavigate(item),
            onLogin: () => onNavigate('Account'),
            onDetail: (item: any) => onDetail(item),
            dataPopular: popularHoliday,
          }}>
          <Content />
          {!isLogin && <Login />}
          {!fetchList ? <PopularHoliday /> : <ActivityIndicator />}
        </HomeContext.Provider>
      </ScrollView>
      <AlertModal
        isVisible={isModal === 'login'}
        title={{id: 'Pemberitahuan', en: 'Information'}}
        desc={{
          id: 'Kamu harus Masuk atau Daftar untuk langkah selanjutnya.',
          en: 'You must Login or Register for the next step.',
        }}
        btnOk={{id: 'OK', en: 'OK'}}
        btnCancel={{id: 'Batal', en: 'Cancel'}}
        onOk={() => setModal('')}
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
