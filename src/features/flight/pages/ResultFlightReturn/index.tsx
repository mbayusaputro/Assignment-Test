import React from 'react';
import {SafeAreaView} from 'react-native';
import Result from './screen/Result';
import {Header, SubHeader} from './components';
import {Props} from './types';
import {oc} from 'ts-optchain';

const ResultFlight = (props: Props) => {
  const {
    navigation: {navigate, goBack, state},
  } = props;
  const {departure_flight, params, result} = state.params;

  React.useEffect(() => {
    console.log(state);
  }, []);

  const toSelect = (item: object) => {
    navigate('BookingFlight', {
      departure_flight: departure_flight,
      return_flight: item,
      params: params,
    });
  };

  const toDetail = (item: object) => {
    navigate('DetailFlight', item);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ededed'}}>
      <Header
        goBack={() => goBack()}
        from={params.to.city_name}
        to={params.from.city_name}
      />
      <SubHeader
        date={params.date_return}
        adult={params.passenger.adult}
        child={params.passenger.child}
        infant={params.passenger.infant}
        class={params.cabin_class}
        total_flight={oc(result).returns(0).length}
      />
      <Result
        selected={departure_flight}
        dataFlight={result.returns}
        handleSelectFlight={(item: object) => toSelect(item)}
        handleDetailFlight={(item: object) => toDetail(item)}
      />
    </SafeAreaView>
  );
};

export default ResultFlight;
