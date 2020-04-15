export interface Action {
  type: string;
  data: any;
}

export interface State {
  data: Array<object>;
}

// ====================== BASKET ======================
export const BASKET = 'BASKET';
export const DELETE = 'DELETE';
// ====================== BASKET ======================
