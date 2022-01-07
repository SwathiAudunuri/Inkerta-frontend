import { createReducer, on } from '@ngrx/store';
// import { getERPData, getERPDataSucess } from '../Actions/postERP.action';

const initialState = {
  result : [],
  doc_refid:"",
  loading : false

}
// const initialState :ReadonlyArray<any>=[]
// const _ERPReducer = createReducer(
//   initialState,
//   on(getERPData,(_state,{doc_refid})=>({..._state,doc_refid:doc_refid,loading:true})),
//   on(getERPDataSucess,(_state,{result})=>({..._state,result : result,loading:false}))
// );

// export function ERPReducer(state:any, action:any) {
//   return _ERPReducer(state, action);
// }