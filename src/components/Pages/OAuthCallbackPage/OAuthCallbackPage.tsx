import React, {useEffect} from 'react';
import qs from 'query-string';
import {Redirect, RouteComponentProps, useHistory} from 'react-router';
import {getMembershipsForCurrentUser, getAuthToken} from '../../../api/bungieApi';
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
          const auth = setUserAuth(
            res.data.access_token,
            res.data.expires_in
          );

          console.log(res, auth);

          return getMembershipsForCurrentUser(auth)
            .then((membershipRes) => {
              if (!membershipRes.data.Response.destinyMemberships[0].membershipId) {
                throw new Error('failed to get membership id');
              }

              return dispatch(setUserAuth(
                res.data.access_token,
                res.data.expires_in,
                membershipRes.data.Response.destinyMemberships[0].membershipId,
                membershipRes.data.Response.destinyMemberships[0].membershipType
              ));
            });
        });
    }
  }, [dispatch, location, history]);

  const isTokenStale = (Date.now() > state.userAuth.expiresIn);

  if (!isTokenStale && state.userAuth.membershipId) {
    return <Redirect to="/d2io/optimizer" />;
  }

  return (
    <div>
      authenticating...
    </div>
  );
}
