import { createReducer, on } from '@ngrx/store';
import { result } from 'lodash';
import { getMetrics, getMetricsSuccess, nullMetrics } from '../Actions/metrics.action';

const initialState:any = {
  result : [],
  data:[],
  postresult:[],
  doc_refid:"",
  loading : false

}

const _getMetricsReducer = createReducer(
    initialState,
    on(nullMetrics,(_state,res)=>({..._state,result:null})),
   // on(getMetrics,(_state,res)=>({..._state})),

    
    on(getMetricsSuccess,(_state,result)=>({..._state,result:result.result,loading:false})),
  );
  
  export function getMetricsReducer(state:any, action:any) {
    return _getMetricsReducer(state, action);
  }