import React from 'react';
import {useGlobalState} from '../../hooks/useGlobalState';
import {Redirect} from 'react-router';

export function withAuth(Cmp : any) {
  return function Auth(props : any) {
    const {state} = useGlobalState();

    // if the token is expired, run refresh token call
    const isTokenStale = state.userAuth.accessToken ? (Date.now() >= state.userAuth.expiresIn) : true;

    // // if there's no access token, redirect to auth page
    if (isTokenStale) {
      return <Redirect to="/d2io" />
    }

    return (
      <Cmp {...props} />
    );
  }
}
