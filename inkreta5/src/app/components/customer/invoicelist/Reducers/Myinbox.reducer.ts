import { createReducer, on } from '@ngrx/store';
import { getcustomerMyinbox, getcustomerMyinboxInitialValue, getcustomerMyinboxSuccess } from '../Actions/Myinbox.action';


const initialState:any = {
  inbox : [],
  loading:false
}
const _invoiceMyinbox = createReducer(
  initialState,
  on(getcustomerMyinboxInitialValue,(_state)=>({..._state,inbox:null})),
  on(getcustomerMyinbox,(_state)=>({..._state,loading:true})),
  on(getcustomerMyinboxSuccess,(_state,myinbox)=>({..._state,inbox:myinbox,loading:false}))
 
);

export function customerMyinboxReducer(state:any, action:any) {
  return _invoiceMyinbox(state, action);
}