import React from 'react';
import {Header, SubHeader} from '../../../../../components';
import {View} from 'react-native';
import {headerLang} from '../../../interface/string';

type Props = {
  callback: () => void;
};

export default (props: Props) => {
  const {callback} = props;
  return (
    <View>
      <Header callback={callback} content={headerLang} />
      <SubHeader />
    </View>
  );
};
