import { createAction,props } from '@ngrx/store';

export const getpartnersInitialvalues= createAction('[getpartners] getpartners Initialvalues');

export const getpartners= createAction('[getpartners] getpartners',props<{url : string}>());

export const getpartnersSuccess=createAction('[getpartners] getpartners Success',
props<{partners: any}>()
);

