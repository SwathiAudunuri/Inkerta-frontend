import { createAction,props } from '@ngrx/store';


export const nulltoptenvendors=createAction('null topten vendors')

export const gettoptenvendors= createAction('[get topten vendors] Get topten vendors');

export const gettoptenSuccess=createAction('[get vendors topten Success] Get vendors topten Success',
props<{result: any}>()
);