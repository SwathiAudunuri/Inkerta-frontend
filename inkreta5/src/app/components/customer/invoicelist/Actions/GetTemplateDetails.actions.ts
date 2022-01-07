import { createAction,props } from '@ngrx/store';


export const getTemplateDetailsnull = createAction('[get Template Details] get Template Details value to null') 

export const getTemplateDetails= createAction('[get Template Details] get Template Details',props<{url : string}>());

export const getTemplateDetailsSucess=createAction('[get Template Details] get Template Details Success',
props<{result: any}>()
);