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

  // Contact
  onShowContact: () => {},

  // Guest
  totalGuest: 1,
  guestArr: [],
  onShowGuest: (item: any) => {},

  // Price
  price: 0,
});
