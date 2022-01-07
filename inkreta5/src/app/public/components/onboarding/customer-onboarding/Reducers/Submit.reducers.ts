import { createReducer, on } from '@ngrx/store';
import { SubmitData, Submitnull, SubmitSucess } from '../Actions/Submit.actions';

const initialState:any = {
  result : [],
  data:[],
  loading : false
}
// const initialState :ReadonlyArray<any>=[]
const _SubmitDataReducer = createReducer(
  initialState,
  on(Submitnull,(_state)=>({..._state,result:null,data:null})),
  on(SubmitData,(_state,{data})=>({..._state,data:data,loading:true})),
  on(SubmitSucess,(_state,{result})=>({..._state,result : result,loading:false}))
);

export function SubmitDataReducer(state:any, action:any) {
  return _SubmitDataReducer(state, action);
}