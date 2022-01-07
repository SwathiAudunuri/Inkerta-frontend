import { createReducer, on } from '@ngrx/store';
//import { loginComplete ,logout} from "../actions/login.action";
import {QueryList} from '../models/query.model';
import { Action } from "rxjs/internal/scheduler/Action";
import { getcustomerQueryList, getcustomerQueryListSuccess } from '../Actions/querylist.action';
import { customerupdateStatus, customerupdateStatusnull, customerupdateSuccess } from '../Actions/updatestatus.action';



const initialState:any = {
  result : null,
  url:"",
  loading:false
}

const _updateStatusReducer = createReducer(
  initialState,
  on(customerupdateStatusnull,(_state)=>({..._state,result:null,url:null,loading:false})),
  on(customerupdateStatus,(_state,url)=>({..._state,url:url,loading:true})),
  on(customerupdateSuccess,(_state,res)=>({..._state,result:res.res,loading:false}))
 
);

export function customerupdateStatusReducer(state:any, action:any) {
  return _updateStatusReducer(state, action);
}