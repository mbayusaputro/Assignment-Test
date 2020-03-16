import React, {useRef, useEffect, useState} from 'react';
import {HighSafeArea} from '../../../../../components';
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
  } = props;

  // State
  const [dataPopular, setDataPopular] = useState([]);

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
    navigate('HolidayDetail', {id: item.id});
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
    </HighSafeArea>
  );
};
