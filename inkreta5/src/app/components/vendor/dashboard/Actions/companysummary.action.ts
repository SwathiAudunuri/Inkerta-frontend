import { createAction,props } from '@ngrx/store';


export const nullcompanysummary=createAction('null company  summary ')

export const getcompanysummary= createAction('[getcompanysummary] get company summary',props<{id: String}>());

export const getcompanysummarySuccess=createAction('[getcompanysummarySuccess]get company summary Success',
props<{result: any}>()
);