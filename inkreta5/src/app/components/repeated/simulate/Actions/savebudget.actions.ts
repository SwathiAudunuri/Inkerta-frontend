import { createAction,props } from '@ngrx/store';

export const savebudgetInitialValue= createAction('[Save Budget Initial Value] Save Budget Initial Value');

export const savebudget= createAction('[Save Budget] Save Budget',props<{url : string,data:any}>());

export const savebudgetSuccess=createAction('[Save Budget] Save Budget Success',props<{result: any}>());

