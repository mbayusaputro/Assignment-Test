import React from 'react';
import {Header} from '../../../../../components';
import {header_holidayList} from '../../../interface/strings';
import {HolidayListContext} from '../components';

export default () => {
  const {callback} = React.useContext(HolidayListContext);

  // Main
  return <Header content={header_holidayList} callback={callback} />;
};
