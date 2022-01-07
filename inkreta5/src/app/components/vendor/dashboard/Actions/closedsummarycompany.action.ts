import { createAction,props } from '@ngrx/store';


export const nullcompanyclosedsummary=createAction('null company closed summary ')

export const getcompanyclosedsummary= createAction('[getcompanyclosedsummary] get company closed summary');

export const getcompanyclosedsummarySuccess=createAction('[getcompanyclosedsummarySuccess]get company closed summary Success',
props<{result: any}>()
);