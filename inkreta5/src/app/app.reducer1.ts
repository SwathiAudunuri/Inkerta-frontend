import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
  } from '@ngrx/store';
  import { localStorageSync } from 'ngrx-store-localstorage';
import { loginReducer } from './reducers/login.reducer';
import { AuthState} from './state/auth.state';  
import { environment } from "../environments/environment";
  export interface State {
    user: AuthState
  }
  
  export const reducers: ActionReducerMap<State> = {
    user: loginReducer
  };
  
  const reducerKeys = ['user'];
  export function localStorageSyncReducer(reducer: ActionReducer<State>): ActionReducer<State> {
    return localStorageSync({keys: reducerKeys})(reducer);
  }
  
  // //console.log all actions
  export function debug(reducer: ActionReducer<State>): ActionReducer<State> {
    return function(state, action) {
      //console.log('state', state);
      //console.log('action', action);
  
      return reducer(state, action);
    };
  }
  
  
  export const metaReducers: MetaReducer<State>[] = !environment.production ? [debug, localStorageSyncReducer] : [localStorageSyncReducer];
  
  






