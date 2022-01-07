import { createAction,props } from '@ngrx/store';

export const Additional_DetailsInitialValue= createAction('[Additional Details Initial Value profile] Additional Details Initial Value');

export const Additional_Details= createAction('[Additional Details profile] Additional Details',props<{url : string}>());

export const Additional_DetailsSuccess=createAction('[Additional Details profile]  Additional Details Success',props<{details: any}>());

