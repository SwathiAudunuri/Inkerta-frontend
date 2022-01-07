import { createReducer, on } from '@ngrx/store';
import { getERPData, getERPDatanull, getERPDataSucess } from '../Actions/postERP.action';

const initialState:any = {
  result : [],
  data:[],
  doc_refid:"",
  loading : false

}
// const initialState :ReadonlyArray<any>=[]
const _ERPReducer = createReducer(
  initialState,
  on(getERPDatanull,(_state)=>({..._state,result:null,data:null,doc_refid:null,loading:false})),
  on(getERPData,(_state,{doc_refid,data})=>({..._state,doc_refid:doc_refid,data:data,loading:true})),
  on(getERPDataSucess,(_state,{result})=>({..._state,result : result,loading:false}))
);

export function ERPReducer(state:any, action:any) {
  return _ERPReducer(state, action);
}