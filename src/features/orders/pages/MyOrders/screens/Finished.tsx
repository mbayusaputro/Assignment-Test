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

const Finished = (props: Props) => {
  // Props
  const {loading, dataOrder, onRefresh, onSelected} = props;

  // Flatlist Conf
  const keyExtractor = (__: any, index: number) => index.toString();

  const renderItem = ({item, index}: any) => {
    const imgPlane = oc(item).flight_data[0].flight_info.detail[0].img_src(
      'https://notfound',
    );
    const departure = oc(
      item,
    ).flight_data[0].flight_info.detail[0].departure_city_name('Not found');
    const departureCode = oc(
      item,
    ).flight_data[0].flight_info.detail[0].departure_city('Not found');
    const arrival = oc(
      item,
    ).flight_data[0].flight_info.detail[0].arrival_city_name('Not found');
    const arrivalCode = oc(
      item,
    ).flight_data[0].flight_info.detail[0].arrival_city('Not found');
    const isReturn = oc(item).flight_data.length > 1 ? true : false;
    return (
      <Card
        key={index}
        purchase={true}
        imgPlane={imgPlane}
        departure={`${departure} (${departureCode})`}
        destination={`${arrival} (${arrivalCode})`}
        id={oc(item).booking_code('')}
        price={oc(item).total_amount(0)}
        statusPayment={item.status}
        isReturn={isReturn}
        onPress={() => onSelected(item)}
      />
    );
  };
  const renderLoad = () => <Loading />;

  // Main Render
  return (
    <FlatList
      data={loading ? [] : dataOrder.filter(obj => obj.status === 'PAID')}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={onRefresh} />
      }
      ListEmptyComponent={loading ? renderLoad : <Empty {...props} />}
      style={{paddingVertical: 20}}
      contentContainerStyle={{paddingBottom: 200}}
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

export default Finished;
