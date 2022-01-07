import { createAction,props } from '@ngrx/store';

export const AdditionalDetailsInitialValues= createAction('[Additional Details]  Additional Details Initial Values to NUll');

export const GetAdditionalDetails= createAction('[Additional Details]  Additional Details',props<{url : string}>());

export const GetAdditionalDetailsSucess=createAction('[Additional Details] Additional Details Success',
props<{result: any}>()
);