import { createReducer, on } from '@ngrx/store';
import { getpartners, getpartnersInitialvalues, getpartnersSuccess } from '../Actions/GetPartners.actions';

// const initialState :ReadonlyArray<any>=[]
const initialState:any={
    partners:[],
  loading:false
}
const _GetPartnersReducer = createReducer(
  initialState,
  on(getpartnersInitialvalues,(_state)=>({..._state,partners:null})),
  on(getpartners,(_state)=>({..._state,loading:true})),
  on(getpartnersSuccess,(_state,partners)=>({..._state,partners:partners.partners,loading:false}))
);

export function GetPartnersReducer(state:any, action:any) {
  return _GetPartnersReducer(state, action);
}