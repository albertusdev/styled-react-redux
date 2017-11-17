import defaults from 'superagent-defaults';
import * as apiUrl from '../constants/apiUrl';

export const request = defaults();

export async function login(email, password) {
  return request.post();
}
