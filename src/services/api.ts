import {Platform} from 'react-native';
import axios from 'axios';

const URL: string = 'https://apidev.asitaaja.com/v1/';
const TOUR_DEV: string =
  'https://apigateway-packagetour-dev.asitaaja.com/api/v1/';
const TOUR_PROD: string = 'https://node-tourpackage.asitaaja.com/api/v1/';
const BT_DEV: string =
  'https://apigateway-tourpackage-dev.asitaaja.com/api/v1/';
const BT_PROD: string = 'https://node-booking.asitaaja.com/api/v1/';

const appSource = Platform.OS === 'ios' ? 'APP_IOS' : 'APP_AND';

// ====================== PROFILE ======================
export async function signIn(payload: object) {
  const uri: string = `${URL}customers/login`;
  const response = await axios
    .post(uri, payload)
    .then(res => res.data)
    .catch(err => (err.response ? err.response.data : err));
  return response;
}

export async function signUp(payload: object, applyType: string, type: string) {
  const uri: string = `${URL}customers/${applyType}?by=${type}`;
  const response = await axios
    .post(uri, payload)
    .then(res => res.data)
    .catch(err => (err.response ? err.response.data : err));
  return response;
}

export async function signUpLast(payload: object) {
  const uri: string = `${URL}customers/register`;
  const response = await axios
    .post(uri, payload)
    .then(res => res.data)
    .catch(err => (err.response ? err.response.data : err));
  return response;
}

export async function profile(token: string) {
  const uri: string = `${URL}customers/me`;
  const config = {
    headers: {Authorization: `bearer ${token}`},
  };
  const response = await axios
    .get(uri, config)
    .then(res => res.data)
    .catch(err => (err.response ? err.response.data : err));
  return response;
}

export async function updateProfile(token: string, payload: object) {
  const uri: string = `${URL}customers/me`;
  const config = {
    headers: {Authorization: `bearer ${token}`},
  };
  const response = await axios
    .put(uri, payload, config)
    .then(res => res.data)
    .catch(err => (err.response ? err.response.data : err));
  return response;
}

export async function changePasswordUser(token: string, payload: object) {
  const uri: string = `${URL}customers/change-password`;
  const config = {
    headers: {Authorization: `bearer ${token}`},
  };
  const response = await axios
    .post(uri, payload, config)
    .then(res => res.data)
    .catch(err => (err.response ? err.response.data : err));
  return response;
}

export async function forgotPassword(type: string, payload: object) {
  const uri: string = `${URL}customers/forgot-${type}`;
  const response = await axios
    .post(uri, payload)
    .then(res => res.data)
    .catch(err => (err.response ? err.response.data : err));
  return response;
}
// ====================== PROFILE ======================

// ====================== MASTER ======================
export async function listCountry() {
  const uri: string = `${URL}master/country?limit=300`;
  const response = await axios
    .get(uri)
    .then(res => res.data)
    .catch(err => (err.response ? err.response.data : err));
  return response;
}
// ====================== MASTER ======================

// ====================== ORDER HISTORY ======================
export async function orderHistoryFlight(token: string) {
  const uri: string = `${URL}gateway/flights/orders-history`;
  const config = {
    headers: {Authorization: `bearer ${token}`},
  };
  const response = await axios
    .get(uri, config)
    .then(res => res.data)
    .catch(err => (err.response ? err.response.data : err));
  return response;
}
// ====================== ORDER HISTORY ======================

// ====================== FLIGHT ======================
export async function getFlight(payload: object) {
  const uri: string = `${URL}gateway/flights`;
  const config = {
    headers: {'X-Platform-Source': appSource, 'X-SAI-Source': 'ASITAAJA'},
  };
  const response = await axios
    .post(uri, payload, config)
    .then(res => res.data)
    .catch(err => (err.response ? err.response.data : err));
  return response;
}

export async function bookingFlight(payload: object, token: string) {
  const uri: string = `${URL}gateway/flights/booking`;
  const config = {
    headers: {
      'X-Platform-Source': appSource,
      'X-SAI-Source': 'ASITAAJA',
      Authorization: `bearer ${token}`,
    },
  };
  const response = await axios
    .post(uri, payload, config)
    .then(res => res.data)
    .catch(err => (err.response ? err.response.data : err));
  return response;
}
// ====================== FLIGHT ======================

// ====================== HOTEL ======================
export async function listDestinationHotel(payload: object) {
  // const uri: string = `${HOTEL_BEDS}/search-destination`;
  const uri: string = `${URL}gateway/traveloka/destination`;
  const response = await axios
    .post(uri, payload)
    .then(res => res.data)
    .catch(err => (err.response ? err.response.data : err));
  return response;
}

export async function searchHotel(payload: object) {
  // const uri: string = `https://api-gateway-hotel-dev.aeroaja.com/apihotel/search`;
  const uri: string = `${URL}gateway/traveloka/search-hotel`;
  const response = await axios
    .post(uri, payload)
    .then(res => res.data)
    .catch(err => (err.response ? err.response.data : err));
  return response;
}

export async function bookingHotel(payload: object) {
  // const beds = `${URL}gateway/beds`;
  // const uri: string = `${beds}/booking`;
  const uri: string = `${URL}gateway/traveloka/booking`;
  const config = {
    headers: {
      'X-Platform-Source': appSource,
      'X-SAI-Source': 'ASITAAJA',
    },
  };
  const response = await axios
    .post(uri, payload, config)
    .then(res => res.data)
    .catch(err => (err.response ? err.response.data : err));
  return response;
}
// ====================== HOTEL ======================

// ====================== HOLIDAY ======================
export async function holidayList(token: string) {
  const uri: string = `${TOUR_DEV}tours?sort=-id`;
  // const uri: string = `${URL}tours?type=popular`;
  const config = {
    headers: {Authorization: `bearer ${token}`},
  };
  const response = await axios
    .get(uri, config)
    .then(res => res.data)
    .catch(err => (err.response ? err.response.data : err));
  return response;
}
export async function holidayDetail(token: string, id: number) {
  const uri: string = `${TOUR_DEV}tour-populars/${id}`;
  // const uri: string = `${URL}tours/${id}`;
  const config = {
    headers: {Authorization: `bearer ${token}`},
  };
  const response = await axios
    .get(uri, config)
    .then(res => res.data)
    .catch(err => (err.response ? err.response.data : err));
  return response;
}
export const holidayBooking = (payload: object, token: string) => {
  const uri: string = `${BT_DEV}travel-packages`;
  // const uri: string = `${URL}tours/${id}/booking`;
  const config = {
    headers: {
      'X-Platform-Source': appSource,
      'X-SAI-Source': 'ASITAAJA',
      Authorization: `bearer ${token}`,
    },
  };
  const response = axios
    .post(uri, payload, config)
    .then(res => res.data)
    .catch(err => (err.response ? err.response.data : err));
  return response;
};
// ====================== HOLIDAY ======================

// ====================== PAYMENT ======================
export async function paymentGlobal(payload: object, token: string) {
  const uri: string = `${URL}payment`;
  const config = {
    headers: {
      'X-Platform-Source': appSource,
      'X-SAI-Source': 'ASITAAJA',
      Authorization: `bearer ${token}`,
    },
  };
  const response = await axios
    .post(uri, payload, config)
    .then(res => res.data)
    .catch(err => (err.response ? err.response.data : err));
  return response;
}

export async function checkPaymentGlobal(trx_id: string, type: string) {
  const uri: string = `${URL}payment/${trx_id}?type=${type}`;
  const config = {
    headers: {'X-Platform-Source': appSource, 'X-SAI-Source': 'ASITAAJA'},
  };
  const response = await axios
    .get(uri, config)
    .then(res => res.data)
    .catch(err => (err.response ? err.response.data : err));
  return response;
}
// ====================== PAYMENT ======================

// ====================== AGENT ======================
export async function topUp(payload: object, token: string) {
  const uri: string = `${URL}payment/agents/top-up`;
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
      'X-Platform-Source': appSource,
      'X-SAI-Source': 'ASITAAJA',
    },
  };
  const response = await axios
    .post(uri, payload, config)
    .then(res => res.data)
    .catch(err => (err.response ? err.response.data : err));
  return response;
}
export async function withdrawRequest(payload: object, token: string) {
  const uri: string = `${URL}customers/withdrawal`;
  const config = {
    headers: {Authorization: `bearer ${token}`},
  };
  const response = await axios
    .post(uri, payload, config)
    .then(res => res.data)
    .catch(err => (err.response ? err.response.data : err));
  return response;
}
export async function checkTopUp(id: string, token: string) {
  const uri: string = `${URL}payment/agents/top-up?q=${id}`;
  const config = {
    headers: {Authorization: `bearer ${token}`},
  };
  const response = await axios
    .get(uri, config)
    .then(res => res.data)
    .catch(err => (err.response ? err.response.data : err));
  return response;
}
export async function allPack(token: string) {
  const uri: string = `${TOUR_DEV}/tours/list/authenticated`;
  const config = {
    headers: {Authorization: `bearer ${token}`},
  };
  const response = await axios
    .get(uri, config)
    .then(res => res.data)
    .catch(err => (err.response ? err.response.data : err));
  return response;
}
// ====================== AGENT ======================
// ====================== AGENT - REPORT ======================
export async function reportAgent(token: string, params: any) {
  const uri: string = `${URL}customers/${params.type}?end_date=${params.end}&page=${params.page}&start_date=${params.start}`;
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
      'X-Platform-Source': appSource,
      'X-SAI-Source': 'ASITAAJA',
    },
  };
  const response = await axios
    .get(uri, config)
    .then(res => res.data)
    .catch(err => (err.response ? err.response.data : err));
  return response;
}
// ====================== AGENT - REPORT ======================
