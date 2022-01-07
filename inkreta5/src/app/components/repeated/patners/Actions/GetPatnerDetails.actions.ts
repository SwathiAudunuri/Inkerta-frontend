import { createAction,props } from '@ngrx/store';

export const GetPatnerDetailsInitialValue= createAction('[Get Patner Details Initial Value] Get Patner Details Initial Value');

export const GetPatnerDetails= createAction('[Get Patner Details] Get Patner Details',props<{url : string}>());

export const GetPatnerDetailsSuccess=createAction('[Get Patner Details]Get Patner Details Success',props<{data: any}>());

