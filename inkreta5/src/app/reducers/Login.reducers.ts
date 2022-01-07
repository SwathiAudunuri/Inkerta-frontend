import { createReducer, on } from '@ngrx/store';
import { Login, LoginNull, LoginSuccess } from '../actions/login.action';

const initialState:any = {
  result : [],
  data:[],
  loading : false
}
// const initialState :ReadonlyArray<any>=[]
const _LoginReducer = createReducer(
  initialState,
//   on(Lo,(_state)=>({..._state,result:null,data:null,loading:false})),
  on(LoginNull,(_state)=>({..._state,data:null,result:null})),
  on(Login,(_state,{data})=>({..._state,data:data,result:null,loading:true})),
  on(LoginSuccess,(_state,{result})=>({..._state,result : result,loading:false}))
);

export function LoginReducer(state:any, action:any) {
  return _LoginReducer(state, action);
}