import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {oc} from 'ts-optchain';
import Empty from './Empty';
import Card from '../components/Card';
import Loading from '../components/Loading';

type Props = {
  dataOrder: any;
  title: string;
  onSelected: (item: any) => void;
  loading: boolean;
  onRefresh: () => void;
};

const Active = (props: Props) => {
  // Props
  const {loading, dataOrder, onRefresh, onSelected} = props;

  // Flatlist Conf
  const keyExtractor = (__: any, index: number) => index.toString();

  const renderItem = ({item, index}: any) => {
    const imgPlane = oc(item).flight_data[0].flight_info.detail[0].img_src(
      'https://notfound',
    );
    const isReturn = oc(item).flight_data.length > 1 ? true : false;
    const type =
      item.flight_data !== null
        ? 'flight'
        : item.hotel_data !== null
        ? 'hotel'
        : 'tour';
    const data =
      item.flight_data !== null
        ? item.flight_data
        : item.hotel_data !== null
        ? item.hotel_data
        : item.tour_data;
    return (
      <Card
        key={index}
        imgPlane={imgPlane}
        data={data}
        id={oc(item).booking_code('')}
        price={oc(item).total_amount(0)}
        statusPayment={item.status}
        isReturn={isReturn}
        onPress={() => onSelected(item)}
        type={type}
      />
    );
  };
  const renderLoad = () => <Loading />;

  // Main Render
  return (
    <FlatList
      data={loading ? [] : dataOrder}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={onRefresh} />
      }
      ListEmptyComponent={loading ? renderLoad : <Empty {...props} />}
      style={{paddingVertical: 20}}
      contentContainerStyle={{paddingBottom: 250}}
      maxToRenderPerBatch={20}
      updateCellsBatchingPeriod={25}
      initialNumToRender={5}
      getItemLayout={(__, index) => ({
        length: 10,
        offset: 10 * index,
        index,
      })}
    />
  );
};

export default Active;
