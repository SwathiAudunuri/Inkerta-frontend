import { createAction,props } from '@ngrx/store';


export const nullclosedinvfromcompany=createAction('null closed inv from company ')

export const getclosedinvfromcompany= createAction('[getclosedinvfromcompany] get closed inv from company ',props<{id: String}>());

export const getclosedinvfromcompanySuccess=createAction('[getclosedinvfromcompanySuccess]get closed inv from company Success',
props<{result: any}>()
);