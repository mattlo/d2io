export interface IUserAuth {
  name : string,
  accessToken : string,
  membershipId : string;
  membershipType : string;
  expiresIn : number;
}

export default function setUserAuth(
  accessToken = '',
  expiresIn = 0,
  membershipId = '',
  membershipType = ''
) : IUserAuth {
  const state = {
    name: 'userAuth',
    accessToken: accessToken,
    membershipId: membershipId,
    expiresIn: Date.now() + (expiresIn * 1000),
    membershipType : ''
  };

  if (accessToken) {
    window.localStorage.setItem('userAuth', JSON.stringify(state));
  }

  // if no arguments provided, recall cached token
  if (!accessToken) {
    const cachedUserAuth = JSON.parse(window.localStorage.getItem('userAuth') || '{}');

    return {
      ...state,
      ...cachedUserAuth
    };
  }

  return state;
}
