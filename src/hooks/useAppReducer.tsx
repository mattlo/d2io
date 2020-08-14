import {useReducer} from 'react';
import {defaultState, TActionResponse} from '../state/globalContextState';

export function useAppReducer() {
  return useReducer((state : any, action : TActionResponse) => {
    const {name, ...data} = action;

    state[name] = data;

    return JSON.parse(JSON.stringify(state));
  }, defaultState);
}
