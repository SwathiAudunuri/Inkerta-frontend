import { createAction,props } from '@ngrx/store';


export const getTemplateNamesnull = createAction('[Vendor get Template Names] Vendor get Template Names value to null') 

export const getTemplateNames= createAction('[Vendor get Template Names] Vendor get Template Names',props<{url : string}>());

export const getTemplateNamesSucess=createAction('[Vendor get Template Names] Vendor get Template Names Success',
props<{result: any}>()
);