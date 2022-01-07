import { createAction,props } from '@ngrx/store';

export const SaveGSTINInitialValue= createAction('[Save GSTIN Initial Value] Save GSTIN Initial Value');

export const SaveGSTIN= createAction('[Save GSTIN] Save GSTIN',props<{url : string,data:any}>());

export const SaveGSTINSuccess=createAction('[Save GSTIN] Save GSTIN Success',props<{result: any}>());

