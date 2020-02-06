import React from 'react';

export const PayMethodContext = React.createContext({
  // Global Info
  typeScreen: 'flight',
  price: 0,

  // FLIGHT
  dataFlight: null,
});
