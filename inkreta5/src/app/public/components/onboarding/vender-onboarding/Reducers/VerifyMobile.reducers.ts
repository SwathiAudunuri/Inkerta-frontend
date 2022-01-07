import { createReducer, on } from '@ngrx/store';
import { VerifyMobile, VerifyMobileInitislValuenull, VerifyMobileSucess } from '../Actions/VerifyMobile.actions';

const initialState:any = {
  result : [],
  data:[],
  loading : false
}
// const initialState :ReadonlyArray<any>=[]
const _VerifyMobileReducer = createReducer(
  initialState,
  on(VerifyMobileInitislValuenull,(_state)=>({..._state,result:null,data:null})),
  on(VerifyMobile,(_state,{data})=>({..._state,data:data,loading:true})),
  on(VerifyMobileSucess,(_state,{result})=>({..._state,result : result,loading:false}))
);

export function VerifyMobileReducer(state:any, action:any) {
  return _VerifyMobileReducer(state, action);
}