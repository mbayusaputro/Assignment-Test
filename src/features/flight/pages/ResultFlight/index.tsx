import React, {useRef, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import Result from './screen/Result';
import {Header, SubHeader} from './components';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {actionGetFlight} from '../../../../reduxs/flight/action';
import {AppState} from '../../../../reduxs/reducers';
import {Props} from './types';
import {oc} from 'ts-optchain';
import Toast from 'react-native-easy-toast';

const ResultFlight = (props: Props) => {
  // Props
  const {
    navigation: {navigate, goBack, state},
    isLoading,
    actionGetFlight,
  } = props;
  const {params} = state;

  // State
  const [result, setResult]: any = useState([{}]);

  // Ref
  const toastRef: any = useRef();

  // UseEfeect
  useEffect(() => {
    getFlight();
  }, []);

  // Function
  const getFlight = () => {
    let payload: any = {
      command: 'SCHEDULE',
      product: 'FLIGHT',
      data: {
        departure_code: params.from.airport_code,
        arrival_code: params.to.airport_code,
        departure_date: params.date,
        adult: params.passenger.adult,
        seatClass: params.cabin_class,
      },
    };
    if (params.passenger.child > 0) {
      payload.data.child = params.passenger.child;
    }
    if (params.passenger.infant > 0) {
      payload.data.infant = params.passenger.infant;
    }
    if (params.date_return !== '') {
      payload.data.return_date = params.date_return;
    }
    actionGetFlight(payload).then((res: any) => {
      res.type === 'GET_FLIGHT_SUCCESS'
        ? setResult(res.data)
        : toastRef.current.show(res.message, 1500);
    });
  };

  const toSelect = (item: object) => {
    if (params.date_return !== '') {
      navigate('ResultFlightReturn', {
        departure_flight: item,
        params,
        result,
      });
    } else {
      navigate('BookingFlight', {
        departure_flight: item,
        return_flight: null,
        params,
      });
    }
  };

  const toDetail = (item: object) => {
    let data = params.date_return !== '' ? result : null;
    navigate('DetailFlight', {item, params, data, departure_flight: null});
  };

  // Main Render
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ededed'}}>
      <Toast ref={toastRef} />
      <Header
        goBack={() => goBack()}
        from={state.params.from.city_name}
        to={state.params.to.city_name}
      />
      <SubHeader
        date={state.params.date}
        adult={state.params.passenger.adult}
        child={state.params.passenger.child}
        infant={state.params.passenger.infant}
        cabin_class={state.params.cabin_class}
        total_flight={oc(result).departures(0).length}
        isLoading={isLoading}
        empty={isLoading ? false : result.depatures ? false : true}
      />
      <Result
        {...props}
        dataFlight={result.departures}
        handleSelectFlight={toSelect}
        handleDetailFlight={toDetail}
        isLoading={isLoading}
      />
    </SafeAreaView>
  );
};

const Default = (props: any) => {
  return <ResultFlight {...props} />;
};

const mapStateToProps = (state: AppState) => ({
  isLoading: state.flight.fetchResult,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionGetFlight: (payload: object) => actionGetFlight(payload),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Default);
