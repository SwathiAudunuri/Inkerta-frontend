import { createReducer, on } from '@ngrx/store';
import { ExecuteAction, ExecuteActionnull, ExecuteActionSucess } from '../Actions/ExcuteAction.actions';
import { getcustomerMyinbox, getcustomerMyinboxInitialValue, getcustomerMyinboxSuccess } from '../Actions/Myinbox.action';


const initialState:any = {
result : [],
  loading:false
}
const _ExecuteAction = createReducer(
  initialState,
  on(ExecuteActionnull,(_state)=>({..._state,result:null})),
  on(ExecuteAction,(_state)=>({..._state,result:null,loading:true})),
  on(ExecuteActionSucess,(_state,result)=>({..._state,result:result,loading:false}))
 
);

export function ExecuteActionReducer(state:any, action:any) {
  return _ExecuteAction(state, action);
}