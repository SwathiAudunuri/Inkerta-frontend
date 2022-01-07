import { createAction,props } from '@ngrx/store';


export const UnMapUserRolenull = createAction('[UnMap User Role] UnMap User Role to null') 

export const UnMapUserRole= createAction('[UnMap User Role]  UnMap User Role',props<{url:any,data:any}>());

export const UnMapUserRoleSucess=createAction('[UnMap User Role] UnMap User Role Success',
props<{result: any}>()
);