import React, {useRef, useEffect, useState} from 'react';
import {HighSafeArea, AlertModal} from '../../../../../components';
import {HolidayListContext} from '../components';
import Content from './Content';
import Header from './Header';
import {HolidayListProps as Props} from '../../../interface/types';
import Toast from 'react-native-easy-toast';

export default (props: Props) => {
  // Props
  const {
    navigation: {goBack, navigate},
    isLogin,
    token,
    actionHolidayList,
    isProfile,
  } = props;

  // State
  const [dataPopular, setDataPopular] = useState([]);
  const [isModal, setModal] = useState('');

  // Lifecycle
  useEffect(() => {
    getData();
  }, []);

  // Ref
  const toastRef: any = useRef();

  // Function
  const onBack = () => {
    goBack();
  };

  const getData = () => {
    if (dataPopular.length === 0) {
      actionHolidayList(isLogin ? token : null).then((res: any) => {
        res.type === 'HOLIDAYLIST_SUCCESS'
          ? setDataPopular(res.data.items)
          : toastRef.current.show(res.message, 1500);
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
    <HighSafeArea>
      <Toast ref={toastRef} />
      <HolidayListContext.Provider
        value={{
          callback: onBack,
          data: dataPopular,
          onDetail: (item: any) => onDetail(item),
          fetchList: props.fetchList,
        }}>
        <Header />
        <Content />
      </HolidayListContext.Provider>
      <AlertModal
        isVisible={isModal === 'login'}
        title={{id: 'Pemberitahuan', en: 'Information'}}
        desc={{
          id: 'Kamu harus Masuk atau Daftar untuk langkah selanjutnya.',
          en: 'You must Login or Register for the next step.',
        }}
        btnOk={{id: 'OK', en: 'OK'}}
        btnCancel={{id: 'Batal', en: 'Cancel'}}
        onOk={() => goBack()}
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
