import { createAction,props } from '@ngrx/store';

export const getDocumentInitialvalues= createAction('[getDocument] getDocument Initialvalues');

export const getDocument= createAction('[getDocument] getDocument',props<{url : string}>());

export const getDocumentSuccess=createAction('[getDocument] getDocument Success',
props<{doc: any}>()
);

