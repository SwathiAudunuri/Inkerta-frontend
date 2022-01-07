import { createReducer, on } from '@ngrx/store';

import { getcustomercustomarolesdetSuccess, getcustomercustomrolesdetnull } from '../Actions/roledetail.action';

const initialState:any = {
  result : [],
  data:[],
  postresult:[],
  doc_refid:"",
  loading : false

}

const _CustomrolesdetailsReducer = createReducer(
    initialState,
    on(getcustomercustomrolesdetnull,(_state)=>({..._state,result:null})),
    on(getcustomercustomarolesdetSuccess,(_state,res)=>({..._state,result:res.res,loading:false})),
  //  on(addsuccesscustomerCustomactions,(_state,res)=>({..._state,postresult:res,loading:false}))
  );
  
  export function CustomrolesdetailsReducer(state:any, action:any) {
    return _CustomrolesdetailsReducer(state, action);
  }