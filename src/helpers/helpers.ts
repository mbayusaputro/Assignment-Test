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
    firstName: firstName,
    lastName: lastName,
  };
  callback(response);
};
