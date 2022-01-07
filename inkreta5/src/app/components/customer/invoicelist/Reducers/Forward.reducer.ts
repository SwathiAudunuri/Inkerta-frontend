import { createReducer, on } from '@ngrx/store';
import { ForwardData, ForwardDatanull, ForwardDataSucess } from '../Actions/Forward.action';

const initialState:any = {
  result : [],
  data:[],
  loading : false
}
// const initialState :ReadonlyArray<any>=[]
const _ForwardReducer = createReducer(
  initialState,
  on(ForwardDatanull,(_state)=>({..._state,result:null,data:null,loading:false})),
  on(ForwardData,(_state,{data})=>({..._state,data:data,loading:true})),
  on(ForwardDataSucess,(_state,{result})=>({..._state,result : result,loading:false}))
);

export function ForwardReducer(state:any, action:any) {
  return _ForwardReducer(state, action);
}