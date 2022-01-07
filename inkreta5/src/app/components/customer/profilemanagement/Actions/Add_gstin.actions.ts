import { createAction,props } from '@ngrx/store';

export const AddGstinInitialValue= createAction('[Add Gstin Initial Value] Add Gstin Initial Value');

export const AddGstin= createAction('[Add Gstin] Add Gstin',props<{url : string}>());

export const AddGstinSuccess=createAction('[Add Gstin] Add Gstin Success',props<{details: any}>());

