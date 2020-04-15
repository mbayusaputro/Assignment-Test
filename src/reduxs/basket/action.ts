import {Dispatch} from 'redux';
import {BASKET, DELETE} from './types';

const del: string = 'delete';
const add: string = 'add';

const requestState = (type: string, data: object) => {
  if (type === del) {
    return {
      type: DELETE,
      data,
    };
  } else {
    return {
      type: BASKET,
      data,
    };
  }
};

// ====================== AGENT - TOP UP ======================
export const actionBasket = (data: object) => {
  return (dispatch: Dispatch) => {
    dispatch(requestState(add, data));
  };
};
export const actionDel = (data: Array<object>) => {
  return (dispatch: Dispatch) => {
    dispatch(requestState(del, data));
  };
};
// ====================== AGENT - TOP UP ======================
