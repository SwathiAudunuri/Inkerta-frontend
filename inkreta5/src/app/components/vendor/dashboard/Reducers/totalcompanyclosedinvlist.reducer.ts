import { createReducer, on } from '@ngrx/store';

import { gettotalcompaniesclosedinvlistSuccess, nulltotalcompaniesclosedinvlist } from '../Actions/totalcompaniesclosedinvlist.action';

const initialState:any = {
  result : [],
  data:[],
  postresult:[],
  doc_refid:"",
  loading : false

}

const _gettotalcompaniesclosedinvlistReducer = createReducer(
    initialState,
    on(nulltotalcompaniesclosedinvlist,(_state,res)=>({..._state,result:null})),
   // on(getMetrics,(_state,res)=>({..._state})),

    
    on(gettotalcompaniesclosedinvlistSuccess,(_state,result)=>({..._state,result:result.result,loading:false})),
  );
  
  export function gettotalcompaniesclosedinvlistReducer(state:any, action:any) {
    return _gettotalcompaniesclosedinvlistReducer(state, action);
  }