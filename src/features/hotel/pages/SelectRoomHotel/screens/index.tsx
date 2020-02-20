import React from 'react';
import _ from 'lodash';
import {HighSafeArea} from '../../../../../components';
import Content from './Content';
import Header from './Header';
import {SelectRoomHotelProps as Props} from '../../../interface/types';
import SubHeader from './SubHeader';
import {Color} from '../../../../../constants/Color';
import {dataFilter} from '../components/data';

export default (props: Props) => {
  const {
    navigation: {getParam},
  } = props;
  const dataHotel = getParam('selectedHotel');
  const payload = getParam('payload');

  // State
  const [statusSubHeader, setStatusSub] = React.useState(false);
  const [filter, setFilter] = React.useState('');

  // Function
  const onBack = () => {
    const {
      navigation: {goBack},
    } = props;
    goBack();
  };

  // Filter
  const selectFilter = (data: any, dataIndex: number) => {
    setFilter(data);
  };

  const navigating = (route: string, data?: any, room?: any) => {
    const {
      navigation: {navigate},
    } = props;
    navigate(route, {
      data,
      payload,
      room,
    });
  };

  const onBook = (room: any) => {
    const {addon, actionDataHotel} = props;
    const dataBook = {
      title: dataHotel.name,
      price: dataHotel.minRate,
      room,
    };
    if (addon) {
      actionDataHotel(dataBook);
      setTimeout(() => navigating('HolidayAddon'), 500);
    } else {
      navigating('BookingFormHotel', dataBook, room);
    }
  };

  // Main Render
  return (
    <HighSafeArea style={{backgroundColor: Color.backWhite}}>
      <Header
        callback={statusSubHeader ? () => setStatusSub(false) : onBack}
        onRight={statusSubHeader ? () => setStatusSub(false) : null}
      />
      <SubHeader
        checkIn={new Date()}
        checkOut={new Date()}
        statusSubHeader={statusSubHeader}
        setStatus={() => setStatusSub(true)}
      />
      <Content
        dataFilter={dataFilter}
        dataRoom={dataHotel.rooms}
        detailHotel={dataHotel.detail}
        path={props.pathAsset}
        selectedFilter={filter}
        selectFilter={(item: any, index: number) => selectFilter(item, index)}
        onDetailRoom={() => navigating('DetailRoomHotel')}
        onBookRoom={(item: any) => onBook(item)}
      />
    </HighSafeArea>
  );
};
