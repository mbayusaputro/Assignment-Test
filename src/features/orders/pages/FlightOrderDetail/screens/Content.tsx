import React from 'react';
import {View} from 'react-native';
import {oc} from 'ts-optchain';
import {
  InfoFlight,
  styles,
  Passenger,
  Policy,
  Price,
  Total,
} from '../components';

type Props = {
  dataSelected: any;
};

export default (props: Props) => {
  // Function

  // Data Transform
  const dataFlight: Array<any> = oc(props.dataSelected).flight_data([]);
  const dataPassenger: Array<any> = oc(props.dataSelected).travelers([]);

  // Main Render
  return (
    <View style={styles.content}>
      {dataFlight.map((item: any, index: number) => (
        <InfoFlight
          key={index}
          title={
            index === 0
              ? {id: 'Pesawat Berangkat', en: 'Departure Flight'}
              : {id: 'Pesawat Pulang', en: 'Return Flight'}
          }
          data={item}
        />
      ))}
      <Passenger
        data={dataPassenger}
        baggage={oc(dataFlight[0]).flight_info.detail[0].check_in_baggage(0)}
      />
      <Policy />
      <Price data={dataFlight} return={dataFlight.length > 1 ? true : false} />
      {props.dataSelected.status === 'PAID' ? [] : <Total data={dataFlight} />}
    </View>
  );
};
