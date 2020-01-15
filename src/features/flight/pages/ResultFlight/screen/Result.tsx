import React from 'react';
import {View, ScrollView} from 'react-native';
import Date from './Date';
import ListView from './ListView';

type Props = {
  handleSelectFlight: (payload: object) => void;
  handleDetailFlight: (payload: object) => void;
  dataFlight: Array<object>;
};

const Result = (props: Props) => {
  return (
    <View style={{marginTop: 50, marginHorizontal: 20}}>
      <Date />
      <View style={{marginVertical: 5}} />
      <ScrollView>
        {props.dataFlight.map((item: any, i: number) => {
          return (
            <ListView
              key={i}
              onPress={() => props.handleSelectFlight(item)}
              onDetail={() => props.handleDetailFlight(item)}
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
