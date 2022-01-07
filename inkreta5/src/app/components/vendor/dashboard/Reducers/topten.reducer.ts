import { createReducer, on } from '@ngrx/store';
import { result } from 'lodash';
import { getMetrics, getMetricsSuccess, nullMetrics } from '../Actions/metrics.action';
import { gettoptenSuccess, nulltopten } from '../Actions/top10.action';

const initialState:any = {
  result : [],
  data:[],
  postresult:[],
  doc_refid:"",
  loading : false

}

const _gettoptencustomersReducer = createReducer(
    initialState,
    on(nulltopten,(_state,res)=>({..._state,result:null})),
   // on(getMetrics,(_state,res)=>({..._state})),

    
    on(gettoptenSuccess,(_state,result)=>({..._state,result:result.result,loading:false})),
  );
  
  export function gettoptencustomersReducer(state:any, action:any) {
    return _gettoptencustomersReducer(state, action);
  }