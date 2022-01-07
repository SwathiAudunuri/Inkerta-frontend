import { createAction,props } from '@ngrx/store';


export const nulltotalcompaniesstat=createAction('null total companies stat')

export const gettotalcompaniesstat= createAction('[get total companies stat] Get total companies stat');

export const gettotalcompaniesstatSuccess=createAction('[get total companies stat Success] Get total companies list Success',
props<{result: any}>()
);