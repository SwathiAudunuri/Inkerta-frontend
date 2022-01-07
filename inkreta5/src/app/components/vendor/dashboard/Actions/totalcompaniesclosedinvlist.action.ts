import { createAction,props } from '@ngrx/store';


export const nulltotalcompaniesclosedinvlist=createAction('null total companies inv list')

export const gettotalcompaniesclosedinvlist= createAction('[get total companies inv list] Get total companies  invlist');

export const gettotalcompaniesclosedinvlistSuccess=createAction('[get total companies inv list Success] Get total companies inv list Success',
props<{result: any}>()
);