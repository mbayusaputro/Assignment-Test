import React from 'react';
import {Header, SubHeader} from '../../../../../components';
import {View} from 'react-native';

type Props = {
  callback: () => void;
};

export default (props: Props) => {
  const {callback} = props;
  return (
    <View>
      <Header
        callback={callback}
        content={{id: 'Pesan Hotelmu', en: 'Booking Your Hotel'}}
      />
      <SubHeader />
    </View>
  );
};
