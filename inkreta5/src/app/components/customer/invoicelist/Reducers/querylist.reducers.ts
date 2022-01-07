import { createReducer, on } from '@ngrx/store';
//import { loginComplete ,logout} from "../actions/login.action";
import { QueryList } from '../models/query.model';
import { Action } from "rxjs/internal/scheduler/Action";
import { getcustomerQueryList, getcustomerQueryListSuccess, getQueryAttachmentSuccess } from '../Actions/querylist.action';



export interface QueryState {
  querylist1: ReadonlyArray<QueryList>
}
const initialState: ReadonlyArray<QueryList> = []
const _querylistReducer = createReducer(
  initialState,
  on(getcustomerQueryListSuccess, (state, action) => {
    if (action.queries) {
      return action.queries

    }
    else {
      return state
    }


  }
  ),
  on(getQueryAttachmentSuccess, (state, action) => {
    if (action.res) {
      return action.res

    }
    else {
      //  //console.log(action.queries)
      return state
    }


  }
  ),


);

export function customerqueryListReducer(state: any, action: any) {
  return _querylistReducer(state, action);
}