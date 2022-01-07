import { createAction,props } from '@ngrx/store';

export const getUserDetailsInitialValue= createAction('[Get User Details Initial Value] Get User Details Initial Value');

export const getUserDetails= createAction('[Get User Details] Get User Details',props<{url : string}>());

export const getUserDetailsSuccess=createAction('[Get User Details] Get User Details Success',props<{details: any}>());

