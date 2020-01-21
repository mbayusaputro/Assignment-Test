import React from 'react';
import {Header} from '../../../../../components';

type Props = {
  callback: () => void;
};

export default (props: Props) => {
  const {callback} = props;
  return <Header callback={callback} title="Settings" />;
};
