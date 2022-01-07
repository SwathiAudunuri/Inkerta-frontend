import { createReducer, on } from '@ngrx/store';
import { SaveGSTIN, SaveGSTINInitialValue, SaveGSTINSuccess } from '../Actions/savepatnerdata.actions';

const initialState:any = {
  url:"",
  result:null,
  data:null,
  loading:false
}
const _SaveGSTINReducer = createReducer(
  initialState,
  on(SaveGSTINInitialValue,(_state)=>({..._state,result:null,url:null,data:null})),
  on(SaveGSTIN,(_state,value)=>({..._state,url:value.url,data:value.data,loading:true})),
  on(SaveGSTINSuccess,(_state,result)=>({..._state,result:result.result,loading:false}))

);

export function SaveGSTINReducer(state:any, action:any) {
  return _SaveGSTINReducer(state, action);
}