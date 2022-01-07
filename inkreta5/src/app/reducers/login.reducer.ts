import { createReducer, on } from '@ngrx/store';
import { initialState } from "../state/auth.state";
import { loginComplete ,logout} from "../actions/login.action";
import { User } from '../models/user.model';
import { Action } from "rxjs/internal/scheduler/Action";



const _loginReducer = createReducer(
  initialState,
  on(loginComplete, (state,action) => 
  {
      //console.log(action)
  return{
      ...state,
      user:action.user,
  }
  }
  ),
  on(logout, (state,action) => 
  {
      //console.log(action)
  return{
      ...state,
        user:action.user 
  }
  }
  ),
 
);

export function loginReducer(state:any, action:any) {
  return _loginReducer(state, action);
}