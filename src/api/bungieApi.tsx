import axios from 'axios';
import qs from 'query-string';
import {API_CLIENT_ID, API_ROOT_PATH, API_TOKEN, AUTH_URL} from '../constants';
import {IUserAuth} from '../state/actions/userToken';

export function httpBungie(route : string) {
  return API_ROOT_PATH + route;
}

export function bungieRequestHeaders(userAuth ?: IUserAuth) {
  if (userAuth) {
    const isTokenStale = userAuth.accessToken ? (Date.now() >= userAuth.expiresIn) : true;

    // immediately redirect if the token is stale
    if (isTokenStale) {
      window.location.href = '/d2io';
    }

    return {
      'x-api-key': API_TOKEN,
      Authorization: `Bearer ${userAuth.accessToken}`
    };
  }

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

export function getMembershipsForCurrentUser(userAuth : IUserAuth) {
  return axios({
    url: `${API_ROOT_PATH}/User/GetMembershipsForCurrentUser`,
    headers: bungieRequestHeaders(userAuth)
  });
}

export function getProfile(userAuth : IUserAuth) {
  return axios({
    url: `https://www.bungie.net/Platform/Destiny2/${userAuth.membershipType}/Profile/${userAuth.membershipId}`,
    params: {
      components: '100,102,103,200,201,202,205,300,301,304,305,306,307,800,308,310,309,900,1100'
    },
    headers: bungieRequestHeaders(userAuth)
  });
}

export function getManifest() {
  return axios({
    url: `${API_ROOT_PATH}/Destiny2/Manifest`,
    headers: bungieRequestHeaders()
  });
}

