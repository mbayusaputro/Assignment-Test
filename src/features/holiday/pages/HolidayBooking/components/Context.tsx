import React from 'react';

export const HolidayBookingContext = React.createContext({
  // Detail
  dataDetail: null,
  // Login
  onLogin: () => {},

  // Contact
  onShowContact: () => {},
  dataContact: null,

  // Guest
  sameContact: false,
  onChangeSame: () => {},
  totalGuest: 1,
  guestArr: [],
  onShowGuest: (item: any, type: string) => {},

  // Price
  price: 0,

  // BOook
  onBook: () => {},
});
