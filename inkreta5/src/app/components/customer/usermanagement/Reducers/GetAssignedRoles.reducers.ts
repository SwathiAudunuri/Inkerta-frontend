import { createReducer, on } from '@ngrx/store';
import { getAssignedRoles, getAssignedRolesInitialValue, getAssignedRolesSuccess } from '../Actions/GetAssignedRoles.actions';


const initialState:any = {
    roles:null,
    loading:false
}
const _GetAssignedRolesReducer = createReducer(
  initialState,
  on(getAssignedRolesInitialValue,(_state)=>({..._state,roles:null})),
  on(getAssignedRoles,(_state)=>({..._state,loading:true})),
  on(getAssignedRolesSuccess,(_state,roles)=>({..._state,roles:roles.roles,loading:false}))

);

export function GetAssignedRolesReducer(state:any, action:any) {
  return _GetAssignedRolesReducer(state, action);
}