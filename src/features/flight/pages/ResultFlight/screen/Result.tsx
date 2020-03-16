import React from 'react';
import {View, FlatList} from 'react-native';
import Date from './Date';
import ListView from './ListView';
import {ResultProps} from '../types';
import {Loading, LoadingDate, Empty} from '../components';
import {moneyFormat} from '../../../../../helpers/helpers';

const Result = (props: ResultProps) => {
  // Props
  const {dataFlight, handleDetailFlight, handleSelectFlight, isLoading} = props;

  // Item
  const renderItem = ({item, index}) => (
    <ListView
      key={index}
      onPress={() => handleSelectFlight(item)}
      onDetail={() => handleDetailFlight(item)}
      departure={item.detail[0].departure_city}
      arrival={item.detail[item.detail.length - 1].arrival_city}
      departure_time={item.departure_time}
      arrival_time={item.arrival_time}
      price={moneyFormat(item.price_adult)}
      img={item.detail[0].img_src}
      duration={item.duration}
      transit={item.stop.toLowerCase() === 'langsung' ? 'direct' : item.stop}
    />
  );

  // Main Render
  return (
    <View style={{flex: 1, marginHorizontal: 10}}>
      <FlatList
        data={
          dataFlight &&
          dataFlight.sort((a: any, b: any) => {
            return a.price_adult - b.price_adult;
          })
        }
        keyExtractor={(__: any, index: number) => index.toString()}
        renderItem={renderItem}
        ListHeaderComponent={
          isLoading ? <LoadingDate /> : dataFlight ? <Date /> : <View />
        }
        ListHeaderComponentStyle={{marginBottom: 10}}
        ListEmptyComponent={isLoading ? <Loading /> : <Empty {...props} />}
      />
    </View>
  );
};

export default Result;
