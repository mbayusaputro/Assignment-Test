import React from 'react';

export const HomeContext = React.createContext({
  onNavigate: (item: any) => {},
  onLogin: () => {},
  onDetail: (item: any) => {},
  dataPopular: [],
});
