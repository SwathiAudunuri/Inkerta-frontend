import { createReducer, on } from '@ngrx/store';
import { getTemplateDetails, getTemplateDetailsnull, getTemplateDetailsSucess } from '../Actions/GetTemplateDetails.actions';
import {getUsersForwardnull,getUsersForward,getUsersForwardSucess} from '../Actions/GetUsersForForward.actions'

// const initialState :ReadonlyArray<any>=[]
const initialState:any={
    result:[],
  loading:false
}
const _getTemplateDetailsReducer = createReducer(
  initialState,
  on(getTemplateDetailsnull,(_state)=>({..._state,result:null})),
  on(getTemplateDetails,(_state,invoices)=>({..._state,loading:true})),
  on(getTemplateDetailsSucess,(_state,result)=>({..._state,result:result.result,loading:false}))

);

export function getTemplateDetailsReducer(state:any, action:any) {
  return _getTemplateDetailsReducer(state, action);
}