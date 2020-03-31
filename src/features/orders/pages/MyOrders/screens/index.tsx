import React from 'react';
import moment from 'moment';
import _ from 'lodash';
import {HighSafeArea} from '../../../../../components';
import Header from '../components/Header';
import Tabs from '../components/Tabs';
import Active from './Active';
import Finished from './Finished';
import {OrderProps as Props} from '../../../interface/types';

const Orders = (props: Props) => {
  // State
  const [data, setData] = React.useState([]);

  // Props
  const {
    isLogin,
    token,
    actionFlightsOrderHistory,
    navigation: {navigate},
  } = props;

  // Life Cycle
  React.useEffect(() => {
    if (data.length === 0) {
      getDataOrder();
    }
  }, []);

  // Function
  const getDataOrder = () => {
    if (isLogin) {
      actionFlightsOrderHistory(token).then((res: any) => {
        if (res.type === 'FLIGHTORDERHISTORY_SUCCESS') {
          dataFlightOrder(res.data.data);
        } else {
          alert(res.message);
        }
      });
    }
  };

  // Get real data
  const dataFlightOrder = (item: Array<any>) => {
    const removeNullFlight =
      item.length > 0 ? _.reject(item, ['flight_data', null]) : item;
    const removeExpiredDate =
      removeNullFlight.length > 0
        ? _.reject(removeNullFlight, n => {
            return (
              moment(n.created_at).format('YYYY-MM-DD') >
              moment(new Date()).format('YYYY-MM-DD')
            );
          })
        : removeNullFlight;
    setData(removeExpiredDate);
  };

  // OnSelected Order to OrderDetail
  const onSelectOrder = (item: any) => {
    navigate('FlightOrderDetail', {itemSelected: item});
  };

  // Main Render
  return (
    <HighSafeArea>
      <Header title=" My Order" />
      <Tabs>
        <Active
          {...props}
          title="Active"
          // dataOrder={oc(dataFlightOrder(data))(new Array(0))}
          dataOrder={isLogin ? data : []}
          onSelected={(item: any) => onSelectOrder(item)}
          onRefresh={getDataOrder}
          loading={props.fetchOrder}
        />
        <Finished
          {...props}
          title="Finished"
          dataOrder={isLogin ? data : []}
          onSelected={(item: any) => onSelectOrder(item)}
          onRefresh={getDataOrder}
          loading={props.fetchOrder}
        />
      </Tabs>
    </HighSafeArea>
  );
};

export default Orders;
