import { createAction,props } from '@ngrx/store';

export const getpartnersDetailsInitialvalues= createAction('[getpartnersDetails] getpartnersDetails Initialvalues');

export const getpartnersDetails= createAction('[getpartnersDetails] getpartnersDetails',props<{url : string}>());

export const getpartnersDetailsSuccess=createAction('[getpartnersDetails] getpartnersDetails Success',
props<{details: any}>()
);

