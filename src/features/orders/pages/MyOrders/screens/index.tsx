import React from 'react';
import moment from 'moment';
import {oc} from 'ts-optchain';
import _ from 'lodash';
import {HighSafeArea} from '../../../../../components';
import Header from '../components/Header';
import Tabs from '../components/Tabs';
import Active from './Active';
import Finished from './Finished';
import {OrderProps as Props} from '../../../interface/types';

const Orders = (props: Props) => {
  // State
  const [statusOrder, setStatusOrder] = React.useState(false);

  // Life Cycle
  React.useEffect(() => {
    getDataOrder();
  });

  // Function
  const getDataOrder = () => {
    const {isLogin, token, actionFlightsOrderHistory} = props;
    if (isLogin) {
      if (!statusOrder) {
        actionFlightsOrderHistory(token);
        setStatusOrder(true);
      }
    }
  };

  // Get real data
  const dataFlightOrder = () => {
    const dataOrder: Array<any> = oc(props.dataFlightOrder).data(new Array(0));
    const removeNullFlight =
      dataOrder.length > 0
        ? _.reject(dataOrder, ['flight_data', null])
        : dataOrder;
    const removeExpiredDate =
      removeNullFlight.length > 0
        ? _.remove(removeNullFlight, n => {
            return (
              moment(n.created_at).format('YYYY-MM-DD') >
              moment(new Date()).format('YYYY-MM-DD')
            );
          })
        : removeNullFlight;
    return removeExpiredDate;
  };

  // OnSelected Order to OrderDetail
  const onSelectOrder = (item: any) => {
    const {
      navigation: {navigate},
    } = props;
    navigate('FlightOrderDetail', {itemSelected: item});
    console.log(item);
  };

  // Main Render
  return (
    <HighSafeArea>
      <Header title=" My Order" />
      <Tabs>
        <Active
          {...props}
          title="Active"
          dataOrder={oc(props.dataFlightOrder).data(new Array(0))}
          // dataOrder={dataFlightOrder}
          onSelected={(item: any) => onSelectOrder(item)}
        />
        <Finished {...props} title="Finished" />
      </Tabs>
    </HighSafeArea>
  );
};

export default Orders;
