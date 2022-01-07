import { createReducer, on } from '@ngrx/store';
import { getUsers, getUsersInitialValue, getUsersSuccess } from '../Actions/GetUsers.actions';

const initialState:any = {
  users:null,
  loading:false
}
const _GetUsersReducer = createReducer(
  initialState,
  on(getUsersInitialValue,(_state)=>({..._state,users:null})),
  on(getUsers,(_state)=>({..._state,loading:true})),
  on(getUsersSuccess,(_state,users)=>({..._state,users:users.users,loading:false}))

);

export function GetUsersReducer(state:any, action:any) {
  return _GetUsersReducer(state, action);
}