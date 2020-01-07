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
// ====================== PROFILE ======================
