import { createReducer, on } from '@ngrx/store';
import { getProfileDetails, getProfileDetailsInitialValue, getProfileDetailsSuccess } from '../Actions/GetProfileDetails.actions';


const initialState:any = {
    details:null,
    loading:false
}
const _GetProfileDetailsReducer = createReducer(
  initialState,
  on(getProfileDetailsInitialValue,(_state)=>({..._state,details:null})),
  on(getProfileDetails,(_state)=>({..._state,loading:true})),
  on(getProfileDetailsSuccess,(_state,details)=>({..._state,details:details.details,loading:false}))

);

export function GetProfileDetailsReducer(state:any, action:any) {
  return _GetProfileDetailsReducer(state, action);
}