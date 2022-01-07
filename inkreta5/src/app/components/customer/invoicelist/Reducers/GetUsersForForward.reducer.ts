import { createReducer, on } from '@ngrx/store';
import {getUsersForwardnull,getUsersForward,getUsersForwardSucess} from '../Actions/GetUsersForForward.actions'

// const initialState :ReadonlyArray<any>=[]
const initialState:any={
    result:[],
  loading:false
}
const _getUsersForwardReducer = createReducer(
  initialState,
  on(getUsersForwardnull,(_state)=>({..._state,result:null})),
  on(getUsersForward,(_state,invoices)=>({..._state,loading:true})),
  on(getUsersForwardSucess,(_state,result)=>({..._state,result:result,loading:false}))

);

export function getUsersForwardReducer(state:any, action:any) {
  return _getUsersForwardReducer(state, action);
}