import { createReducer, on } from '@ngrx/store';
import { MapUserRole, MapUserRolenull, MapUserRoleSucess } from '../Actions/MapUserRole.actions';

const initialState:any = {
  result : [],
  data:[],
  loading : false
}
// const initialState :ReadonlyArray<any>=[]
const _MapUserRoleReducer = createReducer(
  initialState,
  on(MapUserRolenull,(_state)=>({..._state,result:null,data:null,loading:false})),
  on(MapUserRole,(_state,{data})=>({..._state,data:data,loading:true})),
  on(MapUserRoleSucess,(_state,{result})=>({..._state,result : result,loading:false}))
);

export function MapUserRoleReducer(state:any, action:any) {
  return _MapUserRoleReducer(state, action);
}