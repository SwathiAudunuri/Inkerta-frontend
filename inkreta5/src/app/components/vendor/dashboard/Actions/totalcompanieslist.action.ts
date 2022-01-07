import { createAction,props } from '@ngrx/store';


export const nulltotalcompanieslist=createAction('null total companies list')

export const gettotalcompanieslist= createAction('[get total companies list] Get total companies list');

export const gettotalcompanieslistSuccess=createAction('[get total companies list Success] Get total companies list Success',
props<{result: any}>()
);