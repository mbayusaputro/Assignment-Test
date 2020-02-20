import {createContext} from 'react';

const Context = createContext({
  dataDetail: null,
  dataHotel: null,
  dataFlight: null,
  onSelectHotel: () => {},
  onSelectFlight: () => {},
  onClearHotel: () => {},
  onClearFlight: () => {},
});

export default Context;
