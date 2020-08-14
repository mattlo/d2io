import {useContext} from 'react';
import {AppStateContext} from '../state/globalContextState';

export function useGlobalState() {
  return useContext(AppStateContext) as any;
}
