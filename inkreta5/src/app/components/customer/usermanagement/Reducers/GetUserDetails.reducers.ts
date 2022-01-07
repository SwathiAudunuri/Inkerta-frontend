import { createReducer, on } from '@ngrx/store';
import { getUserDetails, getUserDetailsInitialValue, getUserDetailsSuccess } from '../Actions/GetUserDetails.actions';
import { getUsers, getUsersInitialValue, getUsersSuccess } from '../Actions/GetUsers.actions';

const initialState:any = {
    details:null,
  loading:false
}
const _GetUserDetailsReducer = createReducer(
  initialState,
  on(getUserDetailsInitialValue,(_state)=>({..._state,details:null})),
  on(getUserDetails,(_state)=>({..._state,loading:true})),
  on(getUserDetailsSuccess,(_state,details)=>({..._state,details:details.details,loading:false}))

);

export function GetUserDetailsReducer(state:any, action:any) {
  return _GetUserDetailsReducer(state, action);
}