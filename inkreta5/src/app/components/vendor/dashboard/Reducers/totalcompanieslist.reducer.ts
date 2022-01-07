import { createReducer, on } from '@ngrx/store';
import { result } from 'lodash';
import { gettoptenSuccess, nulltopten } from '../Actions/top10.action';
import { gettotalcompanieslistSuccess, nulltotalcompanieslist } from '../Actions/totalcompanieslist.action';

const initialState:any = {
  result : [],
  data:[],
  postresult:[],
  doc_refid:"",
  loading : false

}

const _gettotalcompanieslistReducer = createReducer(
    initialState,
    on(nulltotalcompanieslist,(_state,res)=>({..._state,result:null})),
   // on(getMetrics,(_state,res)=>({..._state})),

    
    on(gettotalcompanieslistSuccess,(_state,result)=>({..._state,result:result.result,loading:false})),
  );
  
  export function gettotalcompanieslistReducer(state:any, action:any) {
    return _gettotalcompanieslistReducer(state, action);
  }