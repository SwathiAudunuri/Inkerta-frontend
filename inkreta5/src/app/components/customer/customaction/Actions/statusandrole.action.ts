import { createAction,props } from '@ngrx/store';


export const getstatusandrolenull= createAction('[get status and role null]');

export const getstatusandrole= createAction('[get status and role] Get status and role');

export const getstatusandroleSuccess=createAction('[getstatus and roleSuccess] Get status and role Data Success',
props<{result: any}>()
);