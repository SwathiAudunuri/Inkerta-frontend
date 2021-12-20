import { createReducer, on } from '@ngrx/store';
//import { loginComplete ,logout} from "../actions/login.action";
import {QueryList} from '../models/query.model';
import { Action } from "rxjs/internal/scheduler/Action";
import { getQueryList, getQueryListSuccess } from '../Actions/querylist.action';



export interface QueryState{
    querylist:ReadonlyArray<QueryList>
}
const initialState :ReadonlyArray<QueryList>=[]
const _querylistReducer = createReducer(
  initialState,
  on(getQueryListSuccess, (state,action) => 
  {
      console.log(action.queries)
  return{
     ...action.queries
  }

  }
  ),

 
);

export function queryListReducer(state:any, action:any) {
  return _querylistReducer(state, action);
}