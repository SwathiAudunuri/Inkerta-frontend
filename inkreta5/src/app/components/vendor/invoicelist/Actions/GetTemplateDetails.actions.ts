import { createAction,props } from '@ngrx/store';


export const getTemplateDetailsnull = createAction('[Vendor get Template Details] Vendor get Template Details value to null') 

export const getTemplateDetails= createAction('[ Vendor get Template Details] Vendor get Template Details',props<{url : string}>());

export const getTemplateDetailsSucess=createAction('[Vendor get Template Details] Vendor get Template Details Success',
props<{result: any}>()
);