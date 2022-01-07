import { createReducer, on } from '@ngrx/store';
import { result } from 'lodash';
import { getclosedinvfromcompanySuccess, nullclosedinvfromcompany } from '../Actions/closedinvfromcompany.action';
import { getcompanytableSuccess, nullcompanytable } from '../Actions/company.action';
import { getMetrics, getMetricsSuccess, nullMetrics } from '../Actions/metrics.action';

const initialState:any = {
  result : [],
  data:[],
  postresult:[],
  doc_refid:"",
  loading : false

}

const _getclosedinvfromcompanyReducer = createReducer(
    initialState,
    on(nullclosedinvfromcompany,(_state,res)=>({..._state,result:null})),

    
    on(getclosedinvfromcompanySuccess,(_state,result)=>({..._state,result:result.result,loading:false})),
  );
  
  export function getclosedinvlistfromcompanyReducer(state:any, action:any) {
    return _getclosedinvfromcompanyReducer(state, action);
  }