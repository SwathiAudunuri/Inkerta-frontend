import { createReducer, on } from '@ngrx/store';
import { result } from 'lodash';
import { getcompanytableSuccess, nullcompanytable } from '../Actions/company.action';
import { getcompanysummarySuccess, nullcompanysummary } from '../Actions/companysummary.action';
import { getMetrics, getMetricsSuccess, nullMetrics } from '../Actions/metrics.action';

const initialState:any = {
  result : [],
  data:[],
  postresult:[],
  doc_refid:"",
  loading : false

}

const _getCompanySummaryReducer = createReducer(
    initialState,
    on(nullcompanysummary,(_state,res)=>({..._state,result:null})),

    
    on(getcompanysummarySuccess,(_state,result)=>({..._state,result:result.result,loading:false})),
  );
  
  export function getCompanySummaryReducer(state:any, action:any) {
    return _getCompanySummaryReducer(state, action);
  }