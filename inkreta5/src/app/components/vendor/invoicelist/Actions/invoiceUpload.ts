import { createAction,props } from '@ngrx/store';

export const postInvoiceInitialvalues = createAction('[postInvoice] Post Invoice value to null') 

export const postInvoice =  createAction('[postInvoice] Post Invoice',props<{postdata : any}>());

export const postInvoiceSuccess=createAction('[postInvoice] Post Invoice Success',
props<{data:any}>()
);