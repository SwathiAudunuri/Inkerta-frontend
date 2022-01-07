import { createReducer, on } from '@ngrx/store';
import { resetpassword, resetpasswordInitialValue, resetpasswordSuccess } from '../Actions/resetpassword.actions';


const initialState:any = {
  url:"",
  result:null,
  data:null,
  loading:false
}
const _resetpasswordReducer = createReducer(
  initialState,
  on(resetpasswordInitialValue,(_state)=>({..._state,result:null,url:null,data:null})),
  on(resetpassword,(_state,value)=>({..._state,url:value.url,data:value.data,loading:true})),
  on(resetpasswordSuccess,(_state,result)=>({..._state,result:result.result,loading:false}))

);

export function resetpasswordReducer(state:any, action:any) {
  return _resetpasswordReducer(state, action);
}