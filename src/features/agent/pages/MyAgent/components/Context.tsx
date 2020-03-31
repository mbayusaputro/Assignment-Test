import React from 'react';

export const HolidayListContext = React.createContext({
  data: [],
  onDetail: (item: any) => {},
  fetchList: false,
  navigate: () => {},
});
