import React from 'react';
import {Header} from '../../../../../components';

type Props = {
  callback: () => void;
};

const lang = {id: 'Ringkasan Pemesanan', en: 'Booking Summary'};

export default (props: Props) => (
  <Header callback={props.callback} content={lang} />
);
