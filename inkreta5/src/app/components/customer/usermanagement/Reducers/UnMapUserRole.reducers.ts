import { createReducer, on } from '@ngrx/store';
import { UnMapUserRole, UnMapUserRolenull, UnMapUserRoleSucess } from '../Actions/UnMapUserRole.actions';

const initialState:any = {
  result : [],
  data:[],
  loading : false
}
// const initialState :ReadonlyArray<any>=[]
const _UnMapUserRoleReducer = createReducer(
  initialState,
  on(UnMapUserRolenull,(_state)=>({..._state,result:null,data:null,loading:false})),
  on(UnMapUserRole,(_state,{data})=>({..._state,data:data,loading:true})),
  on(UnMapUserRoleSucess,(_state,{result})=>({..._state,result : result,loading:false}))
);

export function UnMapUserRoleReducer(state:any, action:any) {
  return _UnMapUserRoleReducer(state, action);
}