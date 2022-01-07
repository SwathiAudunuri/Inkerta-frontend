import { createAction,props } from '@ngrx/store';

export const AdditionalDetailsInitialValues= createAction('[Additional Details1]  Additional Details Initial Values to NUll');

export const GetAdditionalDetails= createAction('[Additional Details1]  Additional Details',props<{url : string}>());

export const GetAdditionalDetailsSucess=createAction('[Additional Details1] Additional Details Success',
props<{result: any}>()
);