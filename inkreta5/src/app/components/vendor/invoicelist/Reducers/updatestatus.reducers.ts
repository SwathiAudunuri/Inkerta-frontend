import { createReducer, on } from '@ngrx/store';
//import { loginComplete ,logout} from "../actions/login.action";
import {QueryList} from '../models/query.model';
import { Action } from "rxjs/internal/scheduler/Action";
import { getQueryList, getQueryListSuccess } from '../Actions/querylist.action';
import { updateStatus, updateStatusnull, updateSuccess } from '../Actions/updatestatus.action';


const initialState:any = {
  result : [],
  url:"",
  loading : false
}
const _updateStatusReducer = createReducer(
  
  initialState,
  on(updateStatusnull,(_state)=>({..._state,result:null,url:null,loading:false})),
  on(updateStatus,(_state,url)=>({..._state,url:url,loading:true})),
  on(updateSuccess,(_state,{res})=>({..._state,result : res,loading:false}))

 
);

export function updateStatusReducer(state:any, action:any) {
  return _updateStatusReducer(state, action);
}