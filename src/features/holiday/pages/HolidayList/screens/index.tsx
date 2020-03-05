import React from 'react';
import {HighSafeArea} from '../../../../../components';
import {HolidayListContext} from '../components';
import Content from './Content';
import Header from './Header';
import {HolidayListProps as Props} from '../../../interface/types';

export default (props: Props) => {
  // State
  const [dataPopular, setDataPopular] = React.useState([]);

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
    const {isLogin, token, actionHolidayList} = props;
    if (dataPopular.length === 0) {
      actionHolidayList(isLogin ? token : null).then((res: any) => {
        if (res.type === 'HOLIDAYLIST_SUCCESS') {
          setDataPopular(res.data);
        } else {
          alert(res.message);
        }
      });
    }
  };

  const onDetail = (item: any) => {
    const {
      navigation: {navigate},
    } = props;
    navigate('HolidayDetail', {id: item.tour_id});
  };

  // Main Render
  return (
    <HighSafeArea>
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
