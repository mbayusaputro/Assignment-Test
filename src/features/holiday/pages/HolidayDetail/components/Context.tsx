import React from 'react';

export const HolidayDetailContext = React.createContext({
  title: '',
  by: '',
  selectedDate: 0,
  onSelectDate: (item: any) => {},
  dataDate: [],
  dataVisit: [],
  dataInclude: [],
  dataExclude: [],
  onItinerary: () => {},
});
