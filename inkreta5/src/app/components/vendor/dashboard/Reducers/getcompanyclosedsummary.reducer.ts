import { createReducer, on } from '@ngrx/store';
import { getcompanyclosedsummarySuccess, nullcompanyclosedsummary } from '../Actions/closedsummarycompany.action';

const initialState:any = {
  result : [],
  data:[],
  postresult:[],
  doc_refid:"",
  loading : false

}

const _getCompanyClosedSummaryReducer = createReducer(
    initialState,
    on(nullcompanyclosedsummary,(_state,res)=>({..._state,result:null})),

    
    on(getcompanyclosedsummarySuccess,(_state,result)=>({..._state,result:result.result,loading:false})),
  );
  
  export function getCompanyClosedSummaryReducer(state:any, action:any) {
    return _getCompanyClosedSummaryReducer(state, action);
  }