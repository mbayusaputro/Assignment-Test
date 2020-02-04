import React from 'react';
import {Header} from '../../../../../components';
import {bookingSumaryLang} from '../../../interface/string';

type Props = {
  callback: () => void;
};

export default (props: Props) => (
  <Header callback={props.callback} content={bookingSumaryLang} />
);
