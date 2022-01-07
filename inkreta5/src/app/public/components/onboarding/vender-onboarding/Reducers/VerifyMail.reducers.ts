import { createReducer, on } from '@ngrx/store';
import { VerifyMail, VerifyMailInitislValuenull, VerifyMailSucess } from '../Actions/VerifyMail.actions';

const initialState:any = {
  result : [],
  data:[],
  loading : false
}
// const initialState :ReadonlyArray<any>=[]
const _VerifyMailReducer = createReducer(
  initialState,
  on(VerifyMailInitislValuenull,(_state)=>({..._state,result:null,data:null})),
  on(VerifyMail,(_state,{data})=>({..._state,data:data,loading:true})),
  on(VerifyMailSucess,(_state,{result})=>({..._state,result : result,loading:false}))
);

export function VerifyMailReducer(state:any, action:any) {
  return _VerifyMailReducer(state, action);
}