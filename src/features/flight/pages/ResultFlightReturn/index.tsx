import React from 'react';
import {SafeAreaView} from 'react-native';
import {oc} from 'ts-optchain';
import Result from './screen/Result';
import {Header, SubHeader} from './components';
import {Props} from './types';

import {connect} from 'react-redux';
import {Dispatch, bindActionCreators} from 'redux';
import {actionDataFlight} from '../../../../reduxs/holiday/action';
import {getAddon} from '../../../../reduxs/holiday/selector';

const ResultFlight = (props: Props) => {
  const {
    navigation: {navigate, goBack, state},
  } = props;
  const {departure_flight, params, result} = state.params;

  const toSelect = (item: object) => {
    const {addon, onDataFlight} = props;
    const payload = {
      departure_flight,
      return_flight: item,
      params,
    };
    if (addon) {
      onDataFlight(payload);
      setTimeout(() => navigate('HolidayAddon'), 500);
    } else {
      navigate('BookingFlight', payload);
    }
  };

  const toDetail = (item: object) => {
    navigate('DetailFlight', {item, params, data: null, departure_flight});
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

const mapStateToProps = (state: any) => ({
  addon: getAddon(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onDataFlight: (data: object) => actionDataFlight(data),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ResultFlight);
