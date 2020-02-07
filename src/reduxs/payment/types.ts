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
}

// PAYMENT -> MIDTRANS
export const PAYMIDTRANS = 'PAYMIDTRANS';
export const PAYMIDTRANS_SUCCESS = 'PAYMIDTRANS_SUCCESS';
export const PAYMIDTRANS_FAILED = 'PAYMIDTRANS_FAILED';

// PAYMENT -> CHECK PAYMENT MIDTRANS
export const CHECK_PAYMENT = 'CHECK_PAYMENT';
export const CHECK_PAYMENT_SUCCESS = 'CHECK_PAYMENT_SUCCESS';
export const CHECK_PAYMENT_FAILED = 'CHECK_PAYMENT_FAILED';