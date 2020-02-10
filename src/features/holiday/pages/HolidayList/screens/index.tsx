import React from 'react';
import {HighSafeArea} from '../../../../../components';
import {HolidayListContext} from '../components';
import Content from './Content';
import Header from './Header';
import {HolidayListProps as Props} from '../../../interface/types';
import {dataHoliday} from '../components/data';

export default (props: Props) => {
  // Function
  const onBack = () => {
    const {
      navigation: {goBack},
    } = props;
    goBack();
  };

  const onDetail = (item: any) => {
    const {
      navigation: {navigate},
    } = props;
    navigate('HolidayDetail', {item});
  };

  // Main Render
  return (
    <HighSafeArea>
      <HolidayListContext.Provider
        value={{
          callback: onBack,
          data: dataHoliday,
          onDetail: (item: any) => onDetail(item),
        }}>
        <Header />
        <Content />
      </HolidayListContext.Provider>
    </HighSafeArea>
  );
};
