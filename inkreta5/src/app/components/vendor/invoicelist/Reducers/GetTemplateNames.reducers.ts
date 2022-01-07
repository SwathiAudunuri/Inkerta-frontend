import { createReducer, on } from '@ngrx/store';
import { getTemplateNames, getTemplateNamesnull, getTemplateNamesSucess } from '../Actions/GetTemplateNames.actions';

// const initialState :ReadonlyArray<any>=[]
const initialState:any={
    result:[],
  loading:false
}
const _getTemplateNamesReducer = createReducer(
  initialState,
  on(getTemplateNamesnull,(_state)=>({..._state,result:null})),
  on(getTemplateNames,(_state,invoices)=>({..._state,loading:true})),
  on(getTemplateNamesSucess,(_state,result)=>({..._state,result:result.result,loading:false}))

);

export function getTemplateNamesReducer(state:any, action:any) {
  return _getTemplateNamesReducer(state, action);
}