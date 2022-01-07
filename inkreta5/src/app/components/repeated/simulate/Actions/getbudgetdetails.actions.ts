import { createAction,props } from '@ngrx/store';

export const GetBudgetDetailsInitialValue= createAction('[Get Budget Details Initial Value] Get Budget Details Initial Value');

export const GetBudgetDetails= createAction('[Get Budget Details] Get Budget Details',props<{url : string}>());

export const GetBudgetDetailsSuccess=createAction('[Get Budget Details]Get Budget Details Success',props<{data: any}>());

