import { createAction,props } from '@ngrx/store';

export const AddGSTINInitialValue= createAction('[Add GSTIN Initial Value] Add GSTIN Initial Value');

export const AddGSTIN= createAction('[Add GSTIN] Add GSTIN',props<{url : string}>());

export const AddGSTINSuccess=createAction('[Add GSTIN] Add GSTIN Success',props<{data: any}>());

