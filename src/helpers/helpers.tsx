import React from 'react';
import {Imaging} from '../components';
import normalize from '../constants/normalize';
import numeral from 'numeral';

export const validateEmailFormat = (email: string) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const moneyFormat = (money: number) => {
  const result = numeral(money)
    .format('0,0')
    .replace(/,/g, '.');
  return result;
};

export const eurToIdr = (money: number) => {
  const rateIdr = 15500;
  const result = moneyFormat(rateIdr * money);
  return result;
};

export const generateDate = (begin: number, end: number) => {
  let array = [];
  for (let i = begin; i <= end; i++) {
    array.push((i < 10 ? '0' : '') + i);
  }
  return array;
};

export const generateNumber = (begin: number, end: number) => {
  let array = [];
  for (let i = begin; i <= end; i++) {
    array.push(i);
  }
  return array;
};

export const getFirstNameLastname = (string: string, callback: any) => {
  let fullName = string.split(' ');
  let firstName = fullName[0];
  let lastName = '';
  fullName.map((data, index) => {
    if (index > 0) {
      lastName += data + ' ';
    }
    return lastName;
  });
  let response = {
    firstName,
    lastName,
  };
  callback(response);
};

export const starLength = (length: number) => {
  const arrays = [];
  for (let i = 1; i <= length; i++) {
    arrays.push(
      <Imaging
        key={i}
        source={require('../assets/icons/stars.png')}
        resizeMode="stretch"
        style={{
          width: normalize(20),
          height: normalize(20),
          marginRight: 5,
        }}
      />,
    );
  }
  return arrays;
};

export function groupingRoomImages(images: any, rooms = [], code = '') {
  let pathResult = '';
  let _images = images.sort((obj1: any, obj2: any) =>
    obj2.roomCode < obj1.roomCode ? 1 : -1,
  );
  let dataGrouping = [];
  if (rooms.length > 0) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < rooms.length; i++) {
      let _path = '';
      // tslint:disable-next-line: prefer-for-of
      for (let j = 0; j < _images.length; j++) {
        if (rooms[i].code && _images[j].roomCode) {
          if (
            rooms[i].code.toLowerCase() === _images[j].roomCode.toLowerCase()
          ) {
            _path = _images[j].path;
            break;
          }
        }
      }
      rooms[i].path = _path;
      dataGrouping.push(rooms[i]);
    }
    dataGrouping.map(item => {
      if (code.toLowerCase() === item.code.toLowerCase()) {
        pathResult = item.path;
      }
    });
    return pathResult;
  }
}

export const generateValue = (begin: number, end: number) => {
  let valueAmount = [];
  for (let i = begin; i < end; i++) {
    valueAmount.push(500000 * (i + 1));
  }
  return valueAmount;
};
