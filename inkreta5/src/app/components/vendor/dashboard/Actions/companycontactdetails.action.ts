import { createAction,props } from '@ngrx/store';


export const nullcompanycontactdetails=createAction('null company contact details ')

export const getcompanycontactdetails= createAction('[getcompanycontact] get company contact details',props<{id: String}>());

export const getcompanycontactdetailsSuccess=createAction('[getcompanycontactdetailsSuccess] get company contact details Success',
props<{result: any}>()
);