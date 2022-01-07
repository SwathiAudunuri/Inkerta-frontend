import { createAction,props } from '@ngrx/store';

export const postExternalInvoiceInitialvalues = createAction('[custmoer ExternalpostInvoice] custmoer Post External Invoice value to null') 

export const postExternalInvoice =  createAction('[custmoer ExternalpostInvoice] custmoer Post External Invoice',props<{postdata : any}>());

export const postExternalInvoiceSuccess=createAction('[custmoer ExternalpostInvoice] custmoer Post External Invoice Success',
props<{data:any}>()
);