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
