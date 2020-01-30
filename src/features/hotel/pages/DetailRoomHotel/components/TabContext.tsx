import React from 'react';

export const TabContext = React.createContext({
  title: '',
  totalPrice: 0,
  price: 0,
  totalRoom: Array.from({length: 0}),
});
