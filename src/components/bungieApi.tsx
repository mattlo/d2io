import axios from 'axios';
import qs from 'query-string';
import {API_CLIENT_ID, API_ROOT_PATH, API_TOKEN} from '../constants';

export function httpBungie(route : string) {
  return API_ROOT_PATH + route;
}

export function bungieRequestHeaders() {
  return {
    'x-api-key': API_TOKEN
  };
}

export function getAuthToken(code : string) {
  return axios({
    method: 'POST',
    headers: {
      ...bungieRequestHeaders(),
      'content-type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify({
      code,
      grant_type: 'authorization_code',
      client_id: API_CLIENT_ID
    }),
    url: httpBungie('/app/oauth/token/')
  });
}

// code = bda900afab7391b4e203f1d9968aaf63
export default function getMembershipsForCurrentUser() {
  return axios({
    url: 'https://www.bungie.net/Platform/Destiny2/User/GetMembershipsForCurrentUser',
    headers: {
      ...bungieRequestHeaders()
    }
  })
}
