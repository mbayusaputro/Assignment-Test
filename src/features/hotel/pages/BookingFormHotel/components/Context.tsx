import React from 'react';

export const ContentContext = React.createContext({
  // Detail
  guest: 0,
  room: 0,
  night: 0,
  title: '',
  checkin: '',
  checkout: '',

  // Login
  onLogin: () => {},
  isLogin: false,

  // Contact
  onShowContact: () => {},
  dataContact: null,

  // Guest
  sameContact: false,
  onChangeSame: () => {},
  totalGuest: 1,
  guestArr: [],
  onShowGuest: (item: any) => {},

  // Price
  price: 0,

  // BOook
  onBook: () => {},
});
