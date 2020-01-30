import React from 'react';
import {View, FlatList} from 'react-native';
import Date from './Date';
import ListView from './ListView';
import {ResultProps} from '../types';
import {Loading, LoadingDate} from '../components';

const Result = (props: ResultProps) => {
  const {dataFlight, handleDetailFlight, handleSelectFlight, isLoading} = props;
  return (
    <View style={{flex: 1, marginHorizontal: 10}}>
      <FlatList
        data={dataFlight}
        keyExtractor={(__: any, index: number) => index.toString()}
        renderItem={({item}) => {
          return (
            <ListView
              onPress={() => handleSelectFlight(item)}
              onDetail={() => handleDetailFlight(item)}
              departure={item.detail[0].departure_city}
              arrival={item.detail[item.detail.length - 1].arrival_city}
              departure_time={item.departure_time}
              arrival_time={item.arrival_time}
              price={item.price_adult}
              img={item.detail[0].img_src}
              duration={item.duration}
              transit={
                item.stop.toLowerCase() === 'langsung' ? 'direct' : item.stop
              }
            />
          );
        }}
        ListHeaderComponent={isLoading ? <LoadingDate /> : <Date />}
        ListHeaderComponentStyle={{marginBottom: 10}}
        ListEmptyComponent={<Loading />}
      />
    </View>
  );
};

export default Result;
