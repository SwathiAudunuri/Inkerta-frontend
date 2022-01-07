import { createAction,props } from '@ngrx/store';

export const postExternalInvoiceInitialvalues = createAction('[ExternalpostInvoice] Post External Invoice value to null') 

export const postExternalInvoice =  createAction('[ExternalpostInvoice] Post External Invoice',props<{postdata : any}>());

export const postExternalInvoiceSuccess=createAction('[ExternalpostInvoice] Post External Invoice Success',
props<{data:any}>()
);