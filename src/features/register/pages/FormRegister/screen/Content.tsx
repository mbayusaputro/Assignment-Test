import React from 'react';
import TabForm from './TabForm';
import {TabProps} from '../../../interface/types';

export default (props: TabProps) => {
  const {
    onChangeEmail,
    onChangeMobile,
    onRegisterMobile,
    onRegisterEmail,
    onGoogle,
    onFacebook,
    validEmail,
  } = props;
  return (
    <TabForm
      onChangeEmail={onChangeEmail}
      onChangeMobile={onChangeMobile}
      onRegisterMobile={onRegisterMobile}
      onRegisterEmail={onRegisterEmail}
      onGoogle={onGoogle}
      onFacebook={onFacebook}
      validEmail={validEmail}
    />
  );
};
