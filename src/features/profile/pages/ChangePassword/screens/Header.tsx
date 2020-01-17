import React from 'react';
import {View} from 'react-native';
import {Header, SubHeader} from '../../../../../components/Header';
import {HeaderProps as Props} from '../../../interface/types';

export default (props: Props) => {
  const {callback} = props;
  return (
    <View>
      <Header callback={callback} title="Password & Security" />
      <SubHeader />
    </View>
  );
};
