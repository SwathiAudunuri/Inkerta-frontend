import { createReducer, on } from '@ngrx/store';
import { AddGSTIN, AddGSTINInitialValue, AddGSTINSuccess } from '../Actions/AddGstin.action';

const initialState:any = {
  url:"",
  result:null,
  loading:false
}
const _AddGSTINReducer = createReducer(
  initialState,
  on(AddGSTINInitialValue,(_state)=>({..._state,result:null,url:null})),
  on(AddGSTIN,(_state,url)=>({..._state,url:url,loading:true})),
  on(AddGSTINSuccess,(_state,data)=>({..._state,result:data.data,loading:false}))

);

export function AddGSTINReducer(state:any, action:any) {
  return _AddGSTINReducer(state, action);
}