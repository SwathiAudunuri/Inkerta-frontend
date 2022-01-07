import { createAction,props } from '@ngrx/store';


export const nullcompanytable=createAction('null company table ')

export const getcompanytable= createAction('[getcompanytable] get company table',props<{id: String}>());

export const getcompanytableSuccess=createAction('[getcompanytableSuccess]get company table Success',
props<{result: any}>()
);