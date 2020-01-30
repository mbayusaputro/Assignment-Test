import React from 'react';
import _ from 'lodash';
import {HighSafeArea} from '../../../../../components';
import Content from './Content';
import Header from './Header';
import {SelectRoomHotelProps as Props} from '../../../interface/types';
import SubHeader from './SubHeader';
import {Color} from '../../../../../constants/Color';
import {dataFilter, dataRoom} from '../components/data';

export default (props: Props) => {
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
        dataRoom={dataRoom}
        selectFilter={(item: any, index: number) => selectFilter(item, index)}
        selectedFilter={filter}
      />
    </HighSafeArea>
  );
};
