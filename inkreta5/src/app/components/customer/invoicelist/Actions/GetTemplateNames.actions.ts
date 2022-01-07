import { createAction,props } from '@ngrx/store';


export const getTemplateNamesnull = createAction('[get Template Names] get Template Names value to null') 

export const getTemplateNames= createAction('[get Template Names] get Template Names',props<{url : string}>());

export const getTemplateNamesSucess=createAction('[get Template Names] get Template Names Success',
props<{result: any}>()
);