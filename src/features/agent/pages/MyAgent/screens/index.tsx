import React, {useRef, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import Empty from './Empty';
import {Header} from '../../../../../components';
import {HolidayListContext} from '../components';
import Content from './Content';
import Toast from 'react-native-easy-toast';

const Orders = (props: any) => {
  // Props
  const {
    navigation: {goBack, navigate},
    isLoading,
    onAllPack,
    token,
  } = props;

  // State
  const [dataPopular, setDataPopular] = useState([]);

  // Ref
  const toastRef: any = useRef();

  // Lifecycle
  useEffect(() => {
    getData();
  }, []);

  // Function
  const getData = () => {
    if (dataPopular.length === 0) {
      onAllPack(token).then((res: any) => {
        res.type === 'ALLPACK_SUCCESS'
          ? setDataPopular(res.data.items)
          : toastRef.current.show(res.message, 1500);
      });
    }
  };

  const onDetail = (item: any) => {
    navigate('HolidayDetail', {id: item.id});
  };

  // Main Render
  return (
    <SafeAreaView style={{backgroundColor: '#f0f0f0', flex: 1}}>
      <Toast ref={toastRef} />
      <Header
        content={{id: 'Agen Saya', en: 'My Agent'}}
        callback={() => goBack()}
      />
      <HolidayListContext.Provider
        value={{
          navigate: () => navigate('CreatePackages'),
          data: dataPopular,
          onDetail: (item: any) => onDetail(item),
          fetchList: isLoading,
        }}>
        <Content />
      </HolidayListContext.Provider>
    </SafeAreaView>
  );
};

export default Orders;
