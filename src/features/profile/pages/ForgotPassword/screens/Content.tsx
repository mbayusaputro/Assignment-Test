import React from 'react';
import {TabForm} from '../components/';

type Props = {
  onChangeMobile: (text: string) => void;
  onSubmitMobile: () => void;
  onSubmitEmail: () => void;
  validEmail: boolean;
  onChangeEmail: (text: string) => void;
  loading: boolean;
};

export default (props: Props) => {
  return (
    <TabForm
      onChangeMobile={(text: string) => props.onChangeMobile(text)}
      onChangeEmail={(text: string) => props.onChangeEmail(text)}
      validEmail={props.validEmail}
      onSubmitMobile={props.onSubmitMobile}
      onSubmitEmail={props.onSubmitEmail}
      loading={props.loading}
    />
  );
};
