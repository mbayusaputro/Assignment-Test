import axios from 'axios';

const URL: string = 'https://api.aeroaja.com';

// ====================== PROFILE ======================
export async function signIn(payload: object) {
  const uri: string = `${URL}/v1/customers/login`;
  const response = await axios
    .post(uri, payload)
    .then(res => res.data)
    .catch(err => err);
  return response;
}

export async function signUp(payload: object, applyType: string, type: string) {
  const uri: string = `${URL}/v1/customers/${applyType}?by=${type}`;
  const response = await axios
    .post(uri, payload)
    .then(res => res.data)
    .catch(err => err);
  return response;
}

export async function signUpLast(payload: object) {
  const uri: string = `${URL}/v1/customers/register`;
  const response = await axios
    .post(uri, payload)
    .then(res => res.data)
    .catch(err => err);
  return response;
}

export async function profile(token: string) {
  const uri: string = `${URL}/v1/customers/me`;
  const config = {
    headers: {Authorization: `bearer ${token}`},
  };
  const response = await axios
    .get(uri, config)
    .then(res => res.data)
    .catch(err => err);
  return response;
}

export async function updateProfile(token: string, payload: object) {
  const uri: string = `${URL}/v1/customers/me`;
  const config = {
    headers: {Authorization: `bearer ${token}`},
  };
  const response = await axios
    .put(uri, payload, config)
    .then(res => res.data)
    .catch(err => err);
  return response;
}

export async function changePasswordUser(token: string, payload: object) {
  const uri: string = `${URL}/v1/customers/change-password`;
  const config = {
    headers: {Authorization: `bearer ${token}`},
  };
  const response = await axios
    .post(uri, payload, config)
    .then(res => res.data)
    .catch(err => err);
  return response;
}
// ====================== PROFILE ======================

// ====================== MASTER ======================
export async function listCountry() {
  const uri: string = `${URL}/v1/master/country?limit=300`;
  const response = await axios
    .get(uri)
    .then(res => res.data)
    .catch(err => err);
  return response;
}
// ====================== MASTER ======================
