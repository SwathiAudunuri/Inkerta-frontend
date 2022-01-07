import { createReducer, on } from '@ngrx/store';
import { getProfileDetails, getProfileDetailsInitialValue, getProfileDetailsSuccess } from '../Actions/GetProfileDetails.actions';
import {Additional_Details,Additional_DetailsInitialValue,Additional_DetailsSuccess} from '../Actions/Additonal_details.actions'

const initialState:any = {
    details:null,
    loading:false
}
const _Additiona_DetailsReducer = createReducer(
  initialState,
  on(Additional_DetailsInitialValue,(_state)=>({..._state,details:null})),
  on(Additional_Details,(_state)=>({..._state,loading:true})),
  on(Additional_DetailsSuccess,(_state,details)=>({..._state,details:details.details,loading:false}))

);

export function Additiona_DetailsReducer(state:any, action:any) {
  return _Additiona_DetailsReducer(state, action);
}