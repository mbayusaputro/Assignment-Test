import React from 'react';
import _ from 'lodash';
import {oc} from 'ts-optchain';
import {HighSafeArea} from '../../../components';
import Header from '../components/Header';
import Tabs from '../components/Tabs';
import Active from './Active';
import Finished from './Finished';
import {OrderProps as Props} from '../interface/types';
import moment from 'moment';

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

  // Main Render
  return (
    <HighSafeArea>
      <Header title=" My Order" />
      <Tabs>
        <Active
          {...props}
          title="Active"
          // dataOrder={oc(props.dataFlightOrder).data(new Array(0))}
          dataOrder={dataFlightOrder}
          onSelected={(item: any) => alert(JSON.stringify(item))}
        />
        <Finished {...props} title="Finished" />
      </Tabs>
      {/* <Text isUpperCase={false} content={{id: 'Orders', en: 'Orders'}} /> */}
    </HighSafeArea>
  );
};

export default Orders;
