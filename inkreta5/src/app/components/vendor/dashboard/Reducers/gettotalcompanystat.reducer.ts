import { createReducer, on } from '@ngrx/store';
import { result } from 'lodash';
import { gettoptenSuccess, nulltopten } from '../Actions/top10.action';
import { gettotalcompanieslistSuccess, nulltotalcompanieslist } from '../Actions/totalcompanieslist.action';
import { gettotalcompaniesstatSuccess, nulltotalcompaniesstat } from '../Actions/totalcompanystat.action';

const initialState:any = {
  result : [],
  data:[],
  postresult:[],
  doc_refid:"",
  loading : false

}

const _gettotalcompaniesstatReducer = createReducer(
    initialState,
    on(nulltotalcompaniesstat,(_state,res)=>({..._state,result:null})),
   // on(getMetrics,(_state,res)=>({..._state})),

    
    on(gettotalcompaniesstatSuccess,(_state,result)=>({..._state,result:result.result,loading:false})),
  );
  
  export function gettotalcompaniesstatReducer(state:any, action:any) {
    return _gettotalcompaniesstatReducer(state, action);
  }