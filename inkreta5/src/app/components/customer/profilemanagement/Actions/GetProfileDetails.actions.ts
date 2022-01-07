import { createAction,props } from '@ngrx/store';

export const getProfileDetailsInitialValue= createAction('[Get Profile Details Initial Value] Get Profile Details Initial Value');

export const getProfileDetails= createAction('[Get Profile Details] Get Profile Details',props<{url : string}>());

export const getProfileDetailsSuccess=createAction('[Get Profile Details] Get Profile Details Success',props<{details: any}>());

