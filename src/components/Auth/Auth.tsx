import React from 'react';
import {useGlobalState} from '../../hooks/useGlobalState';
import {AUTH_URL} from '../../constants';

export function withAuth(Cmp : any) {
  return function Auth(props : any) {
    const {state} = useGlobalState();

    // if the token is expired, run refresh token call
    const isTokenStale = state.userAuth.accessToken ? (Date.now() >= state.userAuth.expiresIn) : true;

    // // if there's no access token, redirect to auth page
    if (isTokenStale) {
      window.location.href = AUTH_URL;
      return <div />;
    }

    return (
      <Cmp {...props} />
    );
  }
}
