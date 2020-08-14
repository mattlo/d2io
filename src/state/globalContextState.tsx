import {createContext} from 'react';
import setUserAuth from './actions/userToken';
import {setProfile} from './actions/profile';
import {setComponentContent, setManifest} from './actions/manifest';

export type TActionResponse = {name : string, [key : string] : any};
export type TAction = (...args : any[]) => TActionResponse;

// register all actions here
export const actionList : TAction[] = [
  setUserAuth,
  setProfile,
  setManifest,
  setComponentContent
];

export const defaultState = actionList.reduce((obj, action) => {
  const {name, ...state} = action();

  // validate key
  if (!name) {
    throw new Error('action must return a `type` value');
  }

  return {
    ...obj,
    // invoke default state
    [name]: state
  }
}, {});

export const AppStateContext = createContext(defaultState);
