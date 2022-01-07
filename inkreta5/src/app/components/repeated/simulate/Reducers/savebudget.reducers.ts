import { createReducer, on } from '@ngrx/store';
import { savebudget, savebudgetInitialValue, savebudgetSuccess } from '../Actions/savebudget.actions';


const initialState:any = {
  url:"",
  result:null,
  data:null,
  loading:false
}
const _savebudgetReducer = createReducer(
  initialState,
  on(savebudgetInitialValue,(_state)=>({..._state,result:null,url:null,data:null})),
  on(savebudget,(_state,value)=>({..._state,url:value.url,data:value.data,loading:true})),
  on(savebudgetSuccess,(_state,result)=>({..._state,result:result.result,loading:false}))

);

export function savebudgetReducer(state:any, action:any) {
  return _savebudgetReducer(state, action);
}