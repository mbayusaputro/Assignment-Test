import React from 'react';

const ModalContext = React.createContext({
  countryID: 100,
  isVisible: false,
});

export default ModalContext;
