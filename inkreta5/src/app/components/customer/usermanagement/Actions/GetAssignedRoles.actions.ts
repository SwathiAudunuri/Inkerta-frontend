import { createAction,props } from '@ngrx/store';

export const getAssignedRolesInitialValue= createAction('[get Assigned Roles Initial Value] get Assigned Roles Initial Value');

export const getAssignedRoles= createAction('[get Assigned Roles] get Assigned Roles',props<{url : string}>());

export const getAssignedRolesSuccess=createAction('[get Assigned Roles] get Assigned Roles Success',props<{roles: any}>());

