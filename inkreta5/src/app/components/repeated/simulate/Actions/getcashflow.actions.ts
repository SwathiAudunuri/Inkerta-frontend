import { createAction,props } from '@ngrx/store';

export const GetCashFlowInitialValue= createAction('[Get Cash Flow Initial Value] Get Cash Flow Initial Value');

export const GetCashFlow= createAction('[Get Cash Flow] Get Cash Flow',props<{url : string,data:any}>());

export const GetCashFlowSuccess=createAction('[Get Cash Flow] Get Cash Flow Success',props<{result: any}>());

