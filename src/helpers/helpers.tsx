import React from 'react';
import numeral from 'numeral';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import normalize from '../constants/normalize';

export const moneyFormat = (money: number) => {
  const result = numeral(money)
    .format('0,0')
    .replace(/,/g, '.');
  return result;
};

export const starLength = (length: number) => {
  const arrays = [];
  for (let i = 1; i <= length; i++) {
    arrays.push(
      <Icon
        key={i}
        style={{
          width: normalize(15),
          color: '#ea6520',
        }}
        size={15}
        name="star"
      />,
    );
  }
  return arrays;
};
