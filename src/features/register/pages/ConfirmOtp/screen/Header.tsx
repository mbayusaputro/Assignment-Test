import React from 'react';
import {Header} from '../../../../../components';

type HeaderProps = {
  callback: () => void;
};

export default (props: HeaderProps) => {
  const {callback} = props;
  return <Header callback={callback} title="Verification" />;
};
