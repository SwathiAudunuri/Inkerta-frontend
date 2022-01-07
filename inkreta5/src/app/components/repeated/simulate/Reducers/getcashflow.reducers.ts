import { createReducer, on } from '@ngrx/store';
import { GetCashFlow, GetCashFlowInitialValue, GetCashFlowSuccess } from '../Actions/getcashflow.actions';


const initialState:any = {
  url:"",
  result:null,
  data:null,
  loading:false
}
const _GetCashFlowReducer = createReducer(
  initialState,
  on(GetCashFlowInitialValue,(_state)=>({..._state,result:null,url:null,data:null})),
  on(GetCashFlow,(_state,value)=>({..._state,url:value.url,data:value.data,loading:true})),
  on(GetCashFlowSuccess,(_state,result)=>({..._state,result:result.result,loading:false}))

);

export function GetCashFlowReducer(state:any, action:any) {
  return _GetCashFlowReducer(state, action);
}