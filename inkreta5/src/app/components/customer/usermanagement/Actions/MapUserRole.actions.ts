import { createAction,props } from '@ngrx/store';


export const MapUserRolenull = createAction('[Map User Role] Map User Role to null') 

export const MapUserRole= createAction('[Map User Role]  Map User Role',props<{url:any,data:any}>());

export const MapUserRoleSucess=createAction('[Map User Role] Map User Role Success',
props<{result: any}>()
);