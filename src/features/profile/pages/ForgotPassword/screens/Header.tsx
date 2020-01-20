import React from 'react';
import {Header} from '../../../../../components';
import {HeaderProps as Props} from '../../../interface/types';

export default (props: Props) => {
  const {callback} = props;
  return <Header callback={callback} title="Forgot Password" />;
};
