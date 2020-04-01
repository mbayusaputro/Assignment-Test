import React from 'react';

export const PayMethodContext = React.createContext({
  // Global Info
  typeScreen: 'flight',
  price: 0,
  deposit: 0,

  // FLIGHT
  dataParam: null,
  dataItem: null,

  // Go To Payment Screen
  onPay: (__: string, _1: string) => {},
});
