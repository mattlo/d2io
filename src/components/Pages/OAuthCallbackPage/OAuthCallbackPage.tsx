import React, {useEffect, useState} from 'react';
import qs from 'query-string';
import {RouteComponentProps, useHistory} from 'react-router';
import {getAuthToken} from '../../bungieApi';
import setUserAuth from '../../../state/actions/userToken';
import {useGlobalState} from '../../../hooks/useGlobalState';

export default function OAuthCallbackPage({location} : RouteComponentProps) {
  const {dispatch} = useGlobalState();
  const history = useHistory();

  useEffect(() => {
    const query : {code ?: string} = qs.parse(location.search);

    if (query.code) {
      getAuthToken(query.code || '')
        .then((res) => {
          dispatch(setUserAuth(
            res.data.access_token,
            res.data.expires_in,
            res.data.membership_id
          ));

          history.push('/d2io/optimizer')
        })
    }
  }, [dispatch, location, history]);

  return (
    <div>
      authenticating...
    </div>
  );
}
