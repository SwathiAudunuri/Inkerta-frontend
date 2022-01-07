import { createReducer, on } from '@ngrx/store';import { getpartnersDetails, getpartnersDetailsInitialvalues, getpartnersDetailsSuccess } from '../Actions/GetPartnerDetails.actions';


// const initialState :ReadonlyArray<any>=[]
const initialState:any={
    details:[],
  loading:false
}
const _GetPartnerDetailsReducer = createReducer(
  initialState,
  on(getpartnersDetailsInitialvalues,(_state)=>({..._state,details:null})),
  on(getpartnersDetails,(_state)=>({..._state,details:null,loading:true})),
  on(getpartnersDetailsSuccess,(_state,details)=>({..._state,details:details.details,loading:false}))
);

export function GetPartnerDetailsReducer(state:any, action:any) {
  return _GetPartnerDetailsReducer(state, action);
}