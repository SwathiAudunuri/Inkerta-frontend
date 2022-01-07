import { createReducer, on } from '@ngrx/store';

import { PaidRecords, PaidRecordsnull, PaidRecordsSuccess } from '../Actions/paidRecord.actions';



const initialState:any = {
  result : null,
  url:"",
  loading:false
}

const _PaidRecordsReducer = createReducer(
  initialState,
  on(PaidRecordsnull,(_state)=>({..._state,result:null,url:null,loading:false})),
  on(PaidRecords,(_state,url)=>({..._state,url:url,loading:true})),
  on(PaidRecordsSuccess,(_state,res)=>({..._state,result:res.res,loading:false}))
 
);

export function PaidRecordsReducer(state:any, action:any) {
  return _PaidRecordsReducer(state, action);
}