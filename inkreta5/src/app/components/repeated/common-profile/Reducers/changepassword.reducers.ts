import { createReducer, on } from '@ngrx/store';
import { ChangePassword, ChangePasswordInitialValue, ChangePasswordSuccess } from '../Actions/changepassword.actions';


const initialState:any = {
  url:"",
  result:null,
  data:null,
  loading:false
}
const _changepasswordReducer = createReducer(
  initialState,
  on(ChangePasswordInitialValue,(_state)=>({..._state,result:null,url:null,data:null})),
  on(ChangePassword,(_state,value)=>({..._state,url:value.url,data:value.data,loading:true})),
  on(ChangePasswordSuccess,(_state,result)=>({..._state,result:result.result,loading:false}))

);

export function changepasswordReducer(state:any, action:any) {
  return _changepasswordReducer(state, action);
}