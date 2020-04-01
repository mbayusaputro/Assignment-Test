export interface Action {
  type: string;
  payload: any;
  data: any;
}

export interface State {
  // FETCHING STATUS FOR PAYMENT MIDTRANS
  fetchPayment: boolean;

  // CHECK STATUS PAYMENT
  fetchCheckStatus: boolean;

  // CHECK STATUS TOP UP
  fetchCheckTopUp: boolean;
}

// PAYMENT -> MIDTRANS
export const PAYMENT = 'PAYMENT';
export const PAYMENT_SUCCESS = 'PAYMENT_SUCCESS';
export const PAYMENT_FAILED = 'PAYMIDTRANS_FAILED';

// PAYMENT -> CHECK PAYMENT MIDTRANS
export const CHECK_PAYMENT = 'CHECK_PAYMENT';
export const CHECK_PAYMENT_SUCCESS = 'CHECK_PAYMENT_SUCCESS';
export const CHECK_PAYMENT_FAILED = 'CHECK_PAYMENT_FAILED';

// PAYMENT -> CHECK PAYMENT TOP UP
export const CHECK_TOPUP = 'CHECK_TOPUP';
export const CHECK_TOPUP_SUCCESS = 'CHECK_TOPUP_SUCCESS';
export const CHECK_TOPUP_FAILED = 'CHECK_TOPUP_FAILED';
