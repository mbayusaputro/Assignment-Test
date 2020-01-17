import React from 'react';

export type Content = {en: string; id: string};

export const LanguageContext = React.createContext({
  language: 'id',
});
