import React from 'react';
import {View, ScrollView} from 'react-native';
import Date from './Date';
import ListView from './ListView';
import Selected from './Selected';
import {ResultProps} from '../types';

const Result = (props: ResultProps) => {
  const {dataFlight, selected, handleDetailFlight, handleSelectFlight} = props;
  return (
    <View style={{flex: 1}}>
      <Selected
        departure={selected.detail[0].departure_city}
        arrival={selected.detail[selected.detail.length - 1].arrival_city}
        departure_time={selected.departure_time}
        arrival_time={selected.arrival_time}
        price={selected.price_adult}
        img={selected.detail[0].img_src}
        duration={selected.duration}
        transit={
          selected.stop.toLowerCase() === 'langsung' ? 'direct' : selected.stop
        }
        total_flight={dataFlight.length}
      />
      <ScrollView
        style={{marginHorizontal: 10}}
        showsVerticalScrollIndicator={false}>
        <Date />
        <View style={{marginVertical: 5}} />
        {dataFlight.map((item: any, i: number) => {
          return (
            <ListView
              key={i}
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
        })}
      </ScrollView>
    </View>
  );
};

export default Result;
