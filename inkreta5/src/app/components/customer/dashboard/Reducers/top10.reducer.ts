import { createReducer, on } from '@ngrx/store';
import { result } from 'lodash';
import { getMetrics, getMetricsSuccess, nullMetrics } from '../Actions/metrics.action';
import { gettoptenSuccess, nulltoptenvendors,  } from '../Actions/top10.action';

const initialState:any = {
  result : [],
  data:[],
  postresult:[],
  doc_refid:"",
  loading : false

}

const _gettoptenvendorsReducer = createReducer(
    initialState,
    on(nulltoptenvendors,(_state,res)=>({..._state,result:null})),
   // on(getMetrics,(_state,res)=>({..._state})),

    
    on(gettoptenSuccess,(_state,result)=>({..._state,result:result.result,loading:false})),
  );
  
  export function gettoptenvendorsReducer(state:any, action:any) {
    return _gettoptenvendorsReducer(state, action);
  }