import { createReducer, on } from '@ngrx/store';
import { CreateUser, CreateUsernull, CreateUserSucess } from '../Actions/CreateUser.actions';

const initialState:any = {
  result : [],
  data:[],
  loading : false
}
// const initialState :ReadonlyArray<any>=[]
const _CreateUserReducer = createReducer(
  initialState,
  on(CreateUsernull,(_state)=>({..._state,result:null,data:null,loading:false})),
  on(CreateUser,(_state,{data})=>({..._state,data:data,loading:true})),
  on(CreateUserSucess,(_state,{result})=>({..._state,result : result,loading:false}))
);

export function CreateUserReducer(state:any, action:any) {
  return _CreateUserReducer(state, action);
}