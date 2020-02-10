import React from 'react';

export const HolidayListContext = React.createContext({
  callback: () => {},
  data: [],
  onDetail: (item: any) => {},
});
