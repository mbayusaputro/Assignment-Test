import React, {useRef, useEffect, useState} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {Header} from '../../../../../components';
import {HolidayListContext} from '../components';
import Content from './Content';
import Toast from 'react-native-easy-toast';
import Feather from 'react-native-vector-icons/Feather';

const Orders = (props: any) => {
  const {
    navigation: {goBack, navigate},
    isLoading,
    onAllPack,
    token,
  } = props;

  const [dataPopular, setDataPopular] = useState([]);

  const toastRef: any = useRef();

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

  return (
    <SafeAreaView style={{backgroundColor: '#f0f0f0', flex: 1}}>
      <Toast ref={toastRef} />
      <Header
        content={{id: 'Agen Saya', en: 'My Agent'}}
        callback={() => goBack()}
        right={
          <TouchableOpacity
            onPress={() => navigate('CreatePackages')}
            style={{paddingTop: 5}}>
            <Feather name="plus" color={'white'} size={32} />
          </TouchableOpacity>
        }
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
