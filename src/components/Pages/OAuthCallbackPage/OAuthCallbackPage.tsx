import React, {useEffect} from 'react';
import qs from 'query-string';
import {RouteComponentProps, useHistory} from 'react-router';
import getMembershipsForCurrentUser, {getAuthToken} from '../../bungieApi';
import setUserAuth from '../../../state/actions/userToken';
import {useGlobalState} from '../../../hooks/useGlobalState';

export default function OAuthCallbackPage({location} : RouteComponentProps) {
  const {dispatch, state} = useGlobalState();
  const history = useHistory();

  useEffect(() => {
    const query : {code ?: string} = qs.parse(location.search);

    if (query.code) {
      getAuthToken(query.code || '')
        .then((res) => {
          return Promise.all([
            res.data,
            getMembershipsForCurrentUser(state.userAuth)
          ]);
        })
        .then(([res, membershipRes]) => {
          dispatch(setUserAuth(
            res.data.access_token,
            res.data.expires_in,
            membershipRes.data.Response.destinyMemberships[0].membershipId,
            membershipRes.data.Response.destinyMemberships[0].membershipType
          ));

          history.push('/d2io/optimizer');
        });
    }
  }, [dispatch, location, history]);

  return (
    <div>
      authenticating...
    </div>
  );
}
