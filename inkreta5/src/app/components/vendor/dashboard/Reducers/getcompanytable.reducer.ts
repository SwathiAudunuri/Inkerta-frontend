import { createReducer, on } from '@ngrx/store';
import { result } from 'lodash';
import { getcompanytableSuccess, nullcompanytable } from '../Actions/company.action';
import { getMetrics, getMetricsSuccess, nullMetrics } from '../Actions/metrics.action';

const initialState:any = {
  result : [],
  data:[],
  postresult:[],
  doc_refid:"",
  loading : false

}

const _getCompanyTableReducer = createReducer(
    initialState,
    on(nullcompanytable,(_state,res)=>({..._state,result:null})),

    
    on(getcompanytableSuccess,(_state,result)=>({..._state,result:result.result,loading:false})),
  );
  
  export function getCompanyTableReducer(state:any, action:any) {
    return _getCompanyTableReducer(state, action);
  }